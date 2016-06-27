'use strict';


angular.module('tequeFrontendApp').factory('Questions', function($resource, $http, ENV) {
	
	return {
		allQuestions: $resource(ENV.apiEndpoint + '/api/questions/:id'),

		userQuestions: $http.get('/api/user_questions')
	} 
});