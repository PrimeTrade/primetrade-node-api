const request = require('request');
const _ = require('lodash');

// public APIs
//strings for the url's
let uri = 'https://api.primetrade.ai/';
let exchangeString = 'exchange/';
let marketString = '/markets/';
let tickerString = '/tickers?market=';

exports.getOrderBook = (exchangeName,callback)=> {
    request({
        uri: uri+exchangeString+exchangeName + marketString,
        json: true
    }, (err, response, body) => {
        if (!err && response.statusCode === 200) {
            _.each(body, (val, i) => {
                let sym = val.symbol;
                request({
                    uri: uri + exchangeString + exchangeName + `/orderBook?market=${sym}`,
                    json: true
                }, (err, response, body) => {
                    if (!err && response.statusCode === 200) {
                        return callback(body);
                    }
                })
            })

        }
    });
};

exports.getSharedOrderBook = (callback)=>{
    request({
        uri: uri + exchangeString + 'binance' + marketString,
        json: true
    },(err, response, body)=>{
        if(!err && response.statusCode===200){
            _.each(body, (val,i)=>{
                let sym = val.symbol;
                request({
                    uri: uri + `sharedOrderBook?market=${sym}`,
                    json: true
                },(err, response, body)=>{
                    if(!err && response.statusCode===200){
                        callback(body);
                    }
                    else
                        throw err;
                })
            })
        }
    })
};

//market api
let openOrders = (exchnageName, publicapiKey, secretKey)=>{

};

exports.getCandles = (exchangeName,marketName, interval, callback) => {
    let relativeURL = uri + exchangeString + exchangeName + '/candles?market=' + marketName + '&interval=' + interval;
    request({
        uri: relativeURL,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            callback(body);
            return;
        }
        else {
            callback(error);
            return;
        }
    });
};

exports.getInfo = (exchangeName,callback) =>{
    let relativeURL = uri + exchangeString + exchangeName;
    request({
        uri: relativeURL,
        json: true
    },function (error,response,body) {
        if (!error && response.statusCode === 200) {
            callback(body);
            return;
        }
        else {
            callback(error);
            return;
        }
    });
};

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
            _.forEach(body, (i) => {
                //getting symbol for each and pushing in the array
                markets.push(i.symbol);
            })
			callback(markets);
			return;
        }
        else{
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
