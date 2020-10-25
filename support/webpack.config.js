const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const packageName = require('./package.json').name;
console.log('package', packageName);

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'support.js',
        library: 'support',
        libraryTarget: 'umd',
        // libraryExport: 'default',
        // chunkLoading:'jsonp',
        // crossOriginLoading:true
    },
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true,
        // hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    // module: {
    //     rules: [
    //         {
    //             test: /.(js|jsx)/,
    //             exclude: /node_modules/,
    //             loader: 'babel-loader'
    //         },
    //         {
    //             test: /\.less/,
    //             use: ['style-loader', 'css-loader', 'less-loader'],
    //         },
    //         {
    //             test: /.css/,
    //             use: ['style-loader', 'css-loader'],
    //         }
    //     ]
    // },
    plugins: [
        // new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
        })
    ]
}