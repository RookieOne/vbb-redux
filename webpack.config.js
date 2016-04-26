module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', __dirname + '/src', __dirname + '/test'],
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?cacheDirectory',
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=public/fonts/[name].[ext]',
      }, {
        test: /\.(jpg|png)$/,
        loader: 'file?name=public/images/[name].[hash].[ext]',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
