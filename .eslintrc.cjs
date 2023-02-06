module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'warn',
    'arrow-parens': ['error', 'as-needed'],
    'space-before-function-paren': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'draft'],
        allowTernary: true,
        allowShortCircuit: true,
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
