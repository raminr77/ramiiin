/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['prettier'],
  rules: {
    'no-debugger': 2,
    'no-console': 2,
    'consistent-return': 0,
    indent: 0,
    'no-else-return': 1,
    semi: [1, 'always'],
    'space-unary-ops': 2
  }
};
