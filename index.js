let request = require('request');
let lodash = require('lodash');

// public APIs

exports.getExchanges = (callback) => {

    let relativeURL = "http://api.primetrade.ai/exchange";
    //let exchange = [];


    let a = request({
        url: relativeURL,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {

            //exchange.push(body);
            callback(body);
            return;

        }
        else {
            console.log('error occured');
        }

    });
};


exports.getMarketCurrency = (exchangeName, callback) => {

    var markets = [];
    let relativeURL = "http://api.primetrade.ai/exchange/bittrex/markets";

    let a = request({
        url: relativeURL,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {

            lodash.forEach(body, (i,index) => {

                //console.log(i.symbol);
                markets.push(i.symbol);
            })
			callback(markets);
			return;
        }
        else{
            console.log('error occured');
        }


    });
    return markets;
};


exports.getTick = (marketName, exchangeName, callback) => {

    let relativeURL = "http://api.primetrade.ai/exchange/"+ exchangeName +"/tickers?market=" + marketName;

    let a = request({
        url: relativeURL,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            //console.log(body);
            callback(body);
            return;
        }
        else{
            console.log('error occured');
        }


    });
};

/*
Sample calling of functions from another classes
let index = require('./index.js');

index.getExchanges(function (response) {
    console.log(response);
})


index.getMarketCurrency('okex',function (response) {
    console.log(response);
})

index.getTick('ETH/BTC', 'bittrex', function(response){
    console.log(response);
});

*/


/*
exports.getOrderBook = (exchangeName) => {

    var orderBook = [];
    return (async function () {

        let newExchange = new ccxt[exchangeName]();
        let abc = await newExchange.loadMarkets();

        lodash.forEach(abc , (i, index) => {
            (async function () {

                let newExchange1 = new ccxt[exchangeName]();
                orderBook.push(await newExchange1.fetchOrderBook (index));
                console.log(await newExchange1.fetchOrderBook (index));
            }) ();

        });

        return(orderBook);

    }) ();

}

*/
