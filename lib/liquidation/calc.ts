import rebalanceQuotes from "./rebalance";
import checkMax from "./checkMax";
import checkConvert from "./checkConvert";

function calcRet(check, exit) {
    const arrayMin = check.map(data => data.invested * data.preference);
    const sumMin = arrayMin.reduce((total, currentValue) => total + currentValue, 0);
    const commomMin = exit - sumMin;
    let updatedCommomMin = commomMin;
    let updateExit = exit;

    let calc = [];
    for (let serie of check) {

        const quote = serie.reQuote || serie.quote;
        const commom = quote * updatedCommomMin;
        const maxRet: number = serie.invested * serie.cap;
        let minRet: number = serie.invested * serie.preference;
        if (minRet > updateExit) minRet = updateExit;
        let ret: number = minRet + updatedCommomMin * quote;

        if (ret > maxRet && serie.preference != 0) {
            ret = maxRet;
            updatedCommomMin -= minRet;
            updateExit -= ret;
            check = rebalanceQuotes(serie.name, check);
        }

        if (serie.preference == 0) {
            ret = commom;
        }

        calc.push({
            ...serie,
            ret
        });

    }

    return calc;

}

function calc(data, exit) {

    let updateExit = exit, excludeMax = [], maxCheck: any = true;
    while (maxCheck) {
        maxCheck = checkMax(data, updateExit);

        if (maxCheck) {
            excludeMax.unshift(maxCheck);
            data = rebalanceQuotes(maxCheck.name, data);
            updateExit -= maxCheck.ret;
        }

    }

    data = checkConvert(data, updateExit);

    const calcReturn = calcRet(data, updateExit);

    if (excludeMax.length) {
        for (const el of excludeMax) {
            calcReturn.push(el)
        }
    };

    return calcReturn;
}

export default calc;