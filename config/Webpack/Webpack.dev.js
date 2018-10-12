/**
*
* Webpack Dev Config
* @author logan.wilquin@foxhub.fr (Wilquin Logan)
*
**/

const merge = require('webpack-merge');
const common = require('./Webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './../../dist/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
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
    ]
  },
});
