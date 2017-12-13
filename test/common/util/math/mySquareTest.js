const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare');

const num1 = 2;
const num1String = "2";

describe('mySquareTest', function() {
    describe('toSquare', function() {
        var num1 = 2;
        var num1String = "2";
        it('toSquare(' + num1 + ') should return square value of "' + num1 + '"', function() {
            let result = mySquare.toSquare(num1);
            assert.equal(result, 4);
        });

        it('toSquare("' + num1String + '") should return square value of "' + num1String + '"', function() {
            let result = mySquare.toSquare(num1String);
            assert.equal(result, 4);
        });

        it('it returning a number', function() {
            let result = mySquare.toSquare(num1);
            assert.typeOf(result, 'number');
        });
    });
});