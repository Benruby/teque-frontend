angular.module('tequeFrontendApp').directive('readMore', function () {
	return {
		template: '<p></p>',
		transclude: true,
		replace: true,
		scope: {
			limit: '@',
			content: '@'
		},

		link: function (scope, element, attrs, ctrl, transclude) {
			var limit = angular.isUndefined(scope.limit) ? 100 : scope.limit;
			var moreText = '<a class="read-more">...קרא עוד</a>';

			attrs.$observe('content', function(str) {
				readmore(str);
			});

			transclude(scope.$parent, function(clone, scope) {
				readmore(clone.text().trim());
			});



			function readmore(text) {
				var text = text;
				var orig = text;
				var charCount = text.length;
				var more = '';
				var markup = text;

				if (charCount > limit) {
					text = orig.slice (0, limit);
					more = orig.slice (limit, charCount);
					markup = text + moreText + '<span class="more-text">' + more + '</span>';
				}

				element.append(markup);
				element.find('.read-more').on('click', function() {
					$(this).hide();
					element.find('.more-text').addClass('show').slideDown();
				});

			}
		}
	};
})