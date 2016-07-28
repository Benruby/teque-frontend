'use strict';


angular.module('tequeFrontendApp').factory('logout', function($http, authToken, $state, login, ENV) {

	return {

		logoutUser: function () {
			
			return $http({method: 'DELETE', url: ENV.apiEndpoint + '/api/logout'}).success(function () {
				authToken.removeToken();
				login.removeUserId();
				$state.go('login');	
			}).error(function() {
				$state.go('login');
			});
		}
	}

});