'use strict';


angular.module('tequeFrontendApp')
.controller('QuestionsCtrl', function ($scope, Questions, Reports) {


	if ($scope.authenticated) {
		$scope.page = 1; 
		$scope.busy = false;
		$scope.questions = [];

		Reports.getReportOptions().then(function(response) {
			$scope.reportOptions = response.data;
		},function(response){
			console.log("ERROR getting options for report mopdal");
		});
	}

	$scope.scrollDown = function() {
		if ($scope.busy){ return }
			$scope.busy = true;
		Questions.allQuestions.query({page: $scope.page}).$promise.then(
			function(response){
				$scope.questions = $scope.questions.concat(response);
				$scope.page += 1;
				$scope.busy = false;
			});
	}
}); 

