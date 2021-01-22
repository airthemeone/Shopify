const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 */

mix.sass('resources/scss/app.scss', 'assets')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    });

mix.sass('resources/scss/glide.scss', 'assets')

mix.js('resources/js/app.js', 'assets')
    .webpackConfig({
        output: {
            chunkFilename: 'assets/async.[name].[chunkhash:5].js',
        }
    });

mix.js('resources/js/lazysizes.js', 'assets');
mix.js('resources/js/addresses.js', 'assets');