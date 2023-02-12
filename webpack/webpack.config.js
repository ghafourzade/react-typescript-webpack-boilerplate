const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
require("dotenv").config();

module.exports = {
  entry: path.resolve(__dirname, "..", "src", "index.tsx"),
  devServer: {
    port: process.env.PORT,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "*"],
    plugins: [new TsconfigPathsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, "..", "src", "index.html") })],
  output: {
    clean: true,
    path: path.join(__dirname, "..", "dist"),
    filename: "bundle.js",
  },
};
