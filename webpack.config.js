var webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/components/Main.js',
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: 'public/dist',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      }
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ]
};
