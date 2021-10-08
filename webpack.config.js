const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode:'development',
  module: {
    // 给不同的模块进行解析的规则
    rules: [
      {
        test: /\.js/, // 匹配.js还是用babel-loader
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 预设-插件集合
          },
        },
      },
      {
        test: /\.vue/, // 匹配.vue文件使用vue-loader进行转义
        use: 'vue-loader',
      },
      {
        test: /\.css/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 用html作为模板进行打包，自动引入到里面
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new VueLoaderPlugin(),
  ],
};
