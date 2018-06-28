let ccxt = require('ccxt');
let lodash = require('lodash');


// public APIs

function getExchanges ()  {

    let a = ccxt.exchanges;
    //console.log (a) ;
    return a;
}

console.log(getExchanges());