'use strict';


angular.module('tequeFrontendApp').factory('QuestionUpvotes', function($resource, $http) {
	
	return {

		votes: $resource('/api/question_upvotes/:question_id', {question_id: '@question_id'})

	}

	
});