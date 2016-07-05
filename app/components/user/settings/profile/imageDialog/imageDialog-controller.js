'use strict';


angular.module('tequeFrontendApp').controller('ImageDialogCtrl', function ($scope, Images) {

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
		Images.PostUserImage($scope.myCroppedImage);
	}
}); 
