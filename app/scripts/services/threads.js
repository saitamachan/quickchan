'use strict';
angular.module('quickchanApp')
  .service('Threads', ['$http', function ($http) {
    return {
      'list' : function(){
         return $http.get('/mocks/threads.json');
      }
    };
  }]);
