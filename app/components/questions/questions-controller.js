'use strict';


angular.module('tequeFrontendApp')
.controller('QuestionsCtrl', function ($scope, Questions) {

	$scope.page = 1; 
	$scope.busy = false;
	$scope.questions = [];
	// $scope.questions = Questions.allQuestions.query({page: $scope.page});
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

