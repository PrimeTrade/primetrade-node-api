# Prime Trade AI Public APIs

A JavaScript library that help you to get different OrderBook, candles, Tickers and marketCurrency using the primetrade api. 

## Installing
```
npm i node.primetrade.ai
```

## Getting Started
```
const primetrade = require('node.primetrade.ai') 
// now primetrade can be used to access the functions
```

### Getting All Exchanges
```
primetrade.getExchange((response) => {
console.log(response)
})
```

### Getting All Currencies of a Market
```
primetrade.getMarketCurrency('bittrex', (response) => {
console.log(response)
})
```


### Getting Ticker 
```
primetrade.getTick('bittrex', 'BTC/UTC', (response) => {
console.log(response)
})
```


### Getting Info of an Exchanges
```
primetrade.getInfo('bittrex', (response) => {
console.log(response)
})
```

### Getting Candles for an interval
```
primetrade.getCandles('bittrex', 'BTC/UTC', '1m', (response) => {
console.log(response)
})
```

### Getting the Order Books
```
primetrade.getOrderBook('bittrex', (response) => {
console.log(response)
})
```

## Running the tests
```
npm test
```
## GitHub Link
```
https://github.com/PrimeTrade/primetrade-node-api
```

## Version
```
1.0.0
```
