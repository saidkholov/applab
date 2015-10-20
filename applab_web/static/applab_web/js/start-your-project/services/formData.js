angular.module('ProjectServices').
	factory('formData',['$location', function($location) {
		
		var formData = {};
		var validate = function() {
			if ($.isEmptyObject(formData)) {
				$location.path('/');
			}
		}
		var publicApi = {
			get : function() {
				validate();
				return formData;
			},
			set : function(data) {
				formData = data;
			}
		};
		return publicApi;
	}]);