(function() {
    'use strict';

    angular.module('ticketScanner', ['ui.router', 'ngResource', 'angular.filter',
        'ngCookies', 'ngAnimate', 'ngMaterial', 'angularMoment', 'ui.mask', 'ngStorage',
        'ngMessages'
    ])

    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$urlMatcherFactoryProvider", "$httpProvider", "$mdThemingProvider", function ($stateProvider, $urlRouterProvider, $locationProvider,
            $urlMatcherFactoryProvider, $httpProvider, $mdThemingProvider) {
            $urlMatcherFactoryProvider.strictMode(false);

            $locationProvider
                .html5Mode({
                    enabled: true,
                    requireBase: true
                });

            $stateProvider
                .state('main', {
                    controller: 'MainViewController',
                    controllerAs: 'vm',
                    url: '/',
                    templateUrl: '/ticketScanner/main.html'
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
        }])
})();

(function() {
'use strict';

angular
    .module('ticketScanner')
    .controller('MainViewController', MainViewController);

MainViewController.$inject = [];
function MainViewController() {
        var vm = this;

        activate();

        ////////////////

        function activate() { }
    }

MainViewController.prototype.scan = function(){
    var vm = this;

    cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
}
})();

(function () {
    'use strict';

    angular
        .module('ticketScanner')
        .service('ticketService', TicketService);

    TicketService.$inject = ['$http', '$q', '$state'];

    function AppointmentDataService($http, $q, $state) {
        var service = {
            ticketResult: {},
            scanTicket: scanTicket

        };

        return service;


        function scanTicket(barcode) {

            return $http.post('/api/admin/scanTicket',
                {
                    barcode: barcode
                })
                .then(function (response) {
                    console.log(response.data);
                    return response.data;
                });
        }

       
    }
})();