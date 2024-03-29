var mix = require('laravel-mix');

// Stopping at 95% emitting
// @see: https://github.com/JeffreyWay/laravel-mix/issues/1126
mix.setPublicPath('../../../');

// No Noise
// @see: https://laravel.com/docs/5.6/mix#notifications
mix.disableSuccessNotifications();

// Disable Process CSS Urls
// @see: https://laravel.com/docs/5.7/mix#working-with-stylesheets
mix.options({
	processCssUrls: false
});

mix.js('Resources/Public/Js/history.js', 'assets/js/modules/history.js');
mix.sass('Resources/Public/Sass/history.scss', 'assets/css/modules/history.css')
	.options({
		postCss: [
			require('postcss-cachebuster'),
			require('postcss-combine-duplicated-selectors')({
				removeDuplicatedProperties: true
			})
		]
	}
);

if(mix.inProduction() === true) {
	mix.minify(['../../../assets/js/modules/history.js']);
	mix.minify(['../../../assets/css/modules/history.css']);
}