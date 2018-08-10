const expect = require('chai').expect;
const nock = require('nock');
const URL = require('../urlStrings');
const index = require('../index');
let response = require('./Data/exchanges');


describe('Get All the Exchanges', () => {


    beforeEach(() => {
        nock(URL.uri).get(`${URL.exchangeString}`).reply(200, response);
        nock(URL.uri).get('/exchanges').reply(404, response); //incorrect url return 404 for url not found
    });

    index.getExchange((data)=>{
        response = data;
    });

    it('Check if it is object',() => {

        expect(typeof response).to.equal('object');

    });

    it('check if it is not empty',() => {

        //expect(response).to.not.be.empty;
        expect(response.length).to.be.above(0);

    });

    it('check if the returned is an Array',() => {

        expect(Array.isArray(response));

    });

    it('check the 1st position',() => {

        expect(response[0]).to.equal('_1broker');

    });

    it('check the last position',() => {

        expect(response[response.length-1]).to.equal('zb');

    });

});

