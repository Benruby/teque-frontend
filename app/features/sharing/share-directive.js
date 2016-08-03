angular.module('tequeFrontendApp').directive('share', function () {
	

	return {
		templateUrl: 'features/sharing/share.html',
		restrict: 'E',
		replace: true,
		scope: {
			data: '='
		},
		controller: function ($scope, ENV) {

			$scope.shareFb = function (question) {
				var name = $scope.data.title
				FB.ui({
					method: 'feed',
					name: name,
					description: $scope.data.body,
					link: 'http://www.teque.co.il/question/' + $scope.data.id,
					caption: 'WWW.TEQUE.CO.IL'
				}, function(response){
					console.log(response);
				});
			}
		}
	}
});