const expect = require('chai').expect;
const nock = require('nock');

const index = require('../index');
let response = require('./Data/exchanges');


describe('Get User tests', () => {

    beforeEach(() => {
        nock('http://api.primetrade.ai').get('/exchange/bittrex/markets').reply(200, response);
    });

	it('Get the market Currencies',() => {

        index.getMarketCurrency('bittrex', (data)=>{
            response = data;
        });

        expect(typeof response).to.equal('object');
        expect(response).to.not.be.empty;
        expect(Array.isArray(response));


    });
	
});

