'use strict';


angular.module('tequeFrontendApp').service('login', function($http, ENV) {

	var storage = localStorage;
	
	this.loginUser = function(user) {
		return $http.post(ENV.apiEndpoint + '/api/login', {
			email: user.email,
			password: user.password
		});
	};

	this.signupUser = function (user) {
		return $http.post(ENV.apiEndpoint + '/api/users', {
			user: {
				full_name: user.full_name,
				email: user.email,
				password: user.password
			}
		});
	};

	this.setUserId = function(data) {
		storage.setItem('u_id', data.id);
		storage.setItem('u_email' , data.email);
		storage.setItem('u_name', data.full_name);
		storage.setItem('u_avatar', data.avatar);
	}

	this.removeUserId = function () {
		storage.removeItem('u_id');
		storage.removeItem('u_email');
		storage.removeItem('u_name');
		storage.removeItem('u_avatar');
	}

});