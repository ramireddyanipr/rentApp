// Controller of menu dashboard page.
appControllers.controller('collectPaymentCtrl', function ($scope,$mdMedia,$mdDialog,$mdToast,                    $mdBottomSheet, $q, dashBoard) {

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    $scope.sDate = {
        date: new Date(2016, 1, 7), // MANDATORY                     
        mondayFirst: false,                
        months: months,
        callback: function(value){
            // your code

            console.log('callback called', value);
        }
    };
    $scope.eDate = {
        date: new Date(2016, 1, 7), // MANDATORY                     
        mondayFirst: false,                
        months: months,
        callback: function(value){
            // your code

            console.log('callback called', value);
        }
    };

});// End of controller menu dashboard.