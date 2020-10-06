// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig');

const config = {
  preset: 'ts-jest',
  // testEnvironment: 'node',
  // moduleNameMapper: pathsToModuleNameMapper(
  //   compilerOptions.paths,
  //   {
  //     prefix: '<rootDir>/src/'
  //   }
  // ),
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
