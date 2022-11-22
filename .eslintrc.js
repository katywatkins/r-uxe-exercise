module.exports = {
  extends: ['airbnb', 'plugin:storybook/recommended'],
  rules: {
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'react/jsx-props-no-spreading': [0],
  },
  env: {
    browser: true,
  },
};