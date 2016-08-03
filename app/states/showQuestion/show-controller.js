'use strict';


angular.module('tequeFrontendApp')
.controller('ShowQuestionCtrl', function ($log, $scope, Questions, $stateParams, authenticated) {

	$scope.authenticated = authenticated;

	$scope.question = Questions.allQuestions.get({id: $stateParams.question_id}).$promise.then(function(response) {
		$scope.question = response;
	}, function () {
		console.log("resource ERROR!!!");
	});

	

}); 

