module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase']
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx']
      }
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    semi: ['error', 'never'],
    'react/jsx-props-no-spreading': ['off'],
    'no-console': ['error', { allow: ['tron'] }],
    'react/prefer-stateless-function': ['off', { ignorePureComponents: true }],
    'react-hooks/exhaustive-deps': 'off',
    'no-nested-ternary': 'off',
    'react/jsx-curly-newline': 'off',
    'no-use-before-define': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    'no-unused-vars': 'off'
  },
  globals: {
    React: 'writable'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {}
  }
}
