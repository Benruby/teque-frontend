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
				FB.ui({
					method: 'feed',
					name: $scope.data.title,
					link: ENV.apiEndpoint + '/question/' + $scope.data.id,
					caption: 'WWW.TEQUE.CO.IL',
					description: $scope.data.body
				}, function(response){
					console.log(response);
				});
			}
		}
	}
});