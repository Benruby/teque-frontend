angular.module('tequeFrontendApp').directive('mobileFooter', function () {
	return {
		restrict: 'E',
		templateUrl: "components/questions/mobileTemplate/mobileFooter/mobile-footer.html",
		replace: true,
		link: function(scope, element, attrs) {
			scope.dialogStyle = {};
			scope.hideModal = function() {
				scope.show = false;
			};
		},
		controller: function($scope, Reports) {

		}
	};

})