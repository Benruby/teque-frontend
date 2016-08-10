'use strict';

angular.module('tequeFrontendApp')
.controller('AskCtrl', function ($scope, $state, Questions, toastMessage) {

	$scope.question_data = {}

	$scope.openAsk = function() {
		$scope.$focused = true;
	}

	$scope.askQuestion = function () {
		if ($scope.askForm.$valid) {
			var promise = Questions.allQuestions.save({question: $scope.question_data}).$promise.then(function (response) {
				$scope.question_data = {}
				$scope.$focused = false;
				$state.reload();
			},
			function (response) {
			});
		}
	}


});
