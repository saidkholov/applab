angular.module('ProjectControllers')
	.controller('thankYouCtrl', ['$scope', '$http','formData', function($scope, $http, formData) {
		
		$scope.formData = formData.get();

	}]);