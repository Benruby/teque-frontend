'use strict';


angular.module('tequeFrontendApp').factory('QuestionUpvotes', function($resource, $http, ENV) {
	
	return {

		votes: $resource(ENV.apiEndpoint + '/api/question_upvotes/:question_id', {question_id: '@question_id'})

	}

	
});