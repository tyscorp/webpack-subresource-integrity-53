const SriPlugin = require('webpack-subresource-integrity');
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
        new webpack.NamedChunksPlugin(),
        new SriPlugin({
            hashFuncNames: ['sha256', 'sha384'],
        })
    ],
};