angular.module('tequeFrontendApp').directive('tqPasswordReset', function () {
	return {
		restrict: 'E',
		templateUrl: "components/login/password_reset/reset.html",
		// replace: true,
		scope: {
			email: '=email',
			validEmail: '@',
			showErrorMessage: '&method'
		},

		// controllerAs: 'vm',
		// bindToController: true,
		controller: function (PasswordReset, $scope) {
			$scope.sendEmail = function () {
				if ($scope.validEmail === 'true') {
					PasswordReset.sendEmail($scope.email);
					$scope.showErrorMessage({message: ".הנחיות לחידוש סיסמה נשלחו לכתובת האימייל" });
				} else {
					$scope.showErrorMessage({message: "אימייל לא חוקי, אנא הקלד שנית" });
				}
				
			}
		}
	}
})