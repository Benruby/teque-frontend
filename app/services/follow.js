'use strict';


angular.module('tequeFrontendApp').factory('Follow', function($resource, $http, ENV) {
	
	return {
		getUser: function(id) {

			return $http.get('/api/users', { params:
				{
					id: id
				}
			})
		},

		follow: function(type, id) {
			return $http.post('/api/followers', {
				follow:
				{
					followable_type: type,
					item_id: id
				}
			})
		},

		unfollow: function (type, id) {
			return $http.delete('/api/followers/:id', {
				params: {
					follow:
					{
						followable_type: type,
						item_id: id
					}
				}
			})
		}
	} 
});