angular.module('tequeFrontendApp').directive('notifications', function(Questions, Settings, Notifications) {
	return {
		restrict: 'E',
		templateUrl: "components/notifications/notifications.html",
		scope: {
			notifications: "="
		},
		controller: function ($scope, $state) {

			for (var i = 0; i < $scope.notifications.length; i++) {
				var obj = $scope.notifications[i];
				if (obj.notifiable_type == "Answer") {
					obj.question = Questions.allQuestions.get({id: obj.notifiable.question_id});
					obj.user = Settings.get({id: obj.notifiable.user_id});
					obj.question_id = obj.notifiable.question_id;
				} else {
					obj.user = Settings.get({id: obj.notifiable.user_id});
					obj.question_id = obj.notifiable.id;
				}
			}

			$scope.seen = function (id) {
				Notifications.markSeen(id);
			}
		}
	};
});