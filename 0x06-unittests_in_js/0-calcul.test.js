const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should be equal to 2', () => {
    assert.strictEqual(calculateNumber(1, 1), 2);
  })
  it('should be equal to 101', () => {
    assert.strictEqual(calculateNumber(0.99999, 100), 101);
  })
  it('should be equal to 101', () => {
    assert.strictEqual(calculateNumber(0, 100.9999999), 101);
  })
  it('should be equal to 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  })
  it('should be equal to 4', () => {
    assert.strictEqual(calculateNumber(1.9, 1.9), 4);
  })
  it('should be equal to 2', () => {
    assert.strictEqual(calculateNumber(1.1, 1.1), 2);
  })
})