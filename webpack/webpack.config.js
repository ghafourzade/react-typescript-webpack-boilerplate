const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    port: process.env.PORT,
  },
  module: {
    rules: [],
  },
  plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, "/src/index.html") })],
  output: {
    clean: true,
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
};
