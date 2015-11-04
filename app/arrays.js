if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    },

    sum : function(arr) {
      return arr.reduce(function(a, b) {
        return a + b;
      }, 0);  
    },

    remove : function(arr, item) {
      var arrCopy = arr.slice();
      var i = 0;
      while (i < arrCopy.length) {
        if (arrCopy[i] === item) {
          arrCopy.splice(i, 1);
          i--;
        }
        i++;
      }
      return arrCopy;
    },

    removeWithoutCopy : function(arr, item) {
      var i = 0;
      while (i < arr.length) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i--;
        }
        i++;
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop()
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      var answerArray = arr1.slice();
      for (var i = 0; i < arr2.length; i++) {
        answerArray.push(arr2[i]);
      }
      return answerArray;
    },

    insert : function(arr, item, index) {
      var i = arr.length;
      while (i > index) {
        arr[i] = arr[i-1];
        i--;
      }
      arr[index] = item;
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          count++;
        }
      }
      return count;
    },

    duplicates : function(arr) {
      var duplicateHash = {};
      var answerArr = [];
      for (var i = 0; i < arr.length; i++) {
        if (duplicateHash.hasOwnProperty(arr[i])) {
          duplicateHash[arr[i]] = true;
        }
        else
        {
          duplicateHash[arr[i]] = false;
        }
      }
      for (var j in duplicateHash) {
        if (duplicateHash[j]) {
          answerArr.push(j);
        }
      }
      return answerArr.sort(function(a, b) {a-b});
    },

    square : function(arr) {
      for (var i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var answer = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
          answer.push(i);
        }
      }
      return answer;
    }
  };
});
