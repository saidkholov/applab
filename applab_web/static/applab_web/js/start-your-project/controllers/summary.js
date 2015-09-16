angular.module('ProjectControllers').
	controller('summary', ['$scope', '$http', 'formData', function($scope, $http, formData) {
		
		$scope.formData = formData.get();
		$scope.formData.csrfmiddlewaretoken = $('input[name=csrfmiddlewaretoken]').val();

		$scope.submit = function(){
			$http.post('/services/process-quote',$scope.formData).then(function() {
				console.log('done')
			});
		}
	}]);