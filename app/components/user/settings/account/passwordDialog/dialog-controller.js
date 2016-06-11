'use strict';

angular.module('tequeFrontendApp')
.controller('PasswordDialogCtrl', function ($scope, $mdDialog,  $mdMedia, authToken, $timeout) {
	
	$scope.status = '  ';
	$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');



	$scope.hide = function() {
		$mdDialog.hide();
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.answer = function(answer) {
		$scope.checkPassword(answer).then(function(){
			console.log("answer seccess");
			$mdDialog.hide();
		},function(response){
			console.log("answer FAILED")
			$scope.passwordError = true;
			return response;
			
		})
	};

	$scope.checkPassword = function (password) {
		return authToken.checkPassword(password);
	}

});
