const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    devServer: {
        hot: true,
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /.css/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
        })
    ]
}