import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';

import common from './webpack.common';
import { cssRule } from './rules/css-rule-prod';
import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';

const rootPath = path.join(__dirname, '..');
const publicPath = path.join(rootPath, "public");
const outputPath = path.join(publicPath, "js");
const htmlTemplatePath = path.join(publicPath, "templates", "index.html");

const prodWebpackConfig = merge(
  common,
  {
    mode: 'production',
    output: {
      filename: '[name].bundle.[hash].js',
      publicPath: '/js/',
      path: outputPath,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: 'body',
        template: htmlTemplatePath,
        filename: path.join(publicPath, "index.html"),
      }),
    ],
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimizer: [
        new TerserPlugin(),
      ]
    },
  },
  cssRule(),
);

module.exports = prodWebpackConfig;
