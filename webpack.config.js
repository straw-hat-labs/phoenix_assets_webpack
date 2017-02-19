const path = require('path')
const Webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require('./package')

const ENV = process.env.NODE_ENV || 'development'
const OUTPUT_PATH = path.resolve(__dirname, '..', 'priv', 'static')

const ExtractCSS = new ExtractTextPlugin({
  filename: 'css/[name].css'
})

module.exports = function(env = {}) {
  return {
    target: 'web',
    entry: {
      app: [
        // Set up an ES6-ish environment
        // 'babel-polyfill',
        './src/index.js'
      ]
    },

    output: {
      filename: 'js/[name].js',
      path: OUTPUT_PATH
    },

    module: {
      rules:[{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },{
        test: /\.css$/,
        loader: ExtractCSS.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader'
          }],
          fallback: 'style-loader'
        })
      },{
        test: /\.scss$/,
        loader: ExtractCSS.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader'
          },{
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      }]
    },

    plugins: [
      ExtractCSS,
      new Webpack.DefinePlugin({
        APP_NAME: JSON.stringify(config.app_name),
        VERSION: JSON.stringify(config.version),
        ENV: JSON.stringify(ENV)
      }),
      new CopyWebpackPlugin([{
        context: './static',
        from: '**/*',
        to: '.'
      }])
    ]
  }
}
