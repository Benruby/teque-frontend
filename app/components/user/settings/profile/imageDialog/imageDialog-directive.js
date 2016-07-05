angular.module('tequeFrontendApp').directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    controller: 'ImageDialogCtrl',
    replace: true,
    transclude: true,
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: 'components/user/settings/profile/imageDialog/imageDialog.html'
  };
});