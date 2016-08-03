angular.module('tequeFrontendApp').directive('tqShowAnswers', function ($stateParams) {
	

	return {
		templateUrl: 'components/answers/show_answers/show.html',
		restrict: 'E',
		replace: true,
		scope: {
			answers: '=',
			authenticated: '='

		},
		controller: function ($scope) {		

			$scope.answer_id = $stateParams.answer_id;
		}
	};
});