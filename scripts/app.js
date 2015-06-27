'use strict';

angular
  .module('myAppYoApp', [
    'ngRoute',
        'ui.bootstrap',
        'ngAutocomplete',
        'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/map', {
        templateUrl: 'views/input-map.html',
        controller: 'InputMapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
