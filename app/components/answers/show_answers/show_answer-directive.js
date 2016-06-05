angular.module('tequeFrontendApp').directive('tqShowAnswer', function (Answers, $timeout) {
	

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