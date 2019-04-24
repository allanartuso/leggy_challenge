function checkConvert(check, exit) {

    const arrayMin = check.map(data => data.invested * data.preference);
    const sumMin = arrayMin.reduce((total, currentValue) => total + currentValue, 0);
    const commomMin = exit - sumMin;
    let updatedCommomMin = commomMin;
    let updateExit = exit;

    let convertCommom = [];
    for (let serie of check) {
        const quote = serie.reQuote || serie.quote;
        const maxRet: number = serie.invested * serie.cap;
        let minRet: number = serie.invested * serie.preference;
        if (minRet > updateExit) minRet = updateExit;
        const commom = quote * updatedCommomMin;

        if (commom > maxRet) {
            convertCommom.push({
                ...serie,
                preference: 0,
                cap: 0
            });
        } else {
            convertCommom.push({
                ...serie,
            });
        }

    }

    return convertCommom;
}

export default checkConvert;