angular.module('ProjectControllers')
	.controller('stepCtrl', ['$scope', '$http','formData','Sequence', function($scope, $http, formData, Sequence) {
		$scope.step = $scope.step || 0;
		Sequence.setProjectType($scope.formData.projectType, $scope.formData.what);
		$scope.template = Sequence.getTemplate($scope.step);
	}]);