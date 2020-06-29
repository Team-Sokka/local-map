const path = require('path');
const webpack = require('webpack')
var dotenv = require('dotenv').config({path: __dirname + '/.env'})

//console.log('LOGGING FROM WEBPACK - ', dotenv)

module.exports = {
  entry: './client/App.jsx',
  mode: 'development',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  module: {
    rules:[{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets:['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed)
    })
  ]
};