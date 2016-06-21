'use strict';


angular.module('tequeFrontendApp').factory('toastMessage', function($mdToast) {
	
	return {

		showToast: function(message) {
			$mdToast.show($mdToast.simple()
				.textContent(message)
				.position('bottom')
				.hideDelay(4000));
		}
	}
});