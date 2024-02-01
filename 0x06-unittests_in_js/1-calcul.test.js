const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('round the numbers and return their sum', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 4);
      assert.strictEqual(calculateNumber('SUM', 1.4, -4.5), -3);
    });
  });

  describe('SUBTRACT', () => {
    it('round the numbers and return the result of subtraction', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.5), -6);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, -4.5), 5);
    });
  });

  describe('DIVIDE', () => {
    it('round the numbers and return the result of division', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, -4.5), -0.25);
    });

    it('return "Error" when attempting to divide by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 0), 'Error');
    });
  });
});
