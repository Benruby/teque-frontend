angular.module('tequeFrontendApp').directive('answer', function ($stateParams) {
	

	return {
		templateUrl: 'components/answers/show_answers/answer/answer.html',
		restrict: 'E',
		replace: true,
		scope: {
			answer: '=',
			authenticated: '='

		},
		controller: function ($scope, $sce, $state) {		
			$scope.trustedHtml = function () {
				return $sce.trustAsHtml($scope.answer.answer_body);
			}

			$scope.comment = function () {
				$scope.commentEnabled = !$scope.commentEnabled;
			}

			$scope.goToProfile = function (id) {
				current_user_id = localStorage.getItem('u_id');
				if (id == current_user_id) {
					$state.go('settings');
				} else {
					$state.go('profile', {id: id});
				}
			}

		}
	};
});