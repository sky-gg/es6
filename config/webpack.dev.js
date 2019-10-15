const { smart } = require('webpack-merge')
const BaseConfig = require('./webpack.base.js')
module.exports = smart(BaseConfig, {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    progress: true,
    open: true
  },
  devtool: 'source-map',
  plugins: [
  ]
})