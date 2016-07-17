angular.module('tequeFrontendApp').directive('tqChildComment', function ($state, Comments) {
	return {
		restrict: 'E',
		templateUrl: "components/comments/child_comment/child_comment.html",
		replace: true,
		scope: {
			comment: '='
		},
		controller: function ($scope) {

			$scope.sendChildComment = function (commentable_type) {
				var comment = Comments.comment(commentable_type, $scope.comment.id, $scope.child_comment.body).then(function(response){
					$scope.comment.item_comments.push(response.data);
					console.log(response);
				},function(){
					console.log('error posting comment.')
				})
				$scope.child_comment = {};
			}
		}
	}
});