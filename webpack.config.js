const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/client/js/app.js', // Entry point for your app
  output: {
    filename: 'main.bundle.js', // Single output file for all JS
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/, // Process SCSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles SCSS to CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/views/index.html', // Use your existing index.html as a template
      filename: 'index.html', // Output file in the dist folder
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Output CSS file
    }),
  ],
  mode: 'production', // Change to 'development' for development builds
};