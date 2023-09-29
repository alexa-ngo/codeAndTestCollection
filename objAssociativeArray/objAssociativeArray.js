// Object Associative Array

// We're going to buy/sell stocks and compute the total value of the stock portfolio.

function addStock(portfolio, stockname, shares) {
    portfolio[stockname] += shares;
}

function computeValue(portfolio) {
    let total = 0.0;
    for (let stock in portfolio) {
        let shares = portfolio[stock];
        let price = getQuote(stock);
        total += shares * price;
    }
    return total.toFixed(2);
}

function getQuote(stock) {
    switch (stock) {
        case "ibm":
            return 10;
        case "googl":
            return 200;
        case "appl":
            return 170.69
        case "meta":
            return 303.96
        case "msft":
            return 313.64
    }
}

// Alphabet; GOOGL; 132.31
// Apple; AAPl; 170.69
// IBM; IBM; 141.70
// Meta; META; 303.96
// Microsoft; MSFT; 313.64

let portfolio = {};
portfolio.googl = 20;
portfolio.appl = 10;
portfolio.ibm = 50;
portfolio.meta = 15;
portfolio.msft = 30;
console.log('The stocks in the Portfolio before the update:', portfolio);

addStock(portfolio, "ibm", -3);
addStock(portfolio, "googl", 2);
addStock(portfolio, "appl", 10);

console.log('The stocks in the Portfolio after the update:', portfolio);

console.log(`The total value of the Portfolio: $${computeValue(portfolio)}.`);

