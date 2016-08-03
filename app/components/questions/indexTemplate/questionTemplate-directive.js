angular.module('tequeFrontendApp').directive('tqQuestionTemplate', function (QuestionUpvotes, login, ENV, Follow) {
	

	return {
		templateUrl: 'components/questions/indexTemplate/questionTemplate.html',
		restrict: 'E',
		replace: true,
		scope: {
			data: '=',
			show: '=',
			reportOptions: '=',
			authenticated: '='
		},
		controller: function ($scope, $timeout) {
			if($scope.authenticated) {
				$scope.answerEnabled = false;
				$scope.voted = false;
				$scope.commentEnabled = false;
				var current_user_id = localStorage.getItem('u_id');
				$scope.votes_ids = [];
				$scope.reports_user_ids = [];
				$scope.voteText;
				$scope.reportText;
				$scope.reportShown = false;
				$scope.showReportMessage = false;





				for (var i = 0; i < $scope.data.question_upvotes.length; i++){
					$scope.votes_ids.push($scope.data.question_upvotes[i].user_id);
				}

				for (var i = 0; i < $scope.data.reports.length; i++){
					$scope.reports_user_ids.push($scope.data.reports[i].user_id);
				}

				if ($scope.votes_ids.indexOf(parseInt(current_user_id)) === -1) {
					$scope.voted = false;
					$scope.voteText = "אוהב?";
				} else {
					$scope.voted = true;
					$scope.voteText = "אהבתי";
				}

				if ($scope.reports_user_ids.indexOf(parseInt(current_user_id)) === -1) {
					$scope.reported = false;
					$scope.reportText = "דווח";
				} else {
					$scope.reported = true;
					$scope.reportText = "מדווח";
				}

			}

			$scope.reportMessage = function () {
				$scope.showReportMessage = !$scope.showReportMessage;
				$timeout(function(){
					$scope.showReportMessage = !$scope.showReportMessage;
				},5000)
			}


			$scope.answer = function () {
				$scope.commentEnabled = false;
				$scope.answerEnabled = !$scope.answerEnabled;
			}
			$scope.comment = function () {
				$scope.answerEnabled = false;
				$scope.commentEnabled = !$scope.commentEnabled;
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

			$scope.showReportDialog = function (item_id) {
				$scope.reportShown = !$scope.reportShown
				$scope.item_id = item_id;
			}

			$scope.shareFb = function (question) {
				FB.ui({
					method: 'feed',
					name: question.title,
					link: ENV.apiEndpoint + '/question/25',
					caption: 'WWW.TEQUE.CO.IL',
					description: question.body
				}, function(response){
					console.log(response);
				});
			}

			$scope.follow = function (type, id) {
				if (!$scope.data.current_user_following) {
					Follow.follow(type, id).then(
						function(response){
							$scope.data.current_user_following = true;
							$scope.data.follower_count ++;
							console.log("success following")
						},
						function(response){
							console.log("error following")
						})
				}
				else {
					Follow.unfollow(type, id).then(
						function(response){
							$scope.data.current_user_following = false;
							$scope.data.follower_count --;
							console.log("success unfollowing")
						},
						function(response){
							console.log("error unfollowing")
						})
				}
			}
		}
	}
});