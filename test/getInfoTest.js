const expect = require('chai').expect;
const nock = require('nock');
const index = require('../index.js');
const URL = require('../urlStrings');
let response = require('./Data/Info');
describe('Get info test',() => {
    beforeEach(() => {
        nock(URL.uri).get(`${URL.exchangeString}bittrex`).reply(200,response);//Correct exchangeName
        nock(URL.uri).get(`${URL.exchangeString}bitrex`).reply(404,response);//Incorrect exchangeName
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