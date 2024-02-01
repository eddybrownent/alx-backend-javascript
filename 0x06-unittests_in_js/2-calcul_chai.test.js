const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('round the numbers and return their sum', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
      expect(calculateNumber('SUM', 1.4, -4.5)).to.equal(-3);
    });
  });

  describe('SUBTRACT', function () {
    it('round the numbers and return the result of subtraction', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
      expect(calculateNumber('SUBTRACT', 1.4, -4.5)).to.equal(5);
    });
  });

  describe('DIVIDE', function () {
    it('round the numbers and return the result of division', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
      expect(calculateNumber('DIVIDE', 1.4, -4.5)).to.equal(-0.25);
    });

    it('return "Error" when attempting to divide by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -1.4, 0)).to.equal('Error');
    });
  });
});
