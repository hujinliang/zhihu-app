/**
 * Created by jialao on 2016/6/28.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:'./app/index.js',
    output:{
        path:path.join(__dirname,'public/'),
        filename:'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            }
        ]
    }
}