'use strict';

angular.module('quickchanApp')
  .controller('BoardController', ['Threads','$scope', function (Threads, $scope) {
    $scope.board = {
      'title' : '/b/ - Random',
      'slug' : 'b'
    };
//Make 30 seconds cache between the next F5
//If the board has a big intervals between posts it automaticaly will increase the cache to 60 minutes.
//If someone posts, the cache will auto clean
    Threads.list()
    .success(function(data){
      $scope.board.threads = data;
    });

  }]);
