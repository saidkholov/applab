var ProjectControllers = angular.module('ProjectControllers', []);


ProjectControllers.controller('indexCtrl', ['$scope, $http', function($scope, $http) {
   
	$scope.submit = function() {
		$http.post('/product-type');
	};

}]);