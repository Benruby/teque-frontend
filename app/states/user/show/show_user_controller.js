'use strict';


angular.module('tequeFrontendApp')
.controller('ShowUserCtrl', function ($scope, $stateParams, Follow, authenticated) {

	$scope.authenticated = authenticated;

	Follow.getUser($stateParams.id).then(
		function(response){
			$scope.user = response.data; 
		},
		function(response){
		})

	$scope.follow = function (type, id) {
		if (!$scope.user.followed) {
			Follow.follow(type, id).then(
				function(response){
					$scope.user.followed = true;
					$scope.user.follower_count ++;
				},
				function(response){
				})
		}
		else {
			Follow.unfollow(type, id).then(
				function(response){
					$scope.user.followed = false;
					$scope.user.follower_count --;
				},
				function(response){
				})
		}
	}
}); 


