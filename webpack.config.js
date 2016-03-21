module.exports = {
  entry: './src/index.js',

  output: {
    path: 'static/build/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: [/\.(js|jsx)$/], exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json/, loader: 'json-loader' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
    ],
  },

  devtool: '#inline-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.sass'],
  },
};
