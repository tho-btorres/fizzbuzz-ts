"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = convert;
var FIZZ = "fizz";
var BUZZ = "buzz";
var isDivisibleBy = function (number, divisor) { return number % divisor === 0; };
function convert(number) {
    var result = "";
    if (isDivisibleBy(number, 3))
        result += FIZZ;
    if (isDivisibleBy(number, 5))
        result += BUZZ;
    var numberStr = number.toString();
    for (var _i = 0, numberStr_1 = numberStr; _i < numberStr_1.length; _i++) {
        var char = numberStr_1[_i];
        if (char === "3")
            result += FIZZ;
        if (char === "5")
            result += BUZZ;
    }
    return result || number.toString();
}
console.log(convert(45));
