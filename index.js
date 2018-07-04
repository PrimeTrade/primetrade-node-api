const request = require("request");
const _ = require("lodash");
exports.getCandles = (marketName, exchangeName, interval, callback) => {

    let relativeURL = 'http://13.126.176.236/exchange/' + exchangeName + '/candles?market=' + marketName + '&interval=' + interval;
    //let exchange = [];


    request({
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


exports.getInfo = (exchangeName, callback) => {
    let relativeURL = 'http://13.126.176.236/exchange/'+exchangeName;
    request({
    url: relativeURL,
    json: true,
}, function (error,res,body) {
    if(!error && res.statusCode === 200){
        callback(body);
        return;
    }
    else{
        console.log('error occured');
    }
});
};
