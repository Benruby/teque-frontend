angular.module('tequeFrontendApp').directive('tqQuestionComment', function (QuestionComments) {
	return {
		restrict: 'E',
		templateUrl: "components/questionComments/question_comment.html",
		replace: true,
		scope: {
			questionId: '=',
			closeComment: '&'
		},
		controller: function ($scope) {
			$scope.comment = {};
			$scope.comments = QuestionComments.query({question_id: $scope.questionId})

			$scope.sendComment = function () {
				$scope.comment.question_id = $scope.questionId;
				QuestionComments.save($scope.comment);
				$scope.closeComment();
			}


		}

	}
});