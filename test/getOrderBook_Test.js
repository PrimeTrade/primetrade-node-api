const expect = require('chai').expect;
const nock = require('nock');
const index = require('../index');
let res = require('./Responses/orderBookResponse');
const _ = require('lodash');
//var response;

describe('Get OrderBook tests',()=>{
    beforeEach(()=>{
        nock('http://api.primetrade.ai')
            .get(`/exchange/bittrex/orderBook?market=BTG/BTC`)
            .reply(200,res);
    });
    it('Get an exchange by ExchangeName',()=>{
       index.getOrderBook('bittrex',(data)=>{
            res=data;
       });
        //expect(typeof response).to.equal('undefined');
        expect(typeof res).to.equal('object');
        expect(res).to.not.be.empty;
        expect(Array.isArray(res));
        _.each(res,(index)=>{
            _.each(index,(val)=> {
                _.each(val,(v)=>{
                    expect(v).to.be.above(0);
                    expect(v).to.not.be.null;
                    expect(v).to.not.be.NaN;
                })
            })
        })
    });
});
/*describe('First Test',()=>{
    it('Should assert true to be true',()=>{
        expect(true).to.be.true;
    });
})*/