module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  env: {
    browser: true,
  },
  plugins: [
    'html'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  "extends": "airbnb-base",
  "rules": {
    'semi': ['warn', 'never'],
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'generator-star-spacing': 'off',
    'no-plusplus': 'off',
    'array-callback-return': 'off',
    'no-new': 'off',
    'eol-last': 'warn',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    "no-param-reassign": [2, { 
      "props": false
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};