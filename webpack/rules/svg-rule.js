export function svgRule() {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/i,
          use: {
            loader: 'url-loader',
            options: {
              encoding: 'utf8',
            },
          },
        },
      ],
    },
  };
}
