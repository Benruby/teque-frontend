'use strict';


angular.module('tequeFrontendApp').factory('Settings', function($resource, $http) {
	
	return $resource ('/api/users/:id', null, {
		'update': {method: 'PATCH'}
	});
});