'use strict';


angular.module('tequeFrontendApp')
.controller('ShowUserCtrl', function ($scope, $stateParams, Follow, authenticated) {

	$scope.authenticated = authenticated;

	Follow.getUser($stateParams.id).then(
		function(response){
			$scope.user = response.data; 
			console.log('Success');
		},
		function(response){
			console.log('Error');
		})

	$scope.follow = function (type, id) {
		if (!$scope.user.followed) {
			Follow.follow(type, id).then(
				function(response){
					$scope.user.followed = true;
					$scope.user.follower_count ++;
					console.log("success following")
				},
				function(response){
					console.log("error following")
				})
		}
		else {
			Follow.unfollow(type, id).then(
				function(response){
					$scope.user.followed = false;
					$scope.user.follower_count --;
					console.log("success unfollowing")
				},
				function(response){
					console.log("error unfollowing")
				})
		}
	}
}); 


