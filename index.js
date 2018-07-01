const request = require('request');
const _ = require('lodash');
exports.getOrderBook = (exchangeName,callback)=> {
    request({
        uri: `http://13.126.176.236/exchange/${exchangeName}/markets`,
        json: true
    }, (err, response, body) => {
        if (!err && response.statusCode === 200) {
            _.each(body, (val, i) => {
                let sym = val.symbol;
                request({
                    uri: `http://13.126.176.236/exchange/${exchangeName}/orderBook?market=${sym}`,
                    json: true
                }, (err, response, body) => {
                    if (!err && response.statusCode === 200) {
                        callback(body);
                    }
                })
            })

        }
    });
};
/*
test calling
getOrderBook('binance',(data)=>{
    console.log(data);
});*/
/*
exports.getOpenOrders = (exchange_name, since, limit, public_apiKey,secret_key)=>{
    let exchange = new ccxt [exchange_name]({
        apikey: public_apiKey,
        secret: secret_key
    });
    if(exchange.has.fetchOpenOrders)
    {(async ()=> {
            let markets = await exchange.loadMarkets();
            _.each(markets,(val,symbol)=>{
                (async ()=>{
                    return await id.fetchOpenOrders(symbol,since,limit);
                })();
            })
        }
    )();
    }

    else
        console.log(`${exchange.id} doesn't have open orders to fetch`);
};

exports.getAllOpenOrders = (since, limit, public_apiKey, secret_key)=>{
    _.each(ccxt.exchanges, (exchangeName)=>{
        let exchange = new ccxt[exchangeName]({
            apikey: public_apiKey,
            secret: secret_key
        });
        if(exchange.has.fetchOpenOrders){
            (async ()=>{
                let markets = await exchange.loadMarkets();
                _.each(markets,(val,symbol)=>{
                    (async ()=>{
                        return await exchange.fetchOpenOrders(symbol, since, limit);
                    })();
                })
            })();
        }
        else
            console.log(`${exchange.id} doesn't have open orders to fetch`);
    })
};
*/
