const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: "/dist/",
        filename: 'js/app.js'
    },
    devServer: {
        // protocol: 'http://',
        // host: 'www.cuijian.com',
        port: '3010'
    },
    module: {
        rules: [
            //react文件处理
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            //css文件处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            //scss文件处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader" // compiles Sass to CSS, using Node Sass by default
                    ]
                })
            },
            //图片的处理
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }]
            },
            //图标字体的处理
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }]
            }
        ],
    },
    plugins: [
        //处理html文件
        new HtmlWebpackPlugin({
            title: 'myReact',
            template: './src/index.html'
        }),
        //独立css文件
        new ExtractTextPlugin('css/[name].css'),
        //公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: 'js/base.js'
        }),
        // 清除dist文件
        //在npm run build的时候，会自动清除dist文件夹，并生成新的dist文件夹
        // new CleanWebpackPlugin(['dist']),
    ]
};