const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/scripts/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    // assetModuleFilename: "images/[name].[hash][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: "asset/resource",
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/templates/index.html"),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),

    new WorkboxWebpackPlugin.GenerateSW({
      swDest: "./sw.bundle.js",
      mode: "production",
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith("https://restaurant-api.dicoding.dev"),
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "restaurant-api",
          },
        },
      ],
    }),
  ],
};
