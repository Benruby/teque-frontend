angular.module('tequeFrontendApp').directive('tqAddAnswer', function () {
	return {
		restrict: 'E',
		templateUrl: "components/answers/add_answer/add_answer.html",
		controller: 'AddAnswers',
		scope: {

			questionId: '=',
			closeAnswer: '&'
		}
	}
})