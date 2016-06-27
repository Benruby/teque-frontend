angular.module('tequeFrontendApp').directive('tqNavbar', function () {
	return {
		restrict: 'E',
		templateUrl: "components/navbar/navbar.html",
		replace: true,
		controller: function ($scope, authToken) {
			$scope.loggedin = authToken.isAuthenticated(); 
	
		}
	}
});