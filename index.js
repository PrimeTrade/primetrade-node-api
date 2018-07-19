const request = require('request');
const lodash = require('lodash');

// public APIs
//strings for the url's
let uri = 'http://api.primetrade.ai/';
let exchangeString = 'exchange/';
let marketString = '/markets/';
let tickerString = '/tickers?market=';


exports.getExchange = (callback)=> {

    request({
        uri: uri + exchangeString,
        json: true
    }, (err, response, body) => {
        if (!err && response.statusCode === 200) {
            //no error found and status code is 200 that is OK
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

    request({
        uri: uri + exchangeString + exchangeName + marketString ,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {

            lodash.forEach(body, (i) => {
                //getting symbol for each and pushing in the array
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
        	uri: uri + exchangeString + exchangeName + tickerString + marketName,
        	json: true
    	}, (err, response, body) => {
        	if (!err && response.statusCode === 200) {
        	    //return body if status cide is 200 i.e. OK
            	callback(body);
            	return;
        	}
        	else{
        		callback(err);
        		return;
        	}
    	});
    	
};

