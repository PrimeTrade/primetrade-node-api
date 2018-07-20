const expect = require('chai').expect;
const nock = require('nock');
const index = require('../index');
let res= require('./Data/orderBookResponse');
const _ = require('lodash');
//var response;

describe('Get OrderBook tests',()=>{
    let scope;
    beforeEach(()=>{
        scope = nock(`http://api.primetrade.ai`).get(`/exchange/bittrex/orderBook?market=BTG/BTC`).reply(200,res);

        index.getOrderBook('bittrex',(data)=>{
            res=data;
        });

    });
    it('',()=>{
        expect(scope.interceptors[0].body.bids).to.equal(res.bids);
    });


    it('Check whether the response is of object type?',()=> {
        expect(typeof res).to.equal('object');
    });

    it('Check whether the response is not empty!',()=>{
        expect(res).to.not.be.empty;
    });

    it('Check whether the response is an array',()=>{
        expect(Array.isArray(res));
    });

    it('Check that the bids and asks are always greater than 0',()=>{
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
