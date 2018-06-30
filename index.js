let request = require('request');
let ccxt = require('ccxt');
let lodash = require('lodash');


// public APIs

exports.getExchanges = () => {

	let relativeURL = "http://13.126.176.236/exchange";
	var exchange = [];


    request({
        url: relativeURL,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
        
        	//console.log(body);
        	exchange.push(body);
        
        }
        else{
        	console.log('error occured');
        }
    });
    
    return exchange;
    
};



exports.getMarketCurrency = (exchangeName) => {

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

        }
        else{
            console.log('error occured');
        }


    });
    return markets;
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


exports.getTick = (marketName, exchangeName) => {


    return (async function () {

        let newExchange = new ccxt[exchangeName]();
        let abc = await newExchange.fetchTicker (marketName);

        //console.log(abc)
        return abc;

    }) ();

}

//getTick('BTC/USDT','okex').then((abc) => console.log(abc));

*/
