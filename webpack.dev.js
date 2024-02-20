const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  devtool: "inline-source-map", // Provides source maps for better debugging experience

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.join(__dirname, "src"),
    compress: true,
    port: 9000,
    hot: true, // Enables hot module replacement (HMR)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"], // Transpile JavaScript using Babel
      },
      {
        test: /\.html$/,
        use: ["html-loader"], // both style and html  process img inside it
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|webp)$/i,
        type: "asset/resource", // Inject CSS into the DOM
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], // Inject CSS into the DOM
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
