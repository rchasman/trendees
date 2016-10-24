import path from 'path';

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
  devServer: {
    contentBase: './dist/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
