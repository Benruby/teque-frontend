'use strict';

angular
.module('tequeFrontendApp').config(function ($stateProvider, $urlRouterProvider, $locationProvider, ENV) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'states/main/main.html',
    controller: 'MainCtrl',
    resolve: {
      authenticated: function(authToken, $state) {
        return authToken.isAuthenticated().then(
          function(response){
            if (!response) { $state.go('login') }
              return response;
          })
      }
    }
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
    controller: 'SettingsCtrl',
    resolve: {
      authenticated: function(authToken) {
        return authToken.isAuthenticated();
      }
    }
  })
  .state('content', {
    url: '/content',
    templateUrl: "states/user/content/content.html",
    controller: 'ContentCtrl',
    resolve: {
      authenticated: function(authToken) {
        return authToken.isAuthenticated();
      }
    }
  })
  .state('show_question', {
    url: '/question/:question_id?answer_id',
    templateUrl: "states/showQuestion/show.html",
    controller: 'ShowQuestionCtrl',
    resolve: {
      authenticated: function(authToken) {
        return authToken.isAuthenticated();
      }
    }
  })
  .state('profile', {
    url: '/profile/:id',
    templateUrl: "states/user/show/show_user.html",
    controller: 'ShowUserCtrl',
    resolve: {
      authenticated: function(authToken) {
        return authToken.isAuthenticated();
      }
    }
  })
  .state('404', {
    url: '*path',
    templateUrl: 'states/404/404.html'
  });
  $urlRouterProvider.otherwise('/');

  if(ENV.env != 'development')  {
    $locationProvider.html5Mode(true);
  }

})

.run(['$rootScope', '$state', 'authToken', function ($rootScope, $state, authToken){
  $rootScope.$on('$stateChangeStart', function (event, toState) {

   if (toState.name === 'show_question') { 
    console.log("showing question")
    return;
  } else {

    authToken.isAuthenticated()
    .then(function(data){
    if (toState.name === 'login' && !data) { //user is NOT authenticated
      return; 
    } 
      else if (toState.name !== 'login' &&  toState.name !== 'show_question' &&  toState.name !== 'profile' && !data) { //user is NOT authenticated and want's to view pages.
        event.preventDefault();
      return $state.go('login');
    } 
    else if (toState.name === 'login' && data) {
      event.preventDefault();
      return $state.go('main');
    } else {
    }
  },
  function(){
    console.log("NO auth from server")
    $state.go('login');
  }
  );
  }
})
}])



.run(['$rootScope', '$state', function ($rootScope, $state){
  $rootScope.$on('$stateNotFound', function() {
    $state.go('404');
  });
}]);