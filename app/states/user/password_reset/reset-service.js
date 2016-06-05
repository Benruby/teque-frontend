'use strict';

angular.module('tequeFrontendApp').service('PasswordReset', function($http) {
	this.loginUser = function(user) {
		return $http.post('/api/login', {
			email: user.email,
			password: user.password
		});
	};

	this.sendEmail = function(email) {
		return $http.post('/api/users/password', {
			email: email
		});
	}
});