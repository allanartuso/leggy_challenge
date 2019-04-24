function checkMax(checkOne, exit) {
    // console.log("");
    // console.log("oooooooooo")
    const arrayMin = checkOne.map(data => data.invested * data.preference);
    const sumMin = arrayMin.reduce((total, currentValue) => total + currentValue, 0);
    const commomMin = exit - sumMin;
    // console.log(exit)
    let updatedCommomMin = commomMin;
    let updateExit = exit;

    let excludeMax = [];
    for (let serie of checkOne) {
        // console.log("");

        const quote = serie.reQuote || serie.quote;
        const maxRet: number = serie.invested * serie.cap;
        let minRet: number = serie.invested * serie.preference;
        if (minRet > updateExit) minRet = updateExit;
        let ret: number = minRet + updatedCommomMin * quote;
        const commom = quote * updatedCommomMin;

        // console.log("serie.name", serie.name)
        // console.log("ret", ret);
        // console.log("quote", quote);
        // console.log("updatedCommomMin", updatedCommomMin);
        // console.log("commom", commom);
        // console.log("maxRet", maxRet);

        if (commom < maxRet && ret > maxRet && !excludeMax.length && serie.preference != 0) {
            // console.log("goooot")
            excludeMax.push({
                ...serie,
                ret: maxRet
            });
        }

    }

    return excludeMax[0];
}

export default checkMax;