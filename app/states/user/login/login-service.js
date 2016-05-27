'use strict';


angular.module('tequeFrontendApp').service('login', function($http, $rootScope) {

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

});