module.exports = {
  entry: './src/index.js',

  output: {
<<<<<<< HEAD
    path: 'static/build/',
=======
    path: 'build/',
>>>>>>> master
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: [/\.(js|jsx)$/], exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json/, loader: 'json-loader' },
<<<<<<< HEAD
      { test: /\.css$/, loaders: ['style', 'css'] },
=======
      { test: /\.css$/, loaders: ['style', 'css', 'loader'] },
>>>>>>> master
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
    ],
  },

  devtool: '#inline-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.sass'],
  },
};
