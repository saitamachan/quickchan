'use strict';
angular.module('quickchanApp')
  .service('pingCache', function ($http) {
    return {
      'checkModicationsInThread' : function(){
        $http.get('/mocks/cache.json')
        .success(function(data){
          return JSON.parse(data);
        });
      }
    };
  });
