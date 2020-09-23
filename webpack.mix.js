const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const del = require('del');

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

del(['assets/async*.js']);
mix.js('resources/js/app.js', 'assets')
    .webpackConfig({
        output: {
            chunkFilename: 'assets/async.[name].[chunkhash:5].js',
        }
    });

mix.js('resources/js/lazysizes.js', 'assets');