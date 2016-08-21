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