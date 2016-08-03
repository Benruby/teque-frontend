'use strict';


angular.module('tequeFrontendApp').factory('Questions', function($resource, $http, ENV) {
	
	return {
		allQuestions: $resource(ENV.apiEndpoint + '/api/questions/:id'),

		userQuestions: function () {
			return 	$http.get(ENV.apiEndpoint + '/api/user_questions')
		}
	} 
});