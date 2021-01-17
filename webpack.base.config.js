const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
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
          }
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}