'use strict';

angular.module('tequeFrontendApp')
.controller('LogoutCtrl', function (authToken, $state, logout) {

	logout.logoutUser();

});
