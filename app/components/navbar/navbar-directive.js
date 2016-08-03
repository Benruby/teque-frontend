angular.module('tequeFrontendApp').directive('tqNavbar', function (Notifications) {
	return {
		restrict: 'E',
		templateUrl: "components/navbar/navbar.html",
		replace: true,
		controller: function ($scope) {
			if ($scope.authenticated) {
				$scope.user_avatar = localStorage.getItem('u_avatar');
				$scope.user_name = localStorage.getItem('u_name').split(' ')[0];

				$scope.notifications = {};
				$scope.showNotifications = false;

				Notifications.getNotifications().then(
					function(response){
						$scope.notifications = response.data;
						console.log("success getting noifs");
					},
					function(response){
						console.log("error getting noifs");
					})

				$scope.showNotifs = function() {
					$scope.showNotifications = !$scope.showNotifications;
				}
			}
		}
	}
});