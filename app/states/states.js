'use strict';

angular
.module('tequeFrontendApp').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'states/main/main.html',
    controller: 'MainCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'states/user/login/login.html',
    controller: 'LoginCtrl'
  })
  .state('logout', {
    url: '/logout',
    controller: 'LogoutCtrl'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: "states/user/settings/settings.html",
    controller: 'SettingsCtrl'
  })
  .state('show_question', {
    url: '/question/:question_id',
    templateUrl: "states/showQuestion/show.html",
    controller: 'ShowQuestionCtrl'
  })
  .state('404', {
    url: '*path',
    templateUrl: 'states/404/404.html'
  });
  $urlRouterProvider.otherwise('/login');
})

.run(['$rootScope', '$state', 'authToken', function ($rootScope, $state, authToken){
  $rootScope.$on('$stateChangeStart', function (event, toState) {

    authToken.isAuthenticated()
    .then(function(data){
    if (toState.name === 'login' && !data) { //user is NOT authenticated
    } 
      else if (toState.name !== 'login' && !data) { //user is NOT authenticated and want's to view pages.
        event.preventDefault();
      $state.go('login');
    } 
    else if (toState.name === 'login' && data) {
      event.preventDefault();
      $state.go('main');
    } else {
    }
  });
  })
}]);


// .run(['$rootScope', '$state', function ($rootScope, $state){
//   $rootScope.$on('$stateNotFound', function() {
//     $state.go('404');
//   });
// }]);