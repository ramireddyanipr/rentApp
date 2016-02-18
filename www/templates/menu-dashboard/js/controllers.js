// Controller of menu dashboard page.
appControllers.controller('menuDashboardCtrl', function ($scope,$mdMedia,$mdDialog,$mdToast,                    $mdBottomSheet, $q, dashBoard) {


    //ShowToast for show toast when user press button.
    $scope.showToast = function (menuName) {
        //Calling $mdToast.show to show toast.
        $mdToast.show({
            controller: 'toastController',
            templateUrl: 'toast.html',
            hideDelay: 800,
            position: 'top',
            locals: {
                displayOption: {
                    title: 'Going to ' + menuName + " !!"
                }
            }
        });
    };// End showToast.


    // for showing modal from bottom
    // For show show List Bottom Sheet.
    $scope.showListBottomSheet = function ($event) {
        $mdBottomSheet.show({
            controller: collectedPaymentController,
            templateUrl: 'ui-list-bottom-sheet-template',
            targetEvent: $event,
            scope: $scope.$new(false),
        }).then (function () {
            console.log('---------- success ------------')
        });
    };// End of showListBottomSheet.
    
    
    // collected payment controller
    function collectedPaymentController ($scope, $timeout) {
        $timeout (function () {
            console.log($scope.userType)
            var dashboard = new dashBoard();
            $scope.cPayment = dashboard.getCollectedPayment($scope.userType, $scope.sDate.date,                                  $scope.eDate.date);
        }, 200);
    }; // end controller
    
    
    
    // getting the length of tenants
    var Tenant = Parse.Object.extend('Tenant');
    var tenant = new Parse.Query(Tenant);
    
    // for real estate owner
    var RealEstateOwner = Parse.Object.extend('RealEstateOwner');
    var owner = new Parse.Query(RealEstateOwner);    
    
    // for properties
    var RealEstateProperties = Parse.Object.extend('RealEstateProperties');
    var properties = new Parse.Query(RealEstateProperties);
    
    $q.all([
        tenant.find().then(function (success) {
            $scope.tenantLength = success.length;
        }),

        owner.find().then(function (success) {
            $scope.ownerLength = success.length; 
        }),

        properties.find().then(function (success) {
            $scope.propertyLength = success.length; 
        })
    ]);

});// End of controller menu dashboard.