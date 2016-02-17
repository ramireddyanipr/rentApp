// Controller of menu dashboard page.
appControllers.controller('menuDashboardCtrl', function ($scope, $mdToast, $mdBottomSheet) {

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
});// End of controller menu dashboard.