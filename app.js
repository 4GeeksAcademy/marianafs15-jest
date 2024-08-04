const sum = (a, b) => {
    return a + b;
}

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euros) => {
    let dollars = euros * oneEuroIs.USD;
    return Math.round(dollars * 100) / 100;    
}

const fromDollarToYen = (dollars) => {
    let euros = dollars / oneEuroIs.USD;
    let yens = euros * oneEuroIs.JPY;
    return Math.round(yens * 100) / 100;
}

const fromYenToPound = (yens) => {
    let euros = yens / oneEuroIs.JPY;
    let pounds = euros * oneEuroIs.GBP;
    return Math.round(pounds * 100) / 100;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
