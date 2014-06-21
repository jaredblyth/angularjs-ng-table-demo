'use strict';


/* Controllers */


var ejsApp = angular.module('ejsApp', ['ngTable']);

// Creates ejsApp.controller
ejsApp.controller('ejsListCtrl', function($scope, $http, $filter, ngTableParams) {
  
	//Hardcoded JSON data for testing purposes. Intention in end is for data to be requested via http
	//var data = [{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"sreed57","action":"search","details":"query { emailaddress is test1@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"nlinn8","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test2@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"sreed57","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"sreed57","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"sreed57","action":"search","details":"query { emailaddress is test1@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"nlinn8","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Mon, 19 May 2014 10:53:00 +1000","user":"sreed57","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"nlinn8","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"sreed57","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"nlinn8","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"sreed57","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"sreed57","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"nlinn8","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"auser1","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"sreed57","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"nlinn8","action":"search","details":"query { emailaddress is test@test.com}"},{"id":"123456789","sentDate":"Tue, 20 May 2014 10:53:00 +1000","user":"nlinn8","action":"search","details":"query { emailaddress is test@test.com}"}];
     
	// Gets a remote resource containing audit data in JSON format
	$http.get('angular/models/audit.json').success(function(data) {
	
	// Turns the remote resource data into the main data for ejsApp controller
	$scope.audit = data;
	
	// Creates an ng-table & parameters from remote resource data
	$scope.tableParams = new ngTableParams({
                page: 1,            // show first page
                count: 10,           // count per page
				sorting: {
                   // sentDate: 'asc'      initial sorting
                }
            }, {
                total: data.length, // length of data
				counts: [10, 25, 50, 100],
                getData: function($defer, params) {
					// use built angular filter
                    var orderedData = params.sorting() ?
                        $filter('orderBy')(data, params.orderBy()) :
                        data;
										
                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
			
            }); // End of creation of ng-table & parameters
	
	}); // End of Get request
	
}); // End of creation of ejsApp.controller
