'use strict';


angular.module('tequeFrontendApp')
.controller('AddAnswers', function ($scope, $state, Answers, toastMessage) {

	$scope.answer = {};

	$scope.editorOptions = {
		// extraPlugins: 'autogrow',
		height: 300,
		removePlugins: 'resize',
		LinkDlgHideTarget: true,
		extraPlugins: 'base64image',
		extraAllowedContent: 'a[href]',
		toolbar: [
		[ 'Bold', 'Italic', 'Underline', '-', 'NumberedList', 'BulletedList', '-' ,'BidiLtr', 'BidiRtl'  ],
		['-','Link', 'Image', 'Blockquote', '-', 'Undo', 'Redo']
		// ['-','CodeSnippet']
		]
	};

	$scope.sendAnswer = function () {
		$scope.answer.question_id = $scope.questionId;
		Answers.allAnswers.save({answer: $scope.answer});
		toastMessage.showToast("התשובה נשלחה בהצלחה");
		$scope.closeAnswer();
		$state.reload();

	}

}); 

