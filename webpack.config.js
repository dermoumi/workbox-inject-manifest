const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ids: { HashedModuleIdsPlugin } } = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', './src'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html.ejs',
      chunks: ['app'],
      minify: false,
    }),
    new InjectManifest({
      swSrc: './src/sw.js',
    }),
  ],
};
