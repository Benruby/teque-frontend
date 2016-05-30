angular.module('tequeFrontendApp').directive('tqQuestionTemplate', function () {
	

	return {
		templateUrl: 'components/questions/indexTemplate/questionTemplate.html',
		replace: true,
		scope: {
			data: '='
		},
		controller: function ($scope) {
			$scope.question_title = $scope.data.title;
			$scope.question_body = $scope.data.body;
		}
	};
})