'use strict';


angular.module('tequeFrontendApp')
.controller('ShowQuestionCtrl', function ($log, $scope, Questions, $stateParams){
      $stateParams.contactId  //*** ) {

      	$scope.showQuestion = Questions.get({question_id: $stateParams.question_id});

      }); 

