angular.module('ProjectControllers').
	controller('summaryCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
		
		$scope.formData.csrfmiddlewaretoken = $('input[name=csrfmiddlewaretoken]').val();

		$scope.submit = function(){
			$scope.formData.file = document.getElementById('file').files[0];
			var formData = new FormData();
			for (var key in $scope.formData) {
				formData.append(key, $scope.formData[key]);
			}
			$http.post('/services/process-quote',formData, {headers: {'Content-Type': undefined}})
				.then(function() {
					$location.path('/5');
				});
		}
	}]);