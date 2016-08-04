'use strict';


angular.module('tequeFrontendApp')
.controller('ShowQuestionCtrl', function ($rootScope, $log, $scope, Questions, $stateParams, authenticated, $state) {

	$scope.authenticated = authenticated;

	$scope.question = Questions.allQuestions.get({id: $stateParams.question_id}).$promise.then(function(response) {
		$scope.question = response;
	}, function (response) {
		$rootScope.$broadcast('$stateChangeError');
	});

	

}); 

