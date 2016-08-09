angular.module('tequeFrontendApp').directive('collapseMenu', function () {
	return {
		link:  function(scope, element, attrs) {
			element.on('click', function () {
				scope.$apply(function () {
					scope.showUserMenuState = false;
					scope.showNotifications = false;
				}); 	

			})
		}
	}
});

