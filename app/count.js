if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      console.log(start);
      start++;
      if (start < end) {
        var counter = setInterval(function() {
      	  console.log(start);
      	  start++;
      	  if (start > end) {
      	    clearInterval(counter);
      	  }
        }, 100);
      }
      return {cancel: function() {clearInterval(counter)}};
    } 
  };
});