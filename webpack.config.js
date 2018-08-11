"use strict";

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const poststylus = require('poststylus');
const rucksack = require('rucksack-css');
const stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader?minimize!stylus-loader");
const NODE_ENV = process.env.NODE_ENV || "development";

let config = [{
    name: 'styles',
    entry: {
        styles: "./public/styl/build.styl",
    },
    exclude: '/node_modules/',
    output: {
        path: './public/build/',
        filename: '[name].min.css'
    },
    module: {
       loaders: [
            {
                test: /\.styl$/,
                loader: stylusLoader
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg|otf)$/, 
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    stylus: {
      use: [
        poststylus(rucksack({
          autoprefixer: true
        }))
      ]
    },
    plugins: [
        new ExtractTextPlugin("[name].min.css")
    ]
}];


module.exports = config;