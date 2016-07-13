'use strict';


angular.module('tequeFrontendApp').factory('Images', function($resource, $http, ENV) {
	
	return {
		PostUserImage: function(img) {
			return $http.patch(ENV.apiEndpoint + '/api/users', 
			{
				user: {
					avatar: img
				}
			}
			)
		}
	} 
});