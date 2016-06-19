'use strict';


angular.module('tequeFrontendApp').factory('Questions', function($resource, $http, ENV) {
	
	return $resource(ENV.apiEndpoint + '/api/questions/:id')
});