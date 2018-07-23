const index = require('./index');
index.getOrderBook('bittrex',(data)=>{
    console.log(data)
});
