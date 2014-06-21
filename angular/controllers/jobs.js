'use strict';


/* Controllers */


var ejsApp = angular.module('ejsApp', []);

// Creates ejsApp.controller
ejsApp.controller('ejsListCtrl', function($scope, $http) {

	//Hardcoded JSON data for testing purposes. Intention in end is for data to be requested via http
	//$scope.jobs = [{"id":"123456789","name":"auser export","description":"Export of auser emails from 2013","owner":"tuser2","start":"Mon, 19 May 2014 10:57:00 +1000","end":"","status":"running"},{"id":"123456789","name":"astud4 export","description":"Exporting astud4's february emails","owner":"tuser2","start":"Mon, 19 May 2014 10:53:00 +1000","end":"Mon, 19 May 2014 11:51:00 +1000","status":"completed"},{"id":"123456789","name":"auser bullying","description":"Cyber bullying of auser","owner":"tuser2","start":"Tue, 20 May 2014 10:53:00 +1000","end":"","status":"running"},{"id":"123456789","name":"astud4 harrassment","description":"Searching for harassment of astud4","owner":"tuser2","start":"Tue, 20 May 2014 10:53:00 +1000","end":"Tue, 20 May 2014 10:59:00 +1000","status":"stopped"}];
 
	// Gets a remote resource containing jobs data in JSON format
	$http.get('angular/models/jobs.json').success(function(data) {
	$scope.jobs = data;

	}); // End of Get request


	$scope.orderProp = 'start'; // Sets initial order of data
	
}); // End of creation of ejsApp.controller
