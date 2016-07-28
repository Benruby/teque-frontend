'use strict';


angular.module('tequeFrontendApp').factory('Answers', function($resource, $http, ENV) {
	
	return {

		allAnswers: $resource(ENV.apiEndpoint + '/api/answers/:answer_id?question_id', {answer_id: '@answer_id', question_id: '@question_id'}, 

		{
			'update': {method: 'PUT'}
		}),

		userAnswers: $http.get(ENV.apiEndpoint + '/api/user_answers')
	}

});