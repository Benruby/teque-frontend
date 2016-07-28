angular.module('tequeFrontendApp').directive('tqUserAccount', function (logout) {
	return {
		restrict: 'E',
		templateUrl: "components/user/settings/account/account.html",
		controller: function($scope) {
			$scope.email = localStorage.getItem('u_email');
		}


   	}
   })