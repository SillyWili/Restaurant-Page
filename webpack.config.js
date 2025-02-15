const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
    open: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, //* Images imported using js
        type: "asset/resource",
      },
      {
        test: /\.css$/i, //* If it finds a css file imported:
        use: ["style-loader", "css-loader"], //* Uses this plugins to process it! Also webpack reads form the end so set the correct order
      },
    ],
  },
};
