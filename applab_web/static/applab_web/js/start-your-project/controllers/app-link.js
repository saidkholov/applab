angular.module('ProjectControllers').
	controller('appLink', ['$scope','formData', function($scope, formData) {

		$scope.formData = formData.get();
	}]);