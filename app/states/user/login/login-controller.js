'use strict';


angular.module('tequeFrontendApp')
.controller('LoginCtrl', function ($scope, login, authToken, $state, toastMessage) {


	$scope.loginUser = function () {
		if ($scope.loginForm.$valid) {
			var promise = login.loginUser($scope.user);
			promise.then(loginSuccess, loginError);
		}
	}
	var loginSuccess = function(response) {
		var user = response.data;
		var token = response.data.authentication_token;
		authToken.setToken(token);
		login.setUserId(user);
		$state.go('main');
	}
	var loginError = function(response) {
		$scope.loginError = response.data.error;
		toastMessage.showToast($scope.loginError );
	}


	$scope.signupChoice = false;
	$scope.signup = function () {
		$scope.signupChoice = !$scope.signupChoice;
	}

}); 


