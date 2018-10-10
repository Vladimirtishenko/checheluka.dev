/*const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './core.js',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'core.min.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
         test: /\.styl$/, 
         loader: ExtractTextPlugin.extract({ fallback: 'style-loader', 
              use: [
              'css-loader?minimize!',
              {
                  loader: 'postcss-loader',
                  options: {
                      plugins: function () {
                          return [autoprefixer()]
                      },
                      sourceMap: 'inline'
                  }
              },
              'stylus-loader'
              ]
          }) 
      },
      {
          test: /\.(png|woff|woff2|otf|eot|ttf|svg|jpg|jpeg)$/, 
          loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("core.min.css"),
  ],
  mode: 'production'
};*/

"use strict";

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const poststylus = require('poststylus');
const rucksack = require('rucksack-css');
const stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader?minimize!stylus-loader");
const NODE_ENV = process.env.NODE_ENV || "development";
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let config = [{
    name: 'js',
    entry: {
        app: './public/js/app.js'
    },
    output: {
        path: __dirname  + "/public/build/",
        filename: 'build.[name].js',
        publicPath: './public/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            }
        ]
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", "css", "styl", "woff", "ttf", "otf", "jpg", "png", "gif"]
    },
    plugins: [
        new UglifyJSPlugin()
    ]
}, {
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
                loader: 'file-loader?limit=100000'
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