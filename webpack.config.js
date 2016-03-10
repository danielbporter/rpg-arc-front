module.exports = {
  entry: './src/index.js',

  output: {
    path: '../static/build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: [/\.(js|jsx)$/], exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json/, loader: 'json-loader' },
       { test: /\.css$/, loader: "style-loader!css-loader" },
      {test: /\.scss$/, loaders: ["style", "css", "sass"]}
    ]
  },

  devtool: '#inline-source-map',

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
};
