const expect = require('chai').expect;
const nock = require('nock');

const index = require('../index');
let response = require('./Data/markets');


describe('Get All Currencies of a Market', () => {

    beforeEach(() => {
        nock('http://api.primetrade.ai').get('/exchange/${exchangeName}/markets').reply(200, response);
    });

    index.getMarketCurrency('bittrex', (data)=>{
        response = data;
    });

    it('check if it is object',() => {

        expect(typeof response).to.equal('object');
    });

    it('check if it is not empty',() => {

        expect(response.length).to.be.above(0);
    });

    it('check if it is an array',() => {

        expect(Array.isArray(response));
    });

    it('check the 1st position of array',() => {

        expect(response[0]).to.be.equal("2GIVE/BTC");
    });

    it('check the last position of array',() => {

        expect(response[response.length - 1]).to.be.equal("ZEC/USDT");
    });

});





