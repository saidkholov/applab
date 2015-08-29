angular.module('ProjectControllers')
	.controller('indexCtrl', ['$scope', '$http','formData', function($scope, $http, formData) {
		
		$scope.formData = formData.get();

	}]);