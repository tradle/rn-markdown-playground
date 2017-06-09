const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, '../index.web.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?cacheDirectory=true'
        ]
      },
      {
        // Most react-native libraries include uncompiled ES6 JS.
        test: /\.js$/,
        include: /node_modules\/(?:react-native-|rn-markdown)/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  output: {
    filename: 'dist/bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
};
