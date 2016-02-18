// Controller of menu dashboard page.
appControllers.controller('menuDashboardCtrl', function ($scope,$mdMedia,$mdDialog,$mdToast,                    $mdBottomSheet, $q) {    
    
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