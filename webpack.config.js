const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'pkg/client/clientEntry.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      { 
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            // 使用项目中自带的 loader
            loader: require.resolve('./pkg/loader/markdown-loader'),
            options: {
              sourceDir: './docs/README.md',
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './pkg/client/index.html',
    }),
  ],
}