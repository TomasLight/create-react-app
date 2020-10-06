import path from 'path';
import { merge } from 'webpack-merge';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import {
  jsRule,
  tsRule,
  imgRule,
  svgRule,
  fontRule,
} from './rules';

const rootPath = path.join(__dirname, '..');
const publicPath = path.join(rootPath, "public");
const entryPointPath = path.join(rootPath, 'src', 'index.jsx');
const htmlTemplatePath = path.join(publicPath, "templates", "index.html");

const commonWebpackConfig = merge(
  {
    entry: entryPointPath,
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      // increase build performance
      new ForkTsCheckerWebpackPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: 'body',
        template: htmlTemplatePath,
      }),
      new ManifestPlugin(),
    ],
  },
  svgRule(),
  fontRule(),
  imgRule(),
  jsRule(),
  tsRule(),
);

module.exports = commonWebpackConfig;
