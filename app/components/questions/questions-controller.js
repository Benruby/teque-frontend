'use strict';


angular.module('tequeFrontendApp')
.controller('QuestionsCtrl', function ($scope, Questions, toastMessage) {

	$scope.page = 1; 
	$scope.busy = false;
	$scope.questions = [];
	
	$scope.scrollDown = function() {
		if ($scope.busy){ return }
			$scope.busy = true;
		console.log("trying to get more data");
		Questions.allQuestions.query({page: $scope.page}).$promise.then(
			function(response){
				$scope.questions = $scope.questions.concat(response);
				$scope.page += 1;
				$scope.busy = false;
			}
			);
	}
}); 

