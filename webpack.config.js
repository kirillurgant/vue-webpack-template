const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  entry: path.join(PATHS.src, 'index.js'),
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: 'dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    ]
  },
  devServer: {
    port: 3000,
  },
};