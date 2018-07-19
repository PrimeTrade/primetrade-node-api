const expect = require('chai').expect;
const nock = require('nock');
const index = require('../index.js');
let response = require('./Data/Info');
describe('Get info test',() => {
    beforeEach(() => {
        nock(`http://api.primetrade.ai`).get(`/exchange/bittrex`).reply(200,response);//Correct exchangeName
        nock(`http://api.primetrade.ai`).get(`/exchange/bitrex`).reply(404,response);//Incorrect exchangeName
    });
    it('Get info by exchangeName',() => {
        index.getInfo('bittrex',(data) => {
            response = data;

        });
        expect(typeof response).to.equal('object');
        expect (response).to.not.be.empty;
        expect(Array.isArray(response));
    });
});