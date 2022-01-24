const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
    prayTime: './src/Pages/PrayTime.tsx',
  },
  output: {
    publicPath: './',
    path: path.join(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: {
      keep: /assets\//,
    },
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js', '.json', '.css'],
    alias: {
      //   Components: path.resolve(__dirname, "./src/Components/"),
      Pages: path.resolve(__dirname, './src/Pages/'),
      Root: path.resolve(__dirname, './'),
    },
  },
  devServer: {
    static: path.join(__dirname, 'src'),
    historyApiFallback: true,
    proxy: {
      '/.netlify': {
        target: 'http://localhost:8888',
        secure: false,
      },
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /node_modules/,
      //   loader: 'ts-loader',
      // },
      // {
      //   test: /\.(css|scss)$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
      //   // use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.(jpg|png)/,
      //   type: 'asset/resource',
      // },
      // {
      //     test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
      //     loader: "file-loader",

      // },
      // {
      //     test: /\.(png|jpg)$/,
      //     loader: 'url-loader'
      // }
    ],
  },

  plugins: [new MiniCssExtractPlugin()],
};
