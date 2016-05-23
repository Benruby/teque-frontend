'use strict';


angular.module('tequeFrontendApp')
.controller('LoginCtrl', function ($scope, auth, $location, $mdToast) {

	$scope.showToast = function(message) {
		$mdToast.show($mdToast.simple()
			.textContent(message)
			.position('center')
			.hideDelay(4000));
	}

	$scope.loginUser = function () {
		if ($scope.loginForm.$valid) {
			var promise = auth.loginUser($scope.user);
			promise.then(loginSuccess, loginError);
		}
	}

	var loginSuccess = function(response) {
		localStorage.setItem('auth_token', response.data.auth_token);
		$location.path('/');
	}

	var loginError = function(response) {
		$scope.loginError = response.data.error;
		$scope.showToast($scope.loginError );
	}

	$scope.signupUser = function () {
		if ($scope.signupForm.$valid) {
			var promise = auth.signupUser($scope.user);
			promise.then(signupSuccess, signupError);
		}
	}

	var signupSuccess = function(response) {
		localStorage.setItem('auth_token', response.data.auth_token);
		$scope.showToast("ההשרמה בוצעה בהצלחה!")
		$location.path('/');
	}

	var signupError = function(response) {
		if (response.data.errors.email) {
			$scope.showToast("כתובת האימייל כבר בשימוש, בחר/י אחרת");
		} else {
			if (response.data.errors.password) {
				$scope.showToast("אורך הסיסמה נדרש להיות 8 תווים לפחות");
			}
		}
	}


	$scope.signupChoice = false;
	$scope.signup = function () {
		$scope.signupChoice = !$scope.signupChoice;
	}

}); 


