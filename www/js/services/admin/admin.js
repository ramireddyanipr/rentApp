appServices.factory('dashBoard', function ($q, $timeout) {
    var dashBoard = function () {
        this.load = false;
        this.collectedPayment = [];
        this.duePayment = [];
        this.usersRegistered = [];
    }
    
    dashBoard.prototype.getCollectedPayment = function (user, sDate, eDate) {
        console.log('get payment collected');
        
        // body...
        var def = $q.defer()
        var result = [];

        var processCallback = function(res) {
            
            result = result.concat(res);
            if (res.length == 1000) {
              process(res[res.length-1].id);
              return;
            }
            //myAlert.show();
            def.resolve(result)
        }

        var process = function(skip) {
            
            var FuturePayments = Parse.Object.extend('FuturePayments');
            var query = new Parse.Query(FuturePayments);

            if (skip) {
                query.greaterThan("objectId", skip);
            }
            
            query.limit(1000); 
            // query.lessThan("dueDate", eDate);
            // query.greaterThan("dueDate", sDate);

            query.include('tenantPointer');
            query.include('tenantProperty')
            query.include('tenantProperty.property.owner')
            query.include('tenantProperty.property.managerPointer')
            query.include('tenant')

            query.ascending("objectId");
            query.find().then(function (res) { 
                console.log('res', res);
                processCallback(res) 
            }, function queryFailed(error) {
                console.log(error); 
                def.reject(error)
            });
        }
        process(false);
        
        this.load = true;
        return def.promise
    }; // end
    
    return dashBoard;
});

// for getting the user information
appServices.factory('currentUser', function ($q, $timeout) {
   var currentUser = function () {
       this.loggedUser = {};
       this.actionUser = {};
   };
   
   currentUser.prototype.getCurrentUser = function (id) {
       
       return Parse.user.current();
   };
   
   return currentUser;
});