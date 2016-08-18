angular.module('tequeFrontendApp').directive('tqComment', function ($state, Comments, Reports) {
	return {
		restrict: 'E',
		templateUrl: "components/comments/item_comment.html",
		replace: true,
		scope: {
			itemId: '=',
			closeComment: '&',
			comments: '=',
			itemType: '@'
		},
		controller: function ($scope, $state) {

			Reports.getReportOptions().then(function(response){
				$scope.reportOptions = response.data;
			});

			$scope.sendComment = function () {
				var comment = Comments.comment($scope.itemType, $scope.itemId, $scope.comment.body).then(function(response){
					console.log(response.data);
					$scope.comments.push(response.data);
				},function(){
					console.log('error posting comment.')
				})
				$scope.comment = {};
			}

			$scope.showReportDialog = function () {
				$scope.reportShown = true;
			}

			$scope.goToProfile = function (id) {
				var current_user_id = localStorage.getItem('u_id');
				if (id == current_user_id) {
					$state.go('settings');
				} else {
					$state.go('profile', {id: id});
				}
			}
		}
	}
});