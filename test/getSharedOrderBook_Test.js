const _ = require('lodash');
const nock = require('nock');
const expect = require('chai').expect;
const index = require('../index');
const URL = require('../urlStrings');
let res = require('./Data/sharedOrderBookResponse');

describe('Get SharedOrderBook test',()=>{
    beforeEach(()=>{
        nock(URL.uri)
            .get(`${URL.sharedBookString}`)
            .reply(200,res);
    });
    it('Get a symbol pair',()=>{
        index.getSharedOrderBook((data)=>{
            res=data;
        });
        expect(typeof res).to.equal('object');

    })

});
