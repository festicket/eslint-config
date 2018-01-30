module.exports = {
  extends: [
    'airbnb',
    // Turns off all rules that are unnecessary or might conflict with Prettier.
    // https://github.com/prettier/eslint-config-prettier
    'prettier'
  ],
  rules: {
    // When there is only a single export from a module, prefer using default export over named export.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // Validate JSX has key prop when in array or iterator
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // Prefer to use ES2015 default params for functional components.
    'react/require-default-props': 'off',

    // This rule will warn when it encounters a reference to an identifier that has not yet been declared.
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true }
    ],

    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all'
      }
    ]
  },
  plugins: [
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier'
  ]
};
