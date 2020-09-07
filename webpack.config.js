const path = require("path");
const webpack = require(`webpack`);
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, `/build`),
    open: false,
    port: 1350,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      }
    ]
  },
  resolve: {
    modules: [`node_modules`, path.resolve(path.join(__dirname, `src/components`))],
    extensions: [`.js`, `.jsx`, `.ts`, `.tsx`, `.webm`],
  },
  devtool: `source-map`,
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};