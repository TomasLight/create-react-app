import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';

import common from './webpack.common';
import { cssRule } from './rules/css-rule-prod';
import path from "path";

const rootPath = path.join(__dirname, '..');
const publicPath = path.join(rootPath, "public");
const outputPath = path.join(publicPath, "js");

const prodWebpackConfig = merge(
  common,
  {
    mode: 'production',
    output: {
      filename: '[name].bundle.[hash].js',
      publicPath: '/js/',
      path: outputPath,
    },
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
