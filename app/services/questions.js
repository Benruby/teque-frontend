'use strict';


angular.module('tequeFrontendApp').factory('Questions', function($resource, $http) {
	
	return $resource('/api/questions/:id')
});