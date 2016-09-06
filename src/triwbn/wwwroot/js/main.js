require.config({
	paths: {
		jquery: 'libs/jquery/jquery-3.1.0.min',
		underscore: 'libs/underscore/underscore-min',
		backbone: 'libs/backbone/backbone-min'
	}
});

require([
	'app',
], function (App) {
	var app = new App();
});