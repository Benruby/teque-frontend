angular.module('tequeFrontendApp').directive('answer', function ($stateParams) {
	

	return {
		templateUrl: 'components/answers/show_answers/answer/answer.html',
		restrict: 'E',
		replace: true,
		scope: {
			answer: '=',
			authenticated: '='

		},
		controller: function ($scope, $sce) {		
			$scope.trustedHtml = function () {
				return $sce.trustAsHtml($scope.answer.answer_body);
			}

			$scope.comment = function () {
				$scope.commentEnabled = !$scope.commentEnabled;
			}

		}
	};
});