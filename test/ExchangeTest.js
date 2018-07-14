const expect = require('chai').expect;
const nock = require('nock');

const index = require('../index');
let response = require('./Data/exchanges');


describe('Get User tests', () => {


    beforeEach(() => {
        nock('http://api.primetrade.ai').get('/exchange').reply(200, response);
    });


    it('Get the exchanges',() => {

        index.getExchange((data)=>{
            response = data;
        });

        expect(typeof response).to.equal('object');
        expect(response).to.not.be.empty;
        expect(Array.isArray(response));
        expect(response[0]).to.equal('_1broker');
        expect(response[response.length-1]).to.equal('zb');

    });


});

