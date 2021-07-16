const path = require('path')
const webpack = require('webpack')

const CURRENT_WORKING_DIRECTORY = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIRECTORY, '/dist')
    ],

    output: {
        path: path.join(CURRENT_WORKING_DIRECTORY, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node/modules / ,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    }
}



module.exports = config