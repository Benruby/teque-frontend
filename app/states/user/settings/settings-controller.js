'use strict';


angular.module('tequeFrontendApp').controller('SettingsCtrl', function ($scope, PasswordReset, Settings, $mdMedia, $mdDialog) {

	$scope.state = 'profile';
	$scope.editName = false;
	$scope.editDescription = false;
	$scope.editPassword = false;
	$scope.checkedPassword;
	$scope.passwordError = false;
	$scope.password_confirmation = true;


	Settings.get().$promise.then(function(response) {
		$scope.user = response;
		$scope.user.description = $scope.user.description || "הוסף תיאור";
		$scope.userData = $scope.user;
		$scope.user.new_name = $scope.user.full_name;
		$scope.user.new_description = $scope.user.description;
		

	})

	$scope.changeState = function(state) {
		$scope.state = state;
	}


	$scope.editUserName = function () {
		$scope.editName = !$scope.editName;
	}

	$scope.editUserDescription = function () {
		$scope.editDescription = !$scope.editDescription;
	}

	
	$scope.sendUserName = function () {
		$scope.userData.full_name = $scope.user.new_name;
		Settings.update($scope.userData);
		$scope.editUserName();
	}

	$scope.sendUserPassword = function () {
		if (check_password_validity()) {
			$scope.userData.new_password = $scope.user.newPassword;
			PasswordReset.updatePassword($scope.userData);
			$scope.editPassword = false;
		}
	}

	var check_password_validity = function () {
		if (passwordForm.password =! passwordForm.password_conf) {
			$scope.password_confirmation = false;
			return false;
		} else {
			$scope.password_confirmation = true;
			return true;
		}
	}

	$scope.sendUserDescription = function () {
		$scope.userData.description = $scope.user.new_description;
		Settings.update($scope.userData);
		$scope.editUserDescription();
	}

	$scope.showAdvanced = function(ev) {
		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
		$mdDialog.show({
			controller: 'PasswordDialogCtrl',
			templateUrl: "components/user/settings/account/passwordDialog/dialog-template.html",
			parent: angular.element(document.body),
			targetEvent: ev,
			skipHide: true,
			locals: {parent: $scope},
			bindToController: true,
			clickOutsideToClose:true,
			fullscreen: useFullScreen
		})
		.then(function(answer) {
			$scope.editPassword = true;
			console.log("this is from settings controller success")
		}, function(error) {
			console.log("reject of the setting controller")
			console.log(error);
		});
		// $scope.$watch(function() {
		// 	return $mdMedia('xs') || $mdMedia('sm');
		// }, function(wantsFullScreen) {
		// 	$scope.customFullscreen = (wantsFullScreen === true);
		// });
	};

}); 


