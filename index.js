const request = require('request');
const lodash = require('lodash');
const axios = require('axios');

// public APIs


exports.getExchange = (callback)=> {
    request({
        uri: `http://api.primetrade.ai/exchange`,
        json: true
    }, (err, response, body) => {
        if (!err && response.statusCode === 200) {
            callback(body);
            return
        }
        else{
            callback(err);
            return
        }
    });
};


exports.getMarketCurrency = (exchangeName, callback) => {

    var markets = [];
    let relativeURL = "http://api.primetrade.ai/exchange/" + exchangeName + "/markets";

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
            //console.log('error occured');
            callback(error);
            return;
        }


    });
    return markets;
};


exports.getTick = (exchangeName, marketName, callback) => {

         request({
        	uri: "http://api.primetrade.ai/exchange/" + exchangeName + "/tickers?market=" + marketName,
        	json: true
    	}, (err, response, body) => {
        	if (!err && response.statusCode === 200) {
            	callback(body);
            	return;
        	}
        	else{
        		callback(err);
        		return;
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
