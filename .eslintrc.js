
module.exports = {
  'extends': ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended'],
  'plugins': ['prettier'],
  'rules': {
    'key-spacing': [
      'error',
      {
        'align': {
          'beforeColon': true,
          'afterColon': true,
          'on': 'colon'
        }
      }
    ],
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': ['.js', '.jsx', '.json']
      }
    ],
    'no-use-before-define': 0,
    'no-undef': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'global-require': 0,
    'no-unused-vars': 0,
    'no-param-reassign': 0,
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error'
  },
  'globals': {
    'window': true,
    'document': true,
    'localStorage': true,
    'FormData': true,
    'FileReader': true,
    'Blob': true,
    'navigator': true
  },
  'parser': 'babel-eslint'
}