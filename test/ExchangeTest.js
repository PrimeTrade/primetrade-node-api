const expect = require('chai').expect;
const nock = require('nock');

const getExchanges = require('../index').getExchanges;
const response = require('./Data/exchanges');

describe('Get User tests', () => {

  beforeEach(() => {
    nock('http://api.primetrade.ai')
      .get('/exchange')
      .reply(200, response);
  });
    
	it('Get the exchanges',() => {
        return getExchange((data) => {})
            .then(response => {
                expect(response[0].equal('_1broker'));
            });
    });
});


