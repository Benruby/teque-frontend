'use strict';

angular.module('tequeFrontendApp')
.controller('AskCtrl', function ($scope, $state, Questions, toastMessage) {

	$scope.question_data = {}

	$scope.askQuestion = function () {
		if ($scope.askForm.$valid) {
			var promise = Questions.save({question: $scope.question_data}).$promise.then(function (response) {
				$scope.question_data = {}
				$scope.$focused = false;
				$state.reload();
			},
			function (response) {
				console.log(response);
			});
		}
	}


});
