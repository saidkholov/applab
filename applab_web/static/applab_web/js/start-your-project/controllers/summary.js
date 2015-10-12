angular.module('ProjectControllers').
	controller('summary', ['$scope', '$http', '$location', 'formData', function($scope, $http, $location, formData) {
		
		$scope.formData = formData.get();
		$scope.formData.csrfmiddlewaretoken = $('input[name=csrfmiddlewaretoken]').val();

		$scope.submit = function(){
			$scope.formData.file = document.getElementById('file').files[0];
			var formData = new FormData();
			for (var key in $scope.formData) {
				formData.append(key, $scope.formData[key]);
			}
			$http.post('/services/process-quote',formData, {headers: {'Content-Type': undefined}})
				.then(function() {
					$location.path('/thank-you')
				});
		}
	}]);