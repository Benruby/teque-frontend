angular.module('tequeFrontendApp').directive('tqShowAnswers', function ($timeout) {
	

	return {
		templateUrl: 'components/answers/show_answers/show.html',
		restrict: 'E',
		replace: true,
		scope: {
			answers: '='

		},
		controller: function ($scope) {		
			
		}
	};
});