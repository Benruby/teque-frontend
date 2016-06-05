'use strict';


angular.module('tequeFrontendApp').factory('Questions', function($resource) {
	
	return $resource('/api/questions/:question_id', {question_id: '@question_id'}, 

		{
			'update': {method: 'PUT'}
		});

});