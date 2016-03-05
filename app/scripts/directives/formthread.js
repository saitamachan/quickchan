'use strict';

/**
 * @ngdoc directive
 * @name quickchanApp.directive:formthread
 * @description
 * # formthread
 */
angular.module('quickchanApp')
  .directive('formthread', function () {
    return {
      templateUrl: '/views/templates/formthread.html',
      restrict: 'E'
    };
  });
