const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('testing the SUM', () => {
    it('should be equal to 2', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 1), 2);
    })
    it('should be equal to 101', () => {
      assert.strictEqual(calculateNumber('SUM', 0.99999, 100), 101);
    })
    it('should be equal to 101', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 100.9999999), 101);
    })
    it('should be equal to 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    })
    it('should be equal to 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1.9, 1.9), 4);
    })
    it('should be equal to 2', () => {
      assert.strictEqual(calculateNumber('SUM', 1.1, 1.1), 2);
    })
  });

  describe('testing the SUBTRACT', () => {
    it('should be equal to 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 1), 0);
    })
    it('should be equal to 101', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.99999, 100), -99);
    })
    it('should be equal to 101', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 100.9999999), -101);
    })
    it('should be equal to 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    })
    it('should be equal to 4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.9, 1.9), 2);
    })
    it('should be equal to 2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 100.49, 50.51), 49);
    })
  });

  describe('testing the DIVIDE', () => {
    it('should be equal to 1', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 1), 1);
    })
    it('should be equal to Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.99999, 0), 'Error');
    })
    it('should be equal to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 100.9999999), 0);
    })
    it('should be equal to Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    })
    it('should be equal to 1', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.9, 1.9), 1);
    })
    it('should be equal to 2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 100, 50.49), 2);
    })
  });
})