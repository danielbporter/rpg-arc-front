module.exports = {
  entry: './src/index.js',

  output: {
    path: './build',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: [/\.(js|jsx)$/], exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json/, loader: 'json-loader' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
