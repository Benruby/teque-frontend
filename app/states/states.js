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
    url: '/',
    templateUrl: 'states/user/login/login.html',
    controller: 'LoginCtrl'
  })
  .state('logout', {
    url: '/',
    controller: 'LogoutCtrl'
  })
  .state('404', {
    url: '*path',
    templateUrl: 'states/404/404.html'
  });
  $urlRouterProvider.otherwise('/');
})

.run(['$rootScope', '$state', 'authToken', function ($rootScope, $state, authToken){
  $rootScope.$on('$stateChangeStart', function (event, toState) {

    authToken.isAuthenticated()
    .then(function(data){
      console.log(data);
    if (toState.name === 'login' && !data) { //user is NOT authenticated
      console.log("redirected to Login, user isn't auth.")
    } 
      else if (toState.name !== 'login' && !data) { //user is NOT authenticated and want's to view pages.
        console.log('unauth user trying to see different pages');
      event.preventDefault();
      $state.go('login');
    } 
    else if (toState.name === 'login' && data) {
      event.preventDefault();
      $state.go('main');
      console.log('user already signed in, cant go to login');
    } else {
      console.log("state change is legit");
    }
  });
  })
}])


.run(['$rootScope', '$state', function ($rootScope, $state){
  $rootScope.$on('$stateNotFound', function() {
    $state.go('404');
  });
}]);