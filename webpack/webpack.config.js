const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
require("dotenv").config();

const prod = process.env.NODE_ENV === "production";
const localIdentName = prod ? "[hash:base64:5]" : "[local]_[hash:base64:5]";

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
      {
        test: /\.s[ac]ss$/i,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: localIdentName,
              },
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, "..", "src", "index.html") })].concat(
    prod ? [new MiniCssExtractPlugin({ filename: "assets/css/app.min.css" })] : []
  ),
  output: {
    clean: true,
    path: path.join(__dirname, "..", "dist"),
    filename: "assets/js/bundle.js",
  },
};
