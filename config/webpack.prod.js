const { smart } = require('webpack-merge')
const BaseConfig = require('./webpack.base.js')
module.exports = smart(BaseConfig,{
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.[hash].js',
  },

  plugins: [
  ]
})