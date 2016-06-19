'use strict';


angular.module('tequeFrontendApp').factory('Answers', function($resource, ENV) {
	
	return $resource(ENV.apiEndpoint + '/api/answers/:answer_id?question_id', {answer_id: '@answer_id', question_id: '@question_id'}, 

		{
			'update': {method: 'PUT'}
		});

});