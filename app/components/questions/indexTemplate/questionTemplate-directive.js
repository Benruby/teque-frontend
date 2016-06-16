angular.module('tequeFrontendApp').directive('tqQuestionTemplate', function (QuestionUpvotes, login) {
	

	return {
		templateUrl: 'components/questions/indexTemplate/questionTemplate.html',
		restrict: 'E',
		replace: true,
		scope: {
			data: '='
		},
		controller: function ($scope) {

			$scope.question_title = $scope.data.title;
			$scope.question_body = $scope.data.body;
			$scope.answerEnabled = false;
			$scope.voted = false;
			$scope.commentEnabled = false;
			var current_user_id = localStorage.getItem('u_id');
			$scope.votes_ids = [];
			$scope.voteText;


			for (var i = 0; i < $scope.data.question_upvotes.length; i++){
				$scope.votes_ids.push($scope.data.question_upvotes[i].user_id);
			}

			if ($scope.votes_ids.indexOf(parseInt(current_user_id)) === -1) {
				$scope.voted = false;
				$scope.voteText = "אוהב?";
			} else {
				$scope.voted = true;
				$scope.voteText = "אהבתי";
			}


			$scope.answer = function () {
				$scope.answerEnabled = !$scope.answerEnabled;
			}

			$scope.upvote = function (question_id) {
				if (!$scope.voted) {
					QuestionUpvotes.votes.save({question_id: question_id});
					$scope.data.upvotes ++;
					$scope.voted = true;
					$scope.voteText = "אהבתי";
				} else {
					QuestionUpvotes.votes.delete({question_id: question_id});
					$scope.data.upvotes --;
					$scope.voted = false;
					$scope.voteText = "אוהב?";
				}

			}
			
			$scope.comment = function () {
				$scope.commentEnabled = !$scope.commentEnabled;
			}
		}
	}
});