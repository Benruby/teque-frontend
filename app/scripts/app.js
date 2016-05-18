'use strict';

/**
 * @ngdoc overview
 * @name tequeFrontendApp
 * @description
 * # tequeFrontendApp
 *
 * Main module of the application.
 */
 angular
 .module('tequeFrontendApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngMaterial',
  'ngMessages'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/login', {
    templateUrl: 'components/login/login.html',
    controller: 'LoginCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
