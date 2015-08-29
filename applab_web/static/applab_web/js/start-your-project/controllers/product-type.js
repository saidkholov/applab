angular.module('ProjectControllers').
	controller('productType', ['$scope', 'formData', function($scope, formData) {
		$scope.formData = formData.get();
	}]);