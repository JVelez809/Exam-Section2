module.exports = {

    toCube: function(inpNumber) {
        var numberStr = NaN;
        if (typeof inpNumber === "number") {
            numberStr = inpNumber;
        } else if (typeof inpNumber === "string" && typeof Number(inpNumber) === "number") {
            numberStr = Number(inpNumber);
        }
        return Math.pow(numberStr, 3);
    }
}