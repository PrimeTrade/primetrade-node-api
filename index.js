const request = require('request');
const URL = require('./urlStrings');
const _ = require('lodash');

// public APIs


exports.getOrderBook = (exchangeName,callback)=> {
    request({
        uri: URL.uri + URL.exchangeString + exchangeName + URL.marketString,
        json: true
    }, (err, response, body) => {
        if (!err && response.statusCode === 200) {
            _.each(body, (val, i) => {
                let sym = val.symbol;
                request({
                    uri: URL.uri + URL.exchangeString + exchangeName + URL.orderBookString + `${sym}`,
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
        uri: URL.uri + URL.exchangeString + 'binance' + URL.marketString,
        json: true
    },(err, response, body)=>{
        if(!err && response.statusCode===200){
            _.each(body, (val,i)=>{
                let sym = val.symbol;
                request({
                    uri: URL.uri + URL.sharedBookString + `${sym}`,
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
    let relativeURL = URL.uri + URL.exchangeString + exchangeName + URL.candleString + marketName + '&interval=' + interval;
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
    let relativeURL = URL.uri + URL.exchangeString + exchangeName;
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
        uri: URL.uri + URL.exchangeString,
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
        uri: URL.uri + URL.exchangeString + exchangeName + URL.marketString ,
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
        	uri: URL.uri + URL.exchangeString + exchangeName + URL.tickerString + marketName,
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
