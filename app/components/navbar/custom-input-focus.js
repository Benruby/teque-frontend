angular.module('tequeFrontendApp').directive('tqInputFocus', function () {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs) {
			scope.$focused = false;
			element.bind('focus', function (e) {
				scope.$apply(function () {
					scope.$focused = true;
				}); 				
			}).bind('blur', function (e) {
				scope.$apply(function () {
					scope.$focused = false;
				});

			})
		}
	}
});