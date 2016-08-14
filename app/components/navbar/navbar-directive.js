angular.module('tequeFrontendApp').directive('tqNavbar', function (Notifications) {
	return {
		restrict: 'E',
		templateUrl: "components/navbar/navbar.html",
		replace: true,
		link: function(scope, element, attrs) {

			scope.closeNavbar = function() {
				scope.$focused = false;
			};
		},
		controller: function ($scope, $state) {
			if ($scope.authenticated) {
				$scope.user_avatar = localStorage.getItem('u_avatar');
				$scope.user_name = localStorage.getItem('u_name').split(' ')[0];

				$scope.notifications = {};
				$scope.showNotifications = false;
				$scope.showUserMenuState = false;
				$scope.allowMenus = false;

				Notifications.getNotifications().then(
					function(response){
						$scope.notifications = response.data;
					},
					function(response){
					})
			}
			$scope.showNotifs = function() {
				$scope.showNotifications = !$scope.showNotifications;
				if ($scope.showUserMenuState) $scope.showUserMenuState = false;

			}

			$scope.showUserMenu = function () {
				$scope.showUserMenuState = !$scope.showUserMenuState;
				if ($scope.showNotifications) $scope.showNotifications = false;
			}

			$scope.goToMain = function() {
				$state.go('main', {}, {reload: true});
			}

		}
	}
});