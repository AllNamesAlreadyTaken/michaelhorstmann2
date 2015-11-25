var app = angular.module('app', []);
	
	app.controller('appsCtrl', function($scope, $http) {
	    $http.get("http://10.1.10.29:3005/api_ServicePC.json").success( function (response) {
	      	$scope.apps = {"PCName": response.PCName};
	     });
	});
	