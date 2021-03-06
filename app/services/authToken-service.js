'use strict';


angular.module('tequeFrontendApp').factory('authToken', function($http, $q, ENV) {

	var storage = localStorage;
	var token = 'auth_token';

	
	var authToken = {

		setToken: function(auth_token) {
			storage.setItem(token, auth_token);
		},

		getToken: function () {
			
			return storage.getItem(token);
		},

		isAuthenticated: function() {
			var id = localStorage.getItem('u_id');
			var email = localStorage.getItem('u_email');
			var name = localStorage.getItem('u_name');
			var avatar = localStorage.getItem('u_avatar');
			var deferred = $q.defer();
			var localToken = authToken.getToken();
			var serverToken = this.checkServerToken().success(function(response){			
				if (localToken && serverToken && (localToken === response.token)) {
					if(!name || !avatar || !id || !email) {
						deferred.resolve(false);		
					} else {
						deferred.resolve(true);
					}
				} else {
					deferred.resolve(false);		
				}			
			}).error(function(){
				deferred.resolve(false);
			})

			return deferred.promise;

		},

		checkServerToken: function() {
			return $http.get(ENV.apiEndpoint + '/api/token');
		},

		removeToken: function() {
			storage.removeItem(token);
		},

		checkPassword: function(password) {
			return $http.post(ENV.apiEndpoint + '/api/check_password', {
				user: {
					password: password
				}
			});
		},

		check_if_current_user: function (id) {
			return $http.get(ENV.apiEndpoint + '/api/check_id', { 
				params: {
					user: {
						id: id
					}
				}
			})
		}


	}

	return authToken;

});