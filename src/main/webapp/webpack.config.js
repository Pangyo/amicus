var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    'index':'./src/index.jsx'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
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
        loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
        }),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
  ],
}
