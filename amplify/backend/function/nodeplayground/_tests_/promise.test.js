const { describe, expect, it } = require('@jest/globals');
const { handler } = require('../src');
const { promiseFunction } = require('../src/promise');

describe('Promise', () => {
  const testName = 'promise';
  const testEvent = require(`./${testName}.json`);

  it('sample promise', async () => {
    await promiseFunction(testEvent);
  });
});