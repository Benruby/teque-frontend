'use strict';


angular.module('tequeFrontendApp')
.controller('AddAnswers', function ($scope, $state, Answers, toastMessage) {

$scope.answer = {};

$scope.sendAnswer = function () {
	$scope.answer.question_id = $scope.questionId;
	Answers.save({answer: $scope.answer});
	toastMessage.showToast("התשובה נשלחה בהצלחה");
	$scope.closeAnswer();
	$state.reload();

}



}); 

