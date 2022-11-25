module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
};
