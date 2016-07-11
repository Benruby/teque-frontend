angular.module('tequeFrontendApp').directive('report', function() {
  return {
    restrict: 'E',
    scope: {
      show: '=',
      itemId: '=',
      reported: '=',
      reportText: '=',
      showReportMessage: '&method'
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

      Reports.getReportOptions().then(function(response) {

        $scope.options = response.data;

      },function(response){
        console.log("ERROR getting options for report mopdal")
      })

      $scope.report = function (type, reason, validity) {
        if (validity) {
          Reports.postReport(type, $scope.itemId, reason).then(function(){
            console.log("reported successfully");
            $scope.changeItemText();
            $scope.hideModal();
          }, function(){
            console.log("ERROR reporting item");
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