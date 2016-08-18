'use strict';

angular.module('config', [])

.constant('ENV', {
  apiEndpoint: 'http://localhost:9000',
  env: 'development'
  // apiEndpoint: 'https://teque-staging.herokuapp.com',
  // env: 'staging'
  // apiEndpoint: 'https://teque.herokuapp.com',
  // env: 'production'
});