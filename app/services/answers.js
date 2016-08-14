'use strict';


angular.module('tequeFrontendApp').factory('Answers', function($resource, $http, ENV) {
	
	return {

		allAnswers: $resource(ENV.apiEndpoint + '/api/answers', {}, 

		{
			'update': {method: 'PUT'}
		}),

		userAnswers: $http.get(ENV.apiEndpoint + '/api/user_answers')
	}

});