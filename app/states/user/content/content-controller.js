'use strict';

angular.module('tequeFrontendApp')
.controller('ContentCtrl', function ($scope, Questions) {

	$scope.userQuestions = Questions.getUserQuestions
	.then(
		function(response){
			$scope.userQuestions = response.data;
		});

});
