angular.module('tequeFrontendApp').directive('tqPasswordReset', function () {
	return {
		restrict: 'E',
		templateUrl: "states/user/password_reset/reset.html",
		// replace: true,
		scope: {
			email: '=email',
			validEmail: '@'
		},

		// controllerAs: 'vm',
		// bindToController: true,
		controller: function (PasswordReset, $scope, toastMessage) {
			$scope.sendEmail = function () {
				if ($scope.validEmail === 'true') {
					PasswordReset.sendEmail({email: $scope.email});
					toastMessage.showToast(".הנחיות לחידוש סיסמה נשלחו לכתובת האימייל");
				} else {
					toastMessage.showToast("אימייל לא חוקי, אנא הקלד שנית");
				}
				
			}
		}
	}
})