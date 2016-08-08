'use strict';


angular.module('tequeFrontendApp')
.controller('QuestionsCtrl', function ($scope, Questions, Reports) {



	$scope.page = 1; 
	$scope.busy = false;
	$scope.questions = [];

	Reports.getReportOptions().then(function(response) {
		$scope.reportOptions = response.data;
	},function(response){
	});

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

