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

        function activate() {
            vm.test = 'plz work';
         }
    }

MainViewController.prototype.scan = function(){
//     var vm = this;

//     cordova.plugins.barcodeScanner.scan(
//       function (result) {
//           alert("We got a barcode\n" +
//                 "Result: " + result.text + "\n" +
//                 "Format: " + result.format + "\n" +
//                 "Cancelled: " + result.cancelled);
//       }, 
//       function (error) {
//           alert("Scanning failed: " + error);
//       }
//    );
}
})();
