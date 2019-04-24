function rebalanceQuotes(serieName, reCheck) {
    const filterCap = reCheck.filter(data => data.name != serieName);
    const arrayQuotes = filterCap.map(data => data.quote);
    const sumQuotes = arrayQuotes.reduce((total, currentValue) => total + currentValue, 0);
    const reQuoteArray = filterCap.map(data => {
        data.reQuote = data.quote / sumQuotes;
        return data;
    });

    return reQuoteArray;
}

export default rebalanceQuotes;