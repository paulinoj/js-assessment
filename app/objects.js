if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      var tmp = arguments.callee.toString().match(/\(.*?\)/)[0];
      var argumentNames = tmp.replace(/[()\s]/g,'').split(',');
      constructor["prototype"][argumentNames[1]] = greeting;
    },

    iterate : function(obj) {
      var answerArr = [];
      var answerStr = "";
      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
      	  answerStr += i;
      	  answerStr += ": ";
      	  answerStr += obj[i];
      	  answerArr.push(answerStr);
      	  answerStr = "";
        }
      }
      return answerArr;
    }
  };
});
