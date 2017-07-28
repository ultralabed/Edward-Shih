const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// All the vendor libs that only need to be update once
const VENDOR_LIBS = [
  'react', 'redux', 'react-redux', 'react-dom',
  'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    // add public path for url loader to find new path of build images
    // it will prepend build/{hashedimaged}.jpg to import big from 'assets/big.jpg'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        // Do not try to use babel on node_modules, not needed
        exclude: /node_modules/,
      },
      {
        // order is important, read from right to left
        // use: ['style-loader','css-loader'],
        // nasty way to use ExtractTextPlugin with webpack 1.0
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        // process only .css files
        test: /\.css$/,
      },
      {
        use: [
          // need to pass new config to url-loader(big or small files)
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
        // e? <- wether with e or not will do
        test: /\.(jpe?g|png|gif|svg)$/,
      },
    ],
  },
  plugins: [
    // Use of CommonsChunkPlugin.
    // pluck vendor from bundle.js and add to vendor entry point.
    // Use names to add manifest to deal with cache files
    // check out dist/index.html
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    // For generate script tag in index.html for all entry js
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    // Combine all css file to this style.css
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([{
        from: path.join(__dirname, './src/assets'),
    }]),
  ],
};
