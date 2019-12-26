const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "js/[name].bundle.js"
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "app.bundle.html",
      template: "./app.html"
    }),
  ],
  module: {
      rules: [
        { 
          test: /\.js$/, 
          include: /src/, 
          loader: "babel-loader" 
        }
      ]
  }
};




