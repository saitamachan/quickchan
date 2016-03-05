'use strict';

/**
 * @ngdoc directive
 * @name quickchanApp.directive:threads
 * @description
 * # threads
 */
angular.module('quickchanApp')
  .directive('threads', function () {
    return {
      templateUrl: '/views/templates/threads.html',
      restrict: 'E'
    };
  });
