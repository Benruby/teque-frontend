'use strict';


angular.module('tequeFrontendApp').factory('Comments', function($resource, $http, ENV) {
	
	return  {

		comment: function (commentable_type, itemId, body) {
			var comment = $http.post('/api/item_comments', {
				item_comment: {
					commentable_type: commentable_type,
					item_id: itemId,
					body: body
				}
			})
			return comment;
		}
	}

	
});