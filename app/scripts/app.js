'use strict';

angular.module('tequeFrontendApp', [
	'config',
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngMaterial',
	'ngMessages',
	'ui.router',
	'monospaced.elastic',
	'infinite-scroll',
	'ngImgCrop',
	'ngCkeditor'
	])
.config(['$compileProvider', function ($compileProvider) {
	if (ENV.env == 'production') {
		$compileProvider.debugInfoEnabled(false);
	}
}]);