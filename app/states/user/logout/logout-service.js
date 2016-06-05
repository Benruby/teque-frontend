'use strict';


angular.module('tequeFrontendApp').factory('logout', function($http, authToken, $state, login) {

	return {

		logoutUser: function () {
			
			return $http({method: 'DELETE', url: '/api/logout'}).success(function () {
				authToken.removeToken();
				login.removeUserId();
				$state.go('login');	
			}).error(function() {
				$state.go('login');
			});
		}
	}

});