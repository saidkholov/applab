angular.module('ProjectDirectives')
	.directive('customswitch', function() {
		return {
			restrict: 'E',
			templateUrl: '/static/applab_web/js/start-your-project/templates/switch.html',
			scope: {
				feature: '=',
				price: '='
			},
			link : function(scope, elem, attrs) {
				elem.find('a').click(function(e) {
					e.preventDefault();
					scope.feature.state = !scope.feature.state;
					if (scope.feature.state) {
						scope.price += scope.feature.price;
					} else {
						scope.price -= scope.feature.price;
					}
					scope.$apply();
				});
			}
		}
	});
