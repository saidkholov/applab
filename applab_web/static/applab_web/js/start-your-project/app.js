angular.module('ProjectControllers', []);
angular.module('ProjectServices', []);

var startYourProject = angular.module('startYourProject', ['ngRoute','ProjectControllers', 'ProjectServices']);

startYourProject.config(['$routeProvider', '$httpProvider',
	function($routeProvider, $httpProvider) {
		
		$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
		$httpProvider.defaults.xsrfCookieName = 'csrftoken';
		
		$routeProvider.
			when('/', {
				templateUrl: '/static/applab_web/js/start-your-project/views/index.html',
				controller: 'indexCtrl'
			}).
			when('/product-type', {
				templateUrl: '/static/applab_web/js/start-your-project/views/product-type.html',
				controller: 'productType'
			}).
			when('/app-link', {
				templateUrl: '/static/applab_web/js/start-your-project/views/app-link.html',
				controller: 'appLink'

			}).when('/summary', {
				templateUrl: '/static/applab_web/js/start-your-project/views/summary.html',
				controller: 'summary'
			}).when('/thank-you', {
				templateUrl: '/static/applab_web/js/start-your-project/views/thank-you.html',
				controller: 'thankYou'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);	