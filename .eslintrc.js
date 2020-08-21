module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    require: true,
    __DEV__: true,
    Promise: true,
    Map: true,
    jest: true,
    expect: true,
    describe: true,
    it: true,
    module: true,
    afterEach: true,
    global: true
  },
  rules: {
    'no-console': 'off',
    'react/prop-types': 'off',
    'no-prototype-builtins': 'off',
    eqeqeq: 'error',
    'array-callback-return': 'error',
    'react/display-name': 'off'
  }
}
