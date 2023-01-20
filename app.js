"use strict";
var aCodeAscii = 'a'.charCodeAt(0);
var zCodeAscii = 'z'.charCodeAt(0);
var nEnglishLetters = zCodeAscii - aCodeAscii + 1;
function shiftCipher(str, shift) {
    if (shift === void 0) { shift = 1; }
    //TODO
    //for each lower case letter (a-z) you should 
    //perform code ASCII on a given shift (add)
    //shift should be in cycle of lower case letters
    // code ASCII 'z' + 2 = code ASCII 'b'
    //examples:
    //shiftCipher("abz.", 3) => "dec."
    var arStr = Array.from(str);
    var arRes = arStr.map(function (sym) {
        var res = sym;
        if (sym <= 'z' && sym >= 'a') {
            var actualShift = (sym.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
            res = String.fromCharCode(aCodeAscii + actualShift);
        }
    });
    return arRes.join('');
}
function shiftDecipher(str, shift) {
    if (shift === void 0) { shift = 1; }
    //TODO
    //for each lower case letter (a-z) you should 
    //perform code ASCII on a given shift (subtract)
    //shift should be in cycle of lower case letters
    // code ASCII 'z' - 2 = code ASCII 'x'
    //examples:
    //shiftCipher("dec.", 3) => "abz."
    var arStr = Array.from(str);
    var arRes = arStr.map(function (sym) {
        var res = sym;
        if (sym <= 'z' && sym >= 'a') {
            var actualShift = (zCodeAscii - sym.charCodeAt(0) + shift) % nEnglishLetters;
            res = String.fromCharCode(zCodeAscii - actualShift);
        }
        return res;
    });
    return arRes.join('');
}
console.log(shiftDecipher("mnl", 1000));
//# sourceMappingURL=app.js.map