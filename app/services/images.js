'use strict';


angular.module('tequeFrontendApp').factory('Images', function($resource, $http, ENV) {
	
	return {
		PostUserImage: function(img) {
			$http.patch(ENV.apiEndpoint + '/api/users', 
			{
				user: {
					image: img
				}
			}
			)
		}
	} 
});