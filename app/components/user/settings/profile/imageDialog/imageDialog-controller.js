'use strict';


angular.module('tequeFrontendApp').controller('ImageDialogCtrl', function ($state, $scope, Images, toastMessage) {

	$scope.myImage='';
	$scope.myCroppedImage='';

	var handleFileSelect=function(evt) {
		var file=evt.currentTarget.files[0];
		var reader = new FileReader();
		reader.onload = function (evt) {
			$scope.$apply(function($scope){
				$scope.myImage=evt.target.result;
			});
		};
		reader.readAsDataURL(file);
	};
	angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

	$scope.sendImage = function () {
		console.log("sending image");
		Images.PostUserImage($scope.myCroppedImage).then(function(){
			console.log("successful image send");
			$scope.hideModal();
			$state.reload();
			toastMessage.showToast('התמונה עודכנה בהצלחה');
		},function(){
			console.log("ERROR image send!");
		})
	}

	$scope.cancelImage = function () {
		$scope.hideModal();
		$scope.myImage = '';
		$scope.myCroppedImage = '';
	}
}); 
