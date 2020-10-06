const config = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      astTransformers: {
        before: ['ts-nameof'],
      },
    },
  },
  transform: {
    '^.+\\.jsx?$': require.resolve('babel-jest'),
    '^.+\\.tsx?$': 'ts-jest',
  },
};

module.exports = config;
