const request = require("request");
const _ = require("lodash");

getCandles = (marketName, exchangeName, interval) => {

    const options = {
        url: 'http://13.126.176.236/exchange/' + exchangeName + '/candles?market=' + marketName + '&interval=' + interval,
        json: true
    };

    function requestCallback(error, response, body) {
        if (!error && response.statusCode === 200) {
            return body;
        }
    }

    return request(options, requestCallback);
};

printCandles = () => {
    console.log(getCandles('USDT/BTC', 'binance', '30m'));
};

printCandles();

// exports.getInfo = (exchangeName, callback) => {
//     request({
//         uri: `http://13.126.176.236/exchange/${exchangeName}`,
//         json: true
//     }, function (err, res, body) {
//         if (!err && res.statusCode === 200) {
//             callback(body);
//             return;
//         }
//         else {
//             console.log("Error occured");
//         }
//     });
// }

