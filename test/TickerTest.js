const expect = require('chai').expect;
const nock = require('nock');

const index = require('../index');
let response = require('./Data/exchanges');


describe('Get the test for tickers', () => {


    beforeEach(() => {
        nock('http://api.primetrade.ai').get('/exchange').reply(200, response);
    });


    it('Get the tickers',() => {

        index.getTick('bittrex', 'BTC-ETH"', (data)=>{
            response = data;
        });

        expect(typeof response).to.equal('object');
        expect(response).to.not.be.empty;
        expect(Array.isArray(response));


    });


});
