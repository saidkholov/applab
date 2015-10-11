angular.module('ProjectControllers').
	controller('summary', ['$scope', '$http', 'formData', function($scope, $http, formData) {
		
		$scope.formData = formData.get();
		$scope.formData.csrfmiddlewaretoken = $('input[name=csrfmiddlewaretoken]').val();

		console.log($scope.formData)
		$scope.submit = function(){
			$scope.formData.file = document.getElementById('file').files[0];
			var formData = new FormData();
			for (var key in $scope.formData) {
				formData.append(key, $scope.formData[key]);
			}
			$http.post('/services/process-quote',formData, {headers: {'Content-Type': undefined}})
				.then(function() {
					console.log('done');
				});
		}
	}]);