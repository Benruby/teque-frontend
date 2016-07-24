'use strict';


angular.module('tequeFrontendApp').factory('Settings', function($resource, $http, ENV) {
	
	return $resource (ENV.apiEndpoint + '/api/users', {id: '@id'}, {
		'update': {method: 'PATCH'}
	});
});