angular.module('tequeFrontendApp').directive('tqQuestions', function () {
	return {
		restrict: 'E',
		templateUrl: "components/questions/questions.html",
		controller: 'QuestionsCtrl'

	}
})