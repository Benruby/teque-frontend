'use strict';


angular.module('tequeFrontendApp').factory('Notifications', function($http, ENV) {
	
	return {
		getNotifications: function() {
			return $http.get(ENV.apiEndpoint + '/api/notifications')
		}
	} 
});