'use strict';


angular.module('tequeFrontendApp').factory('QuestionComments', function($resource, $http) {
	
	return  $resource('/api/question_comments/:comment_id', {comment_id: '@comment_id'});

	
});