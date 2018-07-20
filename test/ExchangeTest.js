const expect = require('chai').expect;
const nock = require('nock');

const index = require('../index');
let response = require('./Data/exchanges');


describe('Get All the Exchanges', () => {


    beforeEach(() => {
        nock('http://api.primetrade.ai').get('/exchange').reply(200, response);
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

