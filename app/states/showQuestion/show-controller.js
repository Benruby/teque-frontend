'use strict';


angular.module('tequeFrontendApp')
.controller('ShowQuestionCtrl', function ($log, $scope, Questions, $stateParams, authenticated) {


	$scope.question = Questions.allQuestions.get({id: $stateParams.question_id}).$promise.then(function(response) {
		$scope.question = response;
	}, function () {
		console.log("resource ERROR!!!");
	});

	$scope.authenticated = authenticated;

}); 

