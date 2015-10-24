angular.module('ProjectControllers', []);
angular.module('ProjectServices', []);
angular.module('ProjectDirectives', []);

var startYourProject = angular.module('startYourProject', ['ngRoute','ProjectControllers', 'ProjectServices', 'ProjectDirectives']);



startYourProject.config(['$routeProvider', '$httpProvider',
	function($routeProvider, $httpProvider) {
		
		$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
		$httpProvider.defaults.xsrfCookieName = 'csrftoken';
		
		var templatePath = '/static/applab_web/js/start-your-project/templates/';

		$routeProvider.
			when('/', {
				templateUrl: templatePath + 'step.html',
				controller: 'stepCtrl'
			})
			.when('/:step', {
				templateUrl: templatePath + 'step.html',
				controller: 'stepCtrl'
			})
			.when('/thank-you', {
				templateUrl: templatePath + 'thank-you.html',
				controller: 'thankYou'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);	