angular.module('ProjectServices').
	factory('Sequence', function Sequence() {
		var templates = [];

		var newApp = function() {
			templates = ['index', 'product-type', 'features','summary', 'thank-you'];
		};

		var overhaulApp = function() {
			templates = ['index', 'product-type', 'summary', 'app-link','thank-you'];
		};

		var publicApi = {
			setProjectType: function(type, what) {
				if (type === 'new' && what === 'app' ) {
					newApp(); 
				} else if(type === 'overhaul' && what === 'app' ) {
					overhaulApp();
				}
			},
			getTemplate : function(step) {
				return '/static/applab_web/js/start-your-project/templates/' + templates[step] + '.html';
			}
		};
		return publicApi;
	});