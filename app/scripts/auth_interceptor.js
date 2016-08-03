 angular
 .module('tequeFrontendApp').factory('authInterceptor', function ($q, $location) {
 	return {
 		request: function(config) {
 			config.headers = config.headers || {};
 			if (localStorage.auth_token) {
 				config.headers.token = localStorage.auth_token;
 			}
 			return config;
 		},
 		responseError: function(response) {
 				if (response.status === 401) {
 				}

 				return $q.reject(response);
 		}
 	}
 })

 .config(function($httpProvider){
 	$httpProvider.interceptors.push('authInterceptor');
 });