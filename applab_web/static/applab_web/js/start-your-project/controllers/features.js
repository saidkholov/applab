angular.module('ProjectControllers')
	.controller('featuresCtrl', ['$scope', 'Sequence', function($scope, Sequence) {
		$scope.price = 1000;

		$scope.formData.customBudget = false;

		$scope.toggleBudget = function(bool) {
			$scope.formData.customBudget = bool;
		};

		// Prices
		$scope.formData.features = {
			login: {
				state: false,
				price: 500
			},
			rating: {
				state: false,
				price: 1000
			},
			sharing: {
				state: false,
				price: 1400
			},
			social: {
				state: false,
				price: 800
			},
			search: {
				state: false,
				price: 700
			},
			payments: {
				state: false,
				price: 2000
			},
			profiles: {
				state: false,
				price: 2100
			},
			location: {
				state: false,
				price: 1100
			},
			api: {
				state: false,
				price: 1500
			},
		};

	}]);
