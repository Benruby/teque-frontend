'use strict';


angular.module('tequeFrontendApp')
.controller('ShowQuestionCtrl', function ($log, $scope, Questions, $stateParams){


	$scope.question = Questions.get({id: $stateParams.question_id}).$promise.then(function(response) {
		$scope.question = response;
	}, function () {
		console.log("resource ERROR!!!");
	});

}); 

