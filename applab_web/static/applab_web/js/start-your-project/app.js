var startYourProject = angular.module('startYourProject', ['ngRoute','ProjectControllers']);

startYourProject.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: '/static/applab_web/js/start-your-project/views/index.html',
				controller: 'indexCtrl'
			}).
			when('/product-type', {
				templateUrl: '/static/applab_web/js/start-your-project/views/product-type.html',
			}).
			when('/app-link', {
				templateUrl: '/static/applab_web/js/start-your-project/views/app-link.html',
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);	