angular.module('tequeFrontendApp').directive('report', function() {
  return {
    restrict: 'E',
    scope: {
      show: '=',
      itemId: '=',
      reported: '=',
      reportText: '=',
      showReportMessage: '&method',
      reportOptions: '=',
      reportType: '@'
    },
    replace: true,
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: 'components/report/report.html',
    controller: function($scope, Reports) {

      $scope.reportFormError = false;

      $scope.report = function (reason, validity) {
        if (validity) {
          Reports.postReport($scope.reportType, $scope.itemId, reason).then(function(){
            $scope.changeItemText();
            $scope.hideModal();
          }, function(){
          })
        } else {
          $scope.reportFormError = true;
        }
      }

      $scope.changeItemText = function () {
        $scope.reported = true;
        $scope.reportText = "מדווח";
        $scope.showReportMessage();
      }
    }
  };
});