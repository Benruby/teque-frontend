'use strict';


angular.module('tequeFrontendApp').factory('logout', function($http, authToken, $state) {

	return {

		logoutUser: function () {
			
			return $http({method: 'DELETE', url: '/api/logout'}).success(function () {
				authToken.removeToken();
				$state.go('login');	
			}).error(function() {
				$state.go('login');
			});
		}
	}

});