if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return str.search(/\d/) !== -1;
    },

    containsRepeatingLetter : function(str) {
      return str.search(/([a-zA-Z])\1+/) !== -1;
    },

    endsWithVowel : function(str) {
      return str.search(/[aeiouAEIOU]$/) !== -1
    },

    captureThreeNumbers : function(str) {

      var result = str.match(/\d{3}/);
      if (result) {
        return result[0];
      }
      return false;
    },

    matchesPattern : function(str) {
      return str.search(/^\d{3}-\d{3}-\d{4}$/) !== -1;

    },
    isUSD : function(str) {
      return str.search(/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/) !== -1;
    }
  };
});
