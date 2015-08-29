angular.module('ProjectServices').
	factory('formData',['$location', function($location) {
		
		var formData = {};

		var validate = function() {
			if ($.isEmptyObject(formData)) {
				$location.path('/');
			}
		}

		publicApi = {
			get : function() {
				// validate();
				return formData;
			},
		};

		return publicApi;
	}]);