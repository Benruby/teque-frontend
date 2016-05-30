'use strict';

angular.module('tequeFrontendApp')
.controller('AskCtrl', function ($scope, Questions, toastMessage) {

	$scope.question = {}

	$scope.askQuestion = function () {
		if ($scope.askForm.$valid) {
			var promise = Questions.save($scope.question).$promise.then(function (response) {
				$scope.question = {}
				$scope.$focused = false;
				toastMessage.showToast('השאלה נשלחה בהצלחה');
			},
			function (response) {
				console.log(response);
			});
		}
	}


});
