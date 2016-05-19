'use strict';

angular.module('tequeFrontendApp').service('auth', function($http) {
	this.loginUser = function(user) {
		return $http.post('/api/login', {
			email: user.email,
			password: user.password
		});
	};

	this.signupUser = function (user) {
		return $http.post('api/users', {
			user: {
				full_name: user.full_name,
				email: user.email,
				password: user.password
			}
		});
	}

	this.logout - function () {
		return $http.delete('/api/logout');
	}

	this.isLoggedIn = function () {
		return (localStorage.getItem('auth_token')) ? true : false;
	}
});