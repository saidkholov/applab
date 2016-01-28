angular.module('ProjectControllers')
	.controller('stepCtrl', ['$scope', '$http','$routeParams','$location',  'Sequence', function($scope, $http, $routeParams, $location, Sequence) {
		if (!$scope.formData.email) {
			// $location.path('/')
		}

		$scope.step = $routeParams.step || 0;
		Sequence.setProjectType($scope.formData.projectType, $scope.formData.what);
		$scope.template = Sequence.getTemplate($scope.step);
		$scope.step++;
	}]);
