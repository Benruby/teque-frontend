angular.module('tequeFrontendApp').directive('tqInputFocus', function () {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs) {
			element.bind('focus', function (e) {
				scope.$apply(function () {
					scope.$focused = true;
					scope.showUserMenuState = false;
					scope.showNotifications = false;
				}); 				
			})
		}
	}
});