'use strict';


angular.module('tequeFrontendApp').factory('authToken', function($http, $q) {

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
			var deferred = $q.defer();
			var localToken = authToken.getToken();
			var serverToken = this.checkServerToken().success(function(response){			
				if (localToken && serverToken && (localToken === response.token)) {
					deferred.resolve(true);
				} else {
					deferred.resolve(false);		
				}			
			}).error(function(){
				console.log("cant get token from server");
			})

			return deferred.promise;

		},

		checkServerToken: function() {
			return $http.get('/api/token');
		},

		removeToken: function() {
			storage.removeItem(token);
		}


	}

	return authToken;

});