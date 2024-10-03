const { expect } = require('chai');
const {describe, it} = require("mocha");
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should return 6 when inputs are (SUM, 1.4, 4.5)', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 when inputs are (SUM, 1.2, 3.7)', function() {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should return -4 when inputs are (SUBTRACT, 1.4, 4.5)', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 3 when inputs are (SUBTRACT, 5.4, 2.1)', function() {
      expect(calculateNumber('SUBTRACT', 5.4, 2.1)).to.equal(3);
    });
  });

  describe('DIVIDE operation', function() {
    it('should return 0.2 when inputs are (DIVIDE, 1.4, 4.5)', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when inputs are (DIVIDE, 1.4, 0)', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 2 when inputs are (DIVIDE, 4.9, 2)', function() {
      expect(calculateNumber('DIVIDE', 4.9, 2)).to.equal(2.5);
    });
  });

  describe('Invalid operation', function() {
    it('should throw an error when an invalid operation is provided', function() {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type');
    });
  });
});
