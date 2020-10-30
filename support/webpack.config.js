const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const name = require('./package.json').name;
console.log('package', name);

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${name}`,
    },
    devServer: {
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name: 'static/[name].[ext]',
                    publicPath:'//localhost:8080'
                }
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
        }),
        
    ]
}