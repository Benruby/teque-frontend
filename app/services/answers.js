'use strict';


angular.module('tequeFrontendApp').factory('Answers', function($resource) {
	
	return $resource('/api/answers/:answer_id?question_id', {answer_id: '@answer_id', question_id: '@question_id'}, 

		{
			'update': {method: 'PUT'}
		});

});