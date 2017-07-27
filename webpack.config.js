var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// All the vendor libs that only need to be update once
const VENDOR_LIBS = [
  'react', 'lodash', 'redux', 'react-redux', 'react-dom',
  'faker', 'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
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
        use: ['style-loader', 'css-loader'],
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
  ],
};
