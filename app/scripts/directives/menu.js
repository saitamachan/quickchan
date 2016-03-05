'use strict';

/**
 * @ngdoc directive
 * @name quickchanApp.directive:menu
 * @description
 * # menu
 */
angular.module('quickchanApp')
  .directive('menu', function () {
    return {
      templateUrl: '/views/templates/menu.html',
      restrict: 'E'
    };
  });
