function checkMax(checkOne, exit) {
    const arrayMin = checkOne.map(data => data.invested * data.preference);
    const sumMin = arrayMin.reduce((total, currentValue) => total + currentValue, 0);
    const commomMin = exit - sumMin;
    let updatedCommomMin = commomMin;
    let updateExit = exit;

    let excludeMax = [];
    for (let serie of checkOne) {

        const quote = serie.reQuote || serie.quote;
        const maxRet: number = serie.invested * serie.cap;
        let minRet: number = serie.invested * serie.preference;
        if (minRet > updateExit) minRet = updateExit;
        let ret: number = minRet + updatedCommomMin * quote;
        const commom = quote * updatedCommomMin;

        if (commom < maxRet && ret > maxRet && !excludeMax.length && serie.preference != 0) {
            excludeMax.push({
                ...serie,
                ret: maxRet
            });
        }

    }

    return excludeMax[0];
}

export default checkMax;