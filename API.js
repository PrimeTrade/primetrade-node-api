const request = require("request");
const _ = require("lodash");

exports.getCandles = (marketName,exchangeName,callback,inter)=>{

    request({
        uri: `http://13.126.176.236/exchange/${exchangeName}/candles?market=${marketName}&interval=${inter}`,
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
    request({
        uri: `http://13.126.176.236/exchange/${exchangeName}`,
        json:true
    },function (err,res,body) {
        if(!err && res.statusCode === 200){
            callback(body);
            return;
        }
        else {
            console.log("Error occured");
        }
    });
}
