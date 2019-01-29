/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

const { SOURCE_PATH } = require('./paths');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new InjectManifest({
      swDest: 'service-worker.js',
      swSrc: path.join(SOURCE_PATH, 'service-worker/config.js'),
    }),
  ],
});
