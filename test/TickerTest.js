const expect = require('chai').expect;
const nock = require('nock');

const index = require('../index');
let response = require('./Data/tickers');


describe('Get the test for tickers', () => {


    beforeEach(() => {
        nock('http://api.primetrade.ai').get('/exchange/${exchangeName}/tickers?market=${marketName}').reply(200, response);
        nock('http://api.primetrade.ai').get('/exchange/${exchangeName}/ticker?market=${marketName}').reply(404, response); // incorrect url  return 404 for url not found
    });

    index.getTick('bittrex', 'BTC-ETH"', (data)=>{
        response = data;
    });

    it('check if it is a object',() => {
        expect(typeof response).to.equal('object');

    });

    it('check if its length is greater than 0',() => {
        expect(response.symbol.length).to.be.above(0);

    });

    it('check if it is an Array',() => {
        expect(Array.isArray(response));

    });

    it('check the 1st position of array',() => {
        expect(response.symbol).to.equal('ETH/BTC');

    });

    it('check the 1st position of info array',() => {
        expect(response.info.MarketName.length).to.be.above(0);

    });

    it('check the last position of info array',() => {
        expect(response.info.Created.length).to.be.above(0);

    });

});




