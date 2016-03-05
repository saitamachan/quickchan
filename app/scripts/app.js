'use strict';

/**
 * @ngdoc overview
 * @name quickchanApp
 * @description
 * # quickchanApp
 *
 * Main module of the application.
 */
angular
  .module('quickchanApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/boards/:boardID', {
        templateUrl: 'views/board.html',
        controller: 'BoardController'
      })
      .otherwise({
        templateUrl: 'views/404.html',
        redirectTo: '/notfound'
      });
  });
