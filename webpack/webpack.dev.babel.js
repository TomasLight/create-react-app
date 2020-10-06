import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import { merge } from 'webpack-merge';

import common from './webpack.common';
import { cssRule } from './rules/css-rule-dev';

const rootPath = path.join(__dirname, '..');
const publicPath = path.resolve(rootPath, 'public');

const devWebpackConfig = merge(
  common,
  {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: publicPath,
      port: 3000,
      hot: true,
    },
    plugins: [
      new HotModuleReplacementPlugin({
        multiStep: true,
      }),
    ],
  },
  cssRule(),
);

module.exports = devWebpackConfig;
