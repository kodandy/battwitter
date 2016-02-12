const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: {
    'app': './frontend/app.js'
  },
  output: {
    filename: 'bundle.js',
    path: './app/assets/javascripts/generated'
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      files: ["app/assets/stylesheets/*.css.*","app/views/**/*.html.*","app/assets/javascripts/**/*.js.*"],
      proxy: 'localhost:3000',
      port: 3001,
      server: false
    })
  ]
}
