'use strict';


angular.module('tequeFrontendApp')
.controller('SignupCtrl', function ($scope, login, authToken, $state, toastMessage) {


	$scope.signupUser = function () {
		if ($scope.signupForm.$valid) {
			var promise = login.signupUser($scope.user);
			promise.then(signupSuccess, signupError);
		}
	}

	var signupSuccess = function(response) {
		var user = response.data;
		var token = response.data.authentication_token;
		authToken.setToken(token);
		login.setUserId(user)
		toastMessage.showToast("!ההשרמה בוצעה בהצלחה")
		$state.go('main');
	}

	var signupError = function(response) {
		if (response.data.errors.email) {
			toastMessage.showToast("כתובת האימייל כבר בשימוש, בחר/י אחרת");
		} else {
			if (response.data.errors.password) {
				toastMessage.showToast("אורך הסיסמה נדרש להיות 8 תווים לפחות");
			}
		}
	}
}); 


