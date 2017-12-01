const SriPlugin = require('webpack-subresource-integrity');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        chunkFilename: '[name].[chunkhash].js',
        crossOriginLoading: 'anonymous',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new SriPlugin({
            hashFuncNames: ['sha256', 'sha384'],
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
};