const expect = require('chai').expect;
const nock = require('nock');

const getExchange = require('../index').getExchange;
const response = require('./Data/exchanges');


describe('Get User tests', () => {


    beforeEach(() => {
        nock('http://api.primetrade.ai').get('/exchange').reply(200, response);
    });


    it('Get the exchanges',() => {
        return getExchange()
            .then(response => {
            	expect(Array.isArray(response));
                expect(typeof response).to.equal('object');
                expect(response[0]).to.equal('_1broker');
                expect(response[response.length-1]).to.equal('zb');

            }
        );
    });


});


