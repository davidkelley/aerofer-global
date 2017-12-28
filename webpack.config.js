const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './lib/index.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
  plugins: [
    new UglifyJSPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
