'use strict';


angular.module('tequeFrontendApp').factory('Notifications', function($http, ENV) {
	
	return {
		getNotifications: function() {
			return $http.get(ENV.apiEndpoint + '/api/notifications')
		},

		markSeen: function (id) {
			return $http.patch(ENV.apiEndpoint + '/api/notifications/:id', 
			{
				notification: {
					id: id
				}
			}
			)
		}
	} 
});