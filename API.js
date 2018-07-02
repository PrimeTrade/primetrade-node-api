const request = require("request");
const _ = require("lodash");

exports.getCandles = (marketName,exchangeName,callback,inter)=>{

    request.get({
        url: `http://13.126.176.236/exchange/${exchangeName}/candles?market=${marketName}&interval=${inter}`,
        json: true
    },function (err,res,body) {
        if(!err && res.statusCode === 200){
            //console.log(body);
            callback(body);
        }
        else {
            throw err;
        }
    });
};

exports.getInfo = (exchangeName,callback)=>{
    
}
/*exports.getTick = (marketName, exchangeName, callback) => {

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
}; */
/*exports.getExchanges = (callback) => {

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

*/