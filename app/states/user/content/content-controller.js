'use strict';

angular.module('tequeFrontendApp')
.controller('ContentCtrl', function ($scope, Questions, Answers, authenticated, $sce) {

	$scope.authenticated = authenticated;
	
	if($scope.authenticated) {

		$scope.state = 'questions_asked';

		$scope.userQuestions = Questions.userQuestions()
		.then(
			function(response){
				$scope.userQuestions = response.data;
			});

		$scope.userAnswers = Answers.userAnswers
		.then(
			function(response){
				$scope.userAnswers = response.data;
			})

	}

	$scope.changeState = function (state) {
		$scope.state = state;
	}

	$scope.trustedHtml = function (content) {
		return $sce.trustAsHtml(content);
	}

});
