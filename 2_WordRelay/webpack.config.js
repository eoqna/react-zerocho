const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
<<<<<<< HEAD
    extensions: ['.jsx', '.js']
=======
    extensions: ['.jsx', 'js']
>>>>>>> fcf628f958616a9be19d68fcde73b97036969842
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
>>>>>>> fcf628f958616a9be19d68fcde73b97036969842
          }],
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
<<<<<<< HEAD
          'react-refresh/babel',
=======
          'react-refresh-babel'
>>>>>>> fcf628f958616a9be19d68fcde73b97036969842
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
    publicPath: '/dist/',
>>>>>>> fcf628f958616a9be19d68fcde73b97036969842
    hot: true,
  },
}