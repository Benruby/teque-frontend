'use strict';

/**
 * @ngdoc function
 * @name tequeFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tequeFrontendApp
 */
angular.module('tequeFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
