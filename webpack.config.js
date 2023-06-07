const path = require("path");
const src = path.join(__dirname, "/client/src");
const dist = path.join(__dirname, "/client/dist");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: `${src}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: dist
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use:{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader"}
        ]
      }
    ]
  }
};