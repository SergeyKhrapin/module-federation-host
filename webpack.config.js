const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-react", {
            runtime: "automatic" // do not need to import React in every file
          }]]
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        remote: "remote@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
