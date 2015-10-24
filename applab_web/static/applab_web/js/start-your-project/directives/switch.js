angular.module('ProjectDirectives')
	.directive('customswitch', function() {
		return {
			restrict: 'E',
			templateUrl : '/static/applab_web/js/start-your-project/templates/switch.html',
			link : function(scope, elem, attrs) {
				elem.find('a').click(function(e) {
					e.preventDefault();
					$(this).toggleClass('active');
				});
			}
		}
	});