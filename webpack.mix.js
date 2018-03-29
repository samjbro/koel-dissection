let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .copy('resources/assets/images', 'public/images')
    .webpackConfig(webpack => {
        return {
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, 'resources/assets/js'),
                    '#': path.resolve(__dirname, 'resources/assets/sass')
                }
            },
            // plugins: [
            //     new webpack.ProvidePlugin({
            //         KOEL_ENV: '"web"'
            //     })
            // ]
        }
    });
