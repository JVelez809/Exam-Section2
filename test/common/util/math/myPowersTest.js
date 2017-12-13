const assert = require('chai').assert;
const myPowers = require('../../../../src/common/util/math/myPower');


describe('myPowers', function() {
    describe('toCube', function() {
        var num1 = 3;
        var num1String = "3";
        it('toPowers(' + num1 + ') should return cube value of "' + num1 + '"', function() {
            let result = myPowers.toCube(num1);
            assert.equal(result, 27);
        });

        it('toPowers("' + num1String + '") should return cube value of "' + num1String + '"', function() {
            let result = myPowers.toCube(num1String);
            assert.equal(result, 27);
        });

        it('it returning a number', function() {
            let result = myPowers.toCube(num1);
            assert.typeOf(result, 'number');
        });
    });
    describe('toSquare', function() {
        var num1 = 2;
        var num1String = "2";
        it('toPowers(' + num1 + ') should return Square value of "' + num1 + '"', function() {
            let result = myPowers.toSquare(num1);
            assert.equal(result, 4);
        });

        it('toPowers("' + num1String + '") should return Square value of "' + num1String + '"', function() {
            let result = myPowers.toSquare(num1String);
            assert.equal(result, 4);
        });

        it('it returning a number', function() {
            let result = myPowers.toSquare(num1);
            assert.typeOf(result, 'number');
        });
    });
});