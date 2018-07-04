const request = require("request");
const _ = require("lodash");

/*getCandles = (marketName, exchangeName, interval) => {

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
*/

let getCandles = (marketName, exchangeName, interval, callback) => {

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


//getCandles('ETH/BTC', 'bittrex', '30m', (response) => {
  //  console.log(response);

//});

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

