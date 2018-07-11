const axios = require('axios');
const request = require('request');
const _ = require('lodash');
exports.getOrderBook = (exchangeName,callback)=> {
    request({
        uri: `http://api.primetrade.ai/exchange/${exchangeName}/markets`,
        json: true
    }, (err, response, body) => {
        if (!err && response.statusCode === 200) {
            _.each(body, (val, i) => {
                let sym = val.symbol;
                request({
                    uri: `http://api.primetrade.ai/exchange/${exchangeName}/orderBook?market=${sym}`,
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
    /*
    return axios
        .get(`http://api.primetrade.ai/exchange/${exchangeName}/orderBook?market=BTG/BTC`)
        .then(res=>res.data)
        .catch(error=>console.log(error));
*/


exports.getSharedOrderBook = (callback)=>{
    request({
        uri: `http://api.primetrade.ai/exchange/binance/markets`,
        json: true
    },(err, response, body)=>{
        if(!err && response.statusCode===200){
            _.each(body, (val,i)=>{
                let sym = val.symbol;
                request({
                    uri: `http://api.primetrade.ai/sharedOrderBook?market=${sym}`,
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

/*
test calling
getOrderBook('binance',(data)=>{
    console.log(data);
});
getSharedOrderBook((data)=>{
   console.log(data);
});
*/

