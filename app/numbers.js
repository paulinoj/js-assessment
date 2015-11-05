if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      var binaryNum = num.toString(2);
      var binaryArray = binaryNum.split("").reverse();
      return Number(binaryArray[bit-1]);
    },

    base10: function(str) {
      return +parseInt(str, 2).toString(10);
    },

    convertToBinary: function(num) {
      var binaryNum = num.toString(2);
      for (var i = 0; i < (8 - binaryNum.length); i++) {
        binaryNum = '0' + binaryNum;
      }
      return binaryNum;
    },

    multiply: function(a, b) {
      var correction = 1;
      while (b < 1) {
        correction *= 10;
        a *= 10;
        b *= 10;
      }
      return a*b/(correction*correction);

    }
  };
});

