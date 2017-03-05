const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: [
        // 'webpack/hot/dev-server',
        // 'webpack-dev-server/client?http://localhost:8080',
        './client/index.js'
    ],
    output: {
        path: path.resolve('dist'),
        // publicPath: 'http://localhost:3000/',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'client'),
                loaders: [ 'react-hot-loader', 'babel-loader' ],
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            }, {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ]
}