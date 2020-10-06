import path from 'path';
import { merge } from 'webpack-merge';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import {
  jsRule,
  tsRule,
  imgRule,
  svgRule,
  fontRule,
} from './rules';

const rootPath = path.join(__dirname, '..');
const entryPointPath = path.join(rootPath, 'src', 'index.jsx');

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
