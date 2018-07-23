const expect = require('chai').expect;
const nock = require('nock');
const index = require('../index');
let response = require('./Data/Candle');
describe('Get candles test', () => {
    beforeEach(() => {
        nock(`http://api.primetrade.ai`).get('/exchange/bittrex/candles?market=BTC/USDT&interval=30m').reply(200, response); //30 min. interval
        nock(`http://api.primetrade.ai`).get('/exchange/bittrex/candles?market=BTC/USDT&interval=1m').reply(200, response); // 1 min interval
        nock(`http://api.primetrade.ai`).get('/exchange/bittrex/candles?market=USDT/BTC&interval=30m').reply(404, response); // Invalid market
        nock(`http://api.primetrade.ai`).get('/exchange/tidex/candles?market=BTC/USDT&interval=30m').reply(200, response); // For exchange tidex
        nock(`http://api.primetrade.ai`).get('/exchange/luno/candles?market=BTC/USDT&interval=30m').reply(200, response); //For exchange Luno with invalid market name
    });
    it('Get a candle by exchangeName', () => {
        index.getCandles('bittrex', 'BTC/USDT', '30m', (data) => {
            response = data;
        });

        expect(typeof response).to.equal('object');
        expect(response.length).to.be.at.least(1);
        expect(Array.isArray(response));
    });

});
