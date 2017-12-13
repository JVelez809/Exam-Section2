var mySquare = require('./mySquare');
var myCube = require('./myCube');
module.exports = {
    /**
     * Square
     */
    toSquare: function(inpNumber) {
        return mySquare.toSquare(inpNumber);
    },

    /**
     * Cubed
     */
    toCube: function(inpNumber) {
        return myCube.toCube(inpNumber);
    }
}