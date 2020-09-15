const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    target: 'node',
    entry: path.resolve('./index.js'),
    output: {
        path: path.resolve('./dist'),
        // path: path.resolve('dist'),
        filename: 'index.js',
        // filename: '[name].js',
        libraryTarget: 'commonjs2',
        // libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        // new webpack.IgnorePlugin(/^.*\/specs\//, /openapi\-helpers/),
        // new webpack.IgnorePlugin(/^.*\/docs\//, /openapi\-helpers/),

        new webpack.IgnorePlugin({
            resourceRegExp: /specs/,
            // contextRegExp: /src/
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /docs/,
            // contextRegExp: /src/
        })
    ],
}
