'use strict';

angular.module('tequeFrontendApp').controller('ContactCtrl', function ($scope, authenticated, Contact, $timeout, $state) {


	$scope.authenticated = authenticated;

	$scope.options = Contact.options;
	$scope.showMessage = false;

	$scope.contact = function (form) {
		if(form.$invalid) {

		} else {
			Contact.contact(form).then(
				function(response){
					$scope.showMessage = true;
					$scope.contactForm.details = "";
					$scope.contactForm.reason = "";
					$timeout(function() {
						$scope.showMessage = false;
						$state.go('main');

					},5000)

				},
				function(response){
					console.log("ERROR SENDINF CONTACT")
				})
		}

	}


});
