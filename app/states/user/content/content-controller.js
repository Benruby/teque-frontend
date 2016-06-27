'use strict';

angular.module('tequeFrontendApp')
.controller('ContentCtrl', function ($scope, Questions) {

	$scope.userQuestions = Questions.userQuestions
	.then(
		function(response){
			$scope.userQuestions = response.data;
		});

});
