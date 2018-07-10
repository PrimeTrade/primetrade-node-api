const expect = require('chai').expect;
const nock = require('nock');

const getUser = require('../index').getExchanges;

describe('Get User tests', () => {

  beforeEach(() => {
    nock('http://api.primetrade.ai')
      .get('/exchange')
      .reply(200, response);
  });
    
});


