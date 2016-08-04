angular.module('tequeFrontendApp').directive('reportBug', function($document) {
	return {
		restrict: 'E',
		scope: {
			show: '=',
		},
		replace: true,
		link: function(scope, element, attrs) {
			scope.dialogStyle = {};
			scope.hideModal = function() {
				scope.show = false;
			};
			var body = $document.find('body').eq(0);
			body.append(element)
		},
		templateUrl: 'components/report/report_bug/report_bug.html',
		controller: function($scope, Reports) {

			$scope.reportFormError = false;

			$scope.report = function (form) {
				if (form.$invalid) {
					$scope.reportFormError = true;
				} else {
					$scope.reportFormError = false;
					Reports.reportBug(form.body).then(function(){
						$scope.hideModal();
					}, function(){
					})

				}
			}
		}
	};
});