const path = require("path");

module.exports = {
  entry: path.resolve("src", "index.js"),
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.resolve("src")]
      }
    ]
  }
};
