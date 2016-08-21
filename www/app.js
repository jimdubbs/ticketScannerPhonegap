(function() {
    'use strict';

    angular.module('ticketScanner', ['ui.router', 'ngResource', 'angular.filter',
        'ngCookies', 'ngAnimate', 'ngMaterial', 'angularMoment', 'ui.mask', 'ngStorage',
        'ngMessages'
    ])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider,
            $urlMatcherFactoryProvider, $httpProvider, $mdThemingProvider) {
            $urlMatcherFactoryProvider.strictMode(false);

            $locationProvider
                .html5Mode({
                    enabled: false,
                    requireBase: true
                });

            $stateProvider
                .state('main', {
                    controller: 'MainViewController',
                    controllerAs: 'vm',
                    url: '/',
                    templateUrl: 'ticketScanner/main.html'
                });

            // $httpProvider.interceptors.push('httpInterceptor');

            $mdThemingProvider.theme('default')
                .primaryPalette('red', {
                    'default': '700',
                    'hue-1': '800'
                })
                .accentPalette('purple', {
                    'default': '600'
                })
                .backgroundPalette('grey');
        })
})();
