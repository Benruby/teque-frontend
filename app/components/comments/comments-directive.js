angular.module('tequeFrontendApp').directive('tqComment', function ($state, Comments) {
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

			$scope.sendComment = function () {
				var comment = Comments.comment($scope.itemType, $scope.itemId, $scope.comment.body).then(function(response){
					console.log(response.data);
					$scope.comments.push(response.data);
				},function(){
					console.log('error posting comment.')
				})
				$scope.comment = {};
			}
		}
	}
});