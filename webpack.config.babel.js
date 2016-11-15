import path from 'path';
import webpack from 'webpack';

export default {
  entry: './src/client/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client-bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			'process.env.BING_SEARCH_API_KEY': JSON.stringify(process.env.BING_SEARCH_API_KEY),
		}),
  ],
  devServer: {
    contentBase: './dist/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
