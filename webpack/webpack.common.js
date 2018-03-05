/* eslint-disable import/no-extraneous-dependencies */

const Webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const { OUTPUT_PATH, SOURCE_PATH } = require("./paths");
const config = require("../package");

const ExtractCSS = new ExtractTextPlugin({
  filename: "css/[name].css"
});

module.exports = {
  target: "web",

  entry: {
    polyfills: "./src/polyfills.js",
    app: ["./src/index.js"]
  },

  output: {
    filename: "js/[name].js",
    path: OUTPUT_PATH
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        include: SOURCE_PATH,
        loader: "babel-loader"
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractCSS.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader"
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["url-loader"]
      }
    ]
  },

  plugins: [
    ExtractCSS,
    new CleanWebpackPlugin([OUTPUT_PATH]),
    new Webpack.ProvidePlugin({
      jQuery: "jquery",
      Tether: "tether"
    }),
    new Webpack.EnvironmentPlugin({
      APP_NAME: config.name,
      VERSION: config.version
    }),
    new Dotenv({
      path: "../.env",
      safe: true
    }),
    new CopyWebpackPlugin([
      {
        context: "./static",
        from: "**/*",
        to: "."
      },
      {
        context: "./node_modules/font-awesome/fonts",
        from: "*",
        to: "./fonts"
      }
    ])
  ]
};
