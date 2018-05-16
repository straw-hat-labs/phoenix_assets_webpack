/* eslint-disable import/no-extraneous-dependencies */

const path = require("path");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

const { JS_PATH } = require("./paths");
const common = require("./webpack.common");

module.exports = merge(common, {
  devtool: "source-map",
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: path.join(JS_PATH, "sw.js")
    })
  ]
});
