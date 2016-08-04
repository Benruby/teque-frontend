'use strict';


angular.module('tequeFrontendApp').factory('Contact', function($http, ENV) {
	

	return {

		options:  {
			option1: {title:"אני צריך עזרה עם החשבון שלי"},
			option2: {title:"פנייה בנושא פרטיות ואבטחה"},
			option3: {title:"אני רוצה לפרסם ב-Teque"},
			option4: {title:"פידבק כללי"},
			option5: {title:"דווח על באג"}
		},

		contact: function(data) {
			console.log(data)
			return $http.post(ENV.apiEndpoint + '/api/contacts', 
			{ 
				contact:
				{
					reason: data.reason.title,
					body: data.details
				}
			})
		}

	} 
});