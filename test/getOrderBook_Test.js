const expect = require('chai').expect;
const nock = require('nock');
const index = require('../index');
const res = require('./Responses/orderBookResponse');
//var response;

describe('Get OrderBook tests',()=>{
    beforeEach(()=>{
        nock('http://api.primetrade.ai')
            .get(`/exchange/bittrex/orderBook?market=BTG/BTC`)
            .reply(200,res);
    });
    it('Get an exchange by ExchangeName',()=>{
       index.getOrderBook('bittrex',(data)=>{
            //response = data;
            //console.log(response);
       });
        //expect(typeof response).to.equal('undefined');
        expect(typeof res).to.equal('object');
    });
});
/*describe('First Test',()=>{
    it('Should assert true to be true',()=>{
        expect(true).to.be.true;
    });
})*/