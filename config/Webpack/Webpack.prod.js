/**
*
* Webpack Prod Config
* @author logan.wilquin@foxhub.fr (Wilquin Logan)
*
**/

const merge = require('webpack-merge'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      common = require('./Webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
    {
    test: /\.(png|jpg|gif|ico|svg)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    },
    {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    },
    {
      test: /\.html$/i,
      loader: 'html-loader'
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },{
      test: /\.sass$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
        ]
    },{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }

    ]
  },
});
