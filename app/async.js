if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var deferred = $.Deferred();
      setTimeout(function() {
        deferred.resolve(value);
      }, 0);
      return deferred.promise();
    },

    manipulateRemoteData : function(url) {
	  var get = $.get(url).pipe(function(data){
        var arr = data["people"];
        var answer = [];
	  	for (var i = 0; i < arr.length; i++) {
          answer.push(arr[i]["name"]);  
	  	}
	  	answer.sort();
	    return answer;
      });
      return get;
	}
  };
});
