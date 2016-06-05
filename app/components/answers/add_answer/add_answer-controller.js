'use strict';


angular.module('tequeFrontendApp')
.controller('AddAnswers', function ($scope, Answers, toastMessage) {

$scope.answer = {};

$scope.sendAnswer = function () {
	$scope.answer.question_id = $scope.questionId;
	Answers.save({answer: $scope.answer});
	$scope.closeAnswer();
}



}); 

