const _ = require('lodash');
const nock = require('nock');
const expect = require('chai').expect;
const index = require('../index');
let res = require('./Responses/sharedOrderBookResponse');

describe('Get SharedOrderBook test',()=>{
    beforeEach(()=>{
        nock(`http://api.primetrade.ai`)
            .get(`/sharedOrderBook?market=`)
            .reply(200,res);
    });
    it('Get a symbol pair',()=>{
        index.getSharedOrderBook((data)=>{
            res=data;
        });
        expect(typeof res).to.equal('object');

    })

})
