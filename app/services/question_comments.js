'use strict';


angular.module('tequeFrontendApp').factory('QuestionComments', function($resource, $http, ENV) {
	
	return  $resource(ENV.apiEndpoint + '/api/question_comments/:comment_id', {comment_id: '@comment_id'});

	
});