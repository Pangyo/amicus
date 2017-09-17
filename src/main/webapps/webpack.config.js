var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack")

module.exports = {
  entry: {
    'index': './src/index.jsx'
  },
  output: {
    path: path.resolve('dist'), //compile된 파일들이 dist에 떨어짐.
    filename: 'js/[name].js',
    publicPath: '/resources/' //import code들에 prefix로 resources를 붙임. spring 설정에서 dist폴더가 resources경로에 mapping되어 있음.
  },
  module: {
    loaders: [{
        test: /.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties'],
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=images/[hash].[ext]',
          'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],
}
