const request = require("request");
const _ = require("lodash");
exports.getCandles = (exchangeName,marketName, interval, callback) => {

    let relativeURL = 'http://api.primetrade.ai/exchange/' + exchangeName + '/candles?market=' + marketName + '&interval=' + interval;
    //let exchange = [];


    request({
        uri: relativeURL,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {

            //exchange.push(body);
            callback(body);
            return;

        }
        else {
            callback(error);
            return;
        }

    });

};