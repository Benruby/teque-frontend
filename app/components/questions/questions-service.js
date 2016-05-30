'use strict';


angular.module('tequeFrontendApp').factory('Questions', function($http, $resource) {
	
 	return $resource('/api/questions');

});