module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { configFile: './babel.config.cjs' }],
  },
  testEnvironment: 'jest-environment-jsdom',
  testRegex: '\\.test\\.(js|jsx)$',
  // otras configuraciones de Jest
};
