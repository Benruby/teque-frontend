angular.module('tequeFrontendApp').directive('tqUserProfile', function () {
	return {
		restrict: 'E',
		templateUrl: "components/user/settings/profile/profile.html",
		controller: function ($scope) {
			$scope.image = [{
				src: 'images/profile.jpeg'
			}];
		}

	}
})