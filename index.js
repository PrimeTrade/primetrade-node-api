let ccxt = require('ccxt');
let lodash = require('lodash');


// public APIs

exports.getExchanges = () => {

    var a = ccxt.exchanges;
    //console.log (a) ;
    return a;
    
}


exports.getMarketCurrency = (exchangeName) => {
    var markets = [];
    return (async function () {

        let newExchange = new ccxt[exchangeName]();
        let abc = await newExchange.loadMarkets();

        lodash.forEach(abc , (i, index) => {
            //console.log(index);
            markets.push(index);
        });

        return markets;

    }) ();
}

//getMarketCurrency('okex').then((markets) => console.log(markets));


exports.getOrderBook = (exchangeName) => {

    var orderBook = [];
    return (async function () {

        let newExchange = new ccxt[exchangeName]();
        let abc = await newExchange.loadMarkets();

        lodash.forEach(abc , (i, index) => {
            (async function () {

                let newExchange1 = new ccxt[exchangeName]();
                orderBook.push(await newExchange1.fetchOrderBook (index));
                //console.log(await newExchange1.fetchOrderBook (index));
            }) ();

        });

        return(orderBook);

    }) ();

}


exports.getTick = (marketName, exchangeName) => {


    return (async function () {

        let newExchange = new ccxt[exchangeName]();
        let abc = await newExchange.fetchTicker (marketName);

        //console.log(abc)
        return abc;

    }) ();

}

//getTick('BTC/USDT','okex').then((abc) => console.log(abc));

