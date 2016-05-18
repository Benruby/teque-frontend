'use strict';


angular.module('tequeFrontendApp')
.controller('LoginCtrl', function ($scope, auth, $location) {

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
	}

	$scope.signupUser = function () {
		console.log("signupuser")
		if ($scope.signupForm.$valid) {
			var promise = auth.signupUser($scope.user);
			promise.then(signupSuccess, signupError);
		}
	}

	var signupSuccess = function(response) {
		localStorage.setItem('auth_token', response.data.auth_token);
		$location.path('/');
	}

	var signupError = function(response) {
		$scope.loginError = response.data.error;
	}


	$scope.signupChoice = false;
	$scope.signup = function () {
		$scope.signupChoice = !$scope.signupChoice;
	}

}); 


