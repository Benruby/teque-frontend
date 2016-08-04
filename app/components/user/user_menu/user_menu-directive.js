angular.module('tequeFrontendApp').directive('userMenu', function () {
	return {
		restrict: 'E',
		templateUrl: "components/user/user_menu/user_menu.html",
		replace: true,
		controller: function ($scope) {

$scope.reportBug = false;

			$scope.showReportBug = function () {
				$scope.reportBug = true;
			}

		}
	}
});