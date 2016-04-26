module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', __dirname + '/src', __dirname + '/test'],
  },
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ["style", "css" , "sass"] },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?cacheDirectory',
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
};
