let request = require('request');
let ccxt = require('ccxt');
let lodash = require('lodash');
var exec = require('child_process').exec;

// public APIs

exports.getExchanges = (callback) => {

    let relativeURL = "http://13.126.176.236/exchange";
    let exchange = [];


    let a = request({
        url: relativeURL,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {

            exchange.push(body);
            callback(exchange);
            return;

        }
        else {
            console.log('error occured');
        }

    });
};


exports.getMarketCurrency = (exchangeName, callback) => {

    var markets = [];
    let relativeURL = "http://13.126.176.236/exchange/bittrex/markets";

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

    let relativeURL = "http://13.126.176.236/exchange/"+ exchangeName +"/tickers?market=" + marketName;

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
