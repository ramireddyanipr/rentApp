// Controller of menu dashboard page.
appControllers.controller('menuDashboardCtrl', function ($scope,$mdMedia,$mdDialog,$mdToast, $mdBottomSheet) {

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    $scope.onezoneDatepicker = {
        date: new Date(2016, 1, 7), // MANDATORY                     
        mondayFirst: false,                
        months: months,
        callback: function(value){
            // your code

            console.log('callback called', value);
        }
    };
    $scope.onezoneDatepicker1 = {
        date: new Date(2016, 1, 7), // MANDATORY                     
        mondayFirst: false,                
        months: months,
        callback: function(value){
            // your code

            console.log('callback called', value);
        }
    };
    
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
            templateUrl: 'ui-list-bottom-sheet-template',
            targetEvent: $event,
            scope: $scope.$new(false),
        });
    };// End of showListBottomSheet.
    
    
    // getting the length of tenants
    var Tenant = Parse.Object.extend('Tenant');
    var tenant = new Parse.Query(Tenant);
    
    tenant.find().then(function (success) {
        $scope.tenantLength = success.length;
    });
    
    // for real estate owner
    var RealEstateOwner = Parse.Object.extend('RealEstateOwner');
    var owner = new Parse.Query(RealEstateOwner);
    
    owner.find().then(function (success) {
        $scope.ownerLength = success.length; 
    });
    
    
    // for properties
    var RealEstateProperties = Parse.Object.extend('RealEstateProperties');
    var properties = new Parse.Query(RealEstateProperties);
    
    properties.find().then(function (success) {
        $scope.propertyLength = success.length; 
    });

    /* filter modal start code */
    $scope.showAdvanced = function(ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
        $mdDialog.show({
            controller: FilterController,
            templateUrl: 'dialog1.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: useFullScreen
        })
        .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
            $scope.status = 'You cancelled the dialog.';
        });
    };

    /* filetr cancel code start */
    function FilterController($scope){
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }

});// End of controller menu dashboard.