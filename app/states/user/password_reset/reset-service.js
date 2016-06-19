'use strict';

angular.module('tequeFrontendApp').service('PasswordReset', function($http, ENV) {
	this.loginUser = function(user) {
		return $http.post(ENV.apiEndpoint + '/api/login', {
			email: user.email,
			password: user.password
		});
	};

	this.sendEmail = function(email) {
		return $http.post(ENV.apiEndpoint + '/api/users/password', {
			user: email
		});
	};

	this.updatePassword = function(data) {
		return $http.put(ENV.apiEndpoint + '/api/users/update_password',{
			user: {password: data.new_password}
		});
	}
});