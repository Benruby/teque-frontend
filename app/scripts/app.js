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
.config(['$compileProvider', 'ENV', function ($compileProvider, ENV) {
	if (ENV.env == '!development') {
		$compileProvider.debugInfoEnabled(false);
	}
}]);