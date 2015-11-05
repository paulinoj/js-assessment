if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      var module = {};
      module.greeting = str1;
      module.name = str2;
      module.sayIt = function() {
        return this.greeting + ", " + this.name;
      }
      return module;
    }
  };
});

