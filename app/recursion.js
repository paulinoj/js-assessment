if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var answer = [];
      if (!dirName) {
        dirName = data.dir;
      }
      var innerFunc = function(data, dirName) {
    	// if (data.dir === dirName) {
    	var fileList = data["files"];
    	var currentDirectory = data["dir"];
    	for (var i = 0; i < fileList.length; i++)
    	  if (typeof fileList[i] === "string") {
    	  	if (dirName === undefined) {
    	  	  answer.push(fileList[i]);
    	  	}
    	  	else
    	  	{
    	  	  if (dirName === currentDirectory) {
    	  	    dirName = undefined;
    	        answer.push(fileList[i]);
    	      }
    	    }
    	  }
    	  else
    	  {
    	    innerFunc(fileList[i], dirName);
    	  }
    	};
        innerFunc(data, dirName);
    	return answer;
    },

    permute: function(arr) {
      var answerArr = [];
      var arrCopy = arr.slice();
      var findPerms = function(arr) {
        if (arr.length === 1) {
          return [arr];
        }
        var answer = [];
        var head = arr.shift();
        var tails = findPerms(arr);
        for (var i = 0; i < tails.length; i++) {
          var currentPerm = tails[i];
          for (var j=0; j <= currentPerm.length; j++) {
            var newArray = currentPerm.slice();
            newArray.splice(j, 0, head);
            answer.push(newArray);
          }
        }
        return answer;
      }
      return findPerms(arrCopy);
    }
  };
});
