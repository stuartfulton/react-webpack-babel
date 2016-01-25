module.exports = {
  entry: {
    home: './src/home.js'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  },
  //devtool: 'source-map'
};
