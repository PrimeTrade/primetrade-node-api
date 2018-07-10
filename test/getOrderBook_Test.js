const expect = require('chai').expect;
const nock = require('nock');
const getOrderBook = require('../index').getOrderBook;
const response = require('./orderBookResponse');

describe('Get OrderBook tests',()=>{
    beforeEach(()=>{
        nock('http://api.primetrade.ai')
            .get(`/bittrex/orderBook?market=BTG/BTC`)
            .reply(200,response);
    });
    it('Get an exchange by ExchangeName',()=>{
        return getOrderBook('bittrex',(data))
            .then(response=>{
                expect(typeof response).to.equal('object');
            });
    });
});
/*describe('First Test',()=>{
    it('Should assert true to be true',()=>{
        expect(true).to.be.true;
    });
})*/