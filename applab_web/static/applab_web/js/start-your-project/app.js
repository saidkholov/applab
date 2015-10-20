angular.module('ProjectControllers', []);
angular.module('ProjectServices', []);

var startYourProject = angular.module('startYourProject', ['ngRoute','ProjectControllers', 'ProjectServices']);



startYourProject.config(['$routeProvider', '$httpProvider','SequenceProvider',
	function($routeProvider, $httpProvider, SequenceProvider) {
		
		$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
		$httpProvider.defaults.xsrfCookieName = 'csrftoken';
		
		var templatePath = '/static/applab_web/js/start-your-project/views/'

		$routeProvider.
			when('/', {
				templateUrl: templatePath + 'step.html',
				controller: 'stepCtrl'
			})
			.when('/:step', {
				templateUrl: templatePath + 'step.html',
				controller: 'stepCtrl'
			})
			// .when('/step-two', {
			// 	templateUrl: templatePath + 'step-two.html',
			// 	controller: 'stepTwoCtrl'
			// }).
			// when('/step-three', {
			// 	templateUrl: templatePath + 'step-three.html',
			// 	controller: 'stepThreeCtrl'
			// }).when('/step-four', {
			// 	templateUrl: templatePath + 'step-four.html',
			// 	controller: 'stepFourCtrl'
			// })
			.when('/thank-you', {
				templateUrl: templatePath + 'thank-you.html',
				controller: 'thankYou'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);	