const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports =  {
  // 打包模式
  mode: "development",
  // 入口文件
  entry: {
    'index': './index.js', 
    'a': './a.js'
  },
  // 出口文件
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name].bundle.js"
  },
  // 插件
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};