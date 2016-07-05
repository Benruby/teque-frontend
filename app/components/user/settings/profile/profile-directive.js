angular.module('tequeFrontendApp').directive('tqUserProfile', function () {
	return {
		restrict: 'E',
		templateUrl: "components/user/settings/profile/profile.html",
		controller: function ($scope) {
			$scope.image = [{
				src: 'images/profile.jpeg'
			}];

			$scope.editProfilePhoto = function () {
				console.log("editing photo");
			}
		}

	}
})