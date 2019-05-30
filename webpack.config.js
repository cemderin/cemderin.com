const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {

    entry: [
        './src/js/index.js',
        './src/scss/index.scss'
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug'
        }),
        new SVGSpritemapPlugin('./src/svg/**/*.svg')
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
            }
        ],

    },
    devServer: {
        contentBase: './dist'
    }
};
