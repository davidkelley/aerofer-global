const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    global: './lib/index',
    palette: './lib/palette',
    spacings: './lib/spacings',
    typefaces: './lib/typefaces',
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    path: `${__dirname}/components`,
    filename: '[name]/index.js',
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
