if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(arg) {
        return str + ", " + arg;
      }
    },

    makeClosures : function(arr, fn) {
      var answerArr = [];
      arr.forEach(function(val) {
        answerArr.push(function() {
          return fn(val);
        });
      });
      return answerArr;
    },

    partial : function(fn, str1, str2) {
      var firstArgs = Array.prototype.slice.call(arguments);
      firstArgs.shift();
      return function() {
        var lastArgs = Array.prototype.slice.call(arguments);
        var finalArgs = firstArgs.concat(lastArgs);
        return fn.apply(this, finalArgs);
      }
    },

    useArguments : function() {
      var args = Array.prototype.slice.call(arguments);
      return args.reduce(function(a, b) {return a + b}, 0);
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments);
      var func = args[0];
      args.shift();
      return func.apply(this, args);
    },

    partialUsingArguments : function(fn) {
      var firstArgs = Array.prototype.slice.call(arguments);
      firstArgs.shift();
      return function() {
        var lastArgs = Array.prototype.slice.call(arguments);
        var finalArgs = firstArgs.concat(lastArgs);
        return fn.apply(this, finalArgs);
      }
    },

    curryIt: function(fn) {
      var numArgs = fn.length;
      var innerFunc = function(fn, numArgs, argList) {
        if (numArgs === 1) {
          return function(a) {
            var args = Array.prototype.slice.call(arguments);
            argList.push(args[0]);
            return fn.apply(this, argList);
          }
        }
        else
        {
          var nestedFunc = innerFunc(fn, numArgs-1, argList);
          return function(a) {
            var args = Array.prototype.slice.call(arguments);
            argList.push(args[0]);
            return nestedFunc;
          }
        }
      }
      return innerFunc(fn, numArgs, []);
    }
  };
});
