const path = require('path')
const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const EXT_NAME = 'webshot'

module.exports = {
  entry: {
    // Each entry in here would declare a file that needs to be transpiled
    // and included in the extension source.

    // background scripts
    background: './extension/src/background/background.js',

    // content scripts
    content: './extension/src/content_scripts/content.js',

    // user facing pages
    popup: './extension/src/popup/index.js'

  },
  output: {
    // This copies each source entry into the extension dist folder named
    // after its entry config key.
    path: path.resolve(__dirname, 'extension/dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        // Babel transpilation
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader',
          options: { name: '[name].[hash].js' }
        }
      },
      {
        // properly load font files
        // https://github.com/webpack-contrib/css-loader/issues/38#issuecomment-313673931
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        // allow importing css files
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    // This allows you to import modules just like you would in a NodeJS app.
    modules: [
      'node_modules'
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        default: false
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['extension/dist']),
    new webpack.DefinePlugin({
      'EXT.VERSION': JSON.stringify(require('../package.json').version),
      'EXT.NAME': JSON.stringify(EXT_NAME)
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css'
      // chunkFilename: 'css/[id].css'
    }),
    // fix importing some dependencies that assume filesystem etc.
    new webpack.IgnorePlugin(/jsdom$/),
    new HtmlWebpackPlugin({
      filename: 'background.html',
      chunks: ['background'],
      template: 'extension/src/template.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      chunks: ['popup'],
      template: 'extension/src/template.html',
      title: EXT_NAME
    })
  ],

  // fix importing some dependencies that assume filesystem etc.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    jsdom: 'empty'
  }
}
