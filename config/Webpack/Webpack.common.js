/**
*
* Webpack Common Config
* @author logan.wilquin@foxhub.fr (Wilquin Logan)
*
**/

const path = require('path'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname,'./../../dist')]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'./../../src/client/index.html'),
      favicon: path.resolve(__dirname,'./../../src/client/img/favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './../../dist')
  },
};
