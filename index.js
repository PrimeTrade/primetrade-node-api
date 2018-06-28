let ccxt = require('ccxt');
let lodash = require('lodash');


// public APIs

function getExchanges ()  {

    let a = ccxt.exchanges;
    //console.log (a) ;
    return a;
}

//console.log(getExchanges());

function getMarketCurrency (exchangeName){
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

function getTick(marketName, exchangeName){


    return (async function () {

        let newExchange = new ccxt[exchangeName]();
        let abc = await newExchange.fetchTicker (marketName);

        //console.log(abc)
        return abc;

    }) ();

}

getTick('BTC/USDT','okex').then((abc) => console.log(abc));

