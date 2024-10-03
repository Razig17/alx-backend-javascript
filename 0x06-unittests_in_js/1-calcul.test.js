const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should return 6 when inputs are (SUM, 1.4, 4.5)', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 5 when inputs are (SUM, 1.2, 3.7)', function() {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should return -4 when inputs are (SUBTRACT, 1.4, 4.5)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 3 when inputs are (SUBTRACT, 5.4, 2.1)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 2.1), 3);
    });
  });

  describe('DIVIDE operation', function() {
    it('should return 0.2 when inputs are (DIVIDE, 1.4, 4.5)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when inputs are (DIVIDE, 1.4, 0)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 2.5 when inputs are (DIVIDE, 4.9, 2)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 4.9, 2), 2.5);
    });
  });

  describe('Invalid operation', function() {
    it('should throw an error when an invalid operation is provided', function() {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), /Invalid operation type/);
    });
  });
});
