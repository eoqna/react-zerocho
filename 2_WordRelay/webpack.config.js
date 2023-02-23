const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
<<<<<<< HEAD
    extensions: ['.jsx', '.js']
=======
<<<<<<< HEAD
    extensions: ['.jsx', '.js']
=======
    extensions: ['.jsx', 'js']
>>>>>>> fcf628f958616a9be19d68fcde73b97036969842
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953
  },

  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'],
            },
<<<<<<< HEAD
            debug: true,
=======
<<<<<<< HEAD
            debug: true,
=======
>>>>>>> fcf628f958616a9be19d68fcde73b97036969842
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953
          }],
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
<<<<<<< HEAD
          'react-refresh/babel',
=======
<<<<<<< HEAD
          'react-refresh/babel',
=======
          'react-refresh-babel'
>>>>>>> fcf628f958616a9be19d68fcde73b97036969842
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953
        ]
      },
    }]
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/',
  },

  devServer: {
<<<<<<< HEAD
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
=======
<<<<<<< HEAD
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
=======
    publicPath: '/dist/',
>>>>>>> fcf628f958616a9be19d68fcde73b97036969842
>>>>>>> af98548fc62bee359853588990bbdb808e5d3953
    hot: true,
  },
}