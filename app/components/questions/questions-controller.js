'use strict';


angular.module('tequeFrontendApp')
.controller('QuestionsCtrl', function ($scope, Questions) {

	$scope.questions = Questions.allQuestions.query();


}); 

