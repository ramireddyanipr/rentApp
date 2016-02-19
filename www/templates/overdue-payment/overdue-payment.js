
appControllers.controller('overduePaymentCtrl', function ($scope,$mdMedia,$mdDialog,$mdToast,                    $mdBottomSheet, $q, dashBoard, $timeout) {

    
    var dashboard = new dashBoard();
    $scope.load = dashboard.overDuePayment().then (function (success) {
        console.log(success);
        $scope.overDue = JSON.parse(JSON.stringify(success));
        
        $timeout (function () {$scope.load = false;}, 1000);
        
        console.log($scope.overDue);
    }, function (error) {
        console.log(error);
    });
    

});// End of controller menu dashboard.