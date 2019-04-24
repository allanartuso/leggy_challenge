function rebalanceQuotes(serieName, reCheck) {
    const filterCap = reCheck.filter(data => data.name != serieName);
    const arrayQuotes = filterCap.map(data => data.quote);
    const sumQuotes = arrayQuotes.reduce((total, currentValue) => total + currentValue, 0);
    const reformattedArray = filterCap.map(data => {
        // data.commom = data.quote * updateExit;
        data.reQuote = data.quote / sumQuotes;
        return data;
    });

    // console.log("    rebalanceQuotes", serieName)
    // console.log(reformattedArray)

    return reformattedArray;
}

export default rebalanceQuotes;