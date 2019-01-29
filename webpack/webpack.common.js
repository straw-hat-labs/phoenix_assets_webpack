/* eslint-disable import/no-extraneous-dependencies */

const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const { OUTPUT_PATH, SOURCE_PATH } = require('./paths');
const config = require('../package');

module.exports = {
  target: 'web',

  entry: {
    polyfills: './src/polyfills.js',
    app: ['./src/index.js'],
  },

  output: {
    pathinfo: true,
    filename: 'js/[name].js', // "js/[name].[chunkhash:8].js"
    chunkFilename: 'js/[name].chunk.js', // "js/[name].[chunkhash:8].chunk.js"
    path: OUTPUT_PATH,
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: SOURCE_PATH,
        loader: 'babel-loader',
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
        },
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
          },
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new CleanWebpackPlugin([OUTPUT_PATH], {
      verbose: true,
      allowExternal: true,
    }),
    new Webpack.ProvidePlugin({
      jQuery: 'jquery',
    }),
    new Webpack.EnvironmentPlugin({
      APP_NAME: config.name,
      VERSION: config.version,
    }),
    new Dotenv({
      path: '../.env',
      safe: true,
      defaults: true,
    }),
    new CopyWebpackPlugin([
      {
        context: './static',
        from: '**/*',
        to: '.',
      },
    ]),
  ],
};
