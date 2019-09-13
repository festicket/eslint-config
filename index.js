module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    // Turns off all rules that are unnecessary or might conflict with Prettier.
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/babel',
    'prettier/flowtype',
    'prettier/react',
  ],
  rules: {
    // When there is only a single export from a module, prefer using default export over named export.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // Validate JSX has key prop when in array or iterator
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
    'react/static-property-placement': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'off',

    // Prefer to use ES2015 default params for functional components.
    'react/require-default-props': 'off',

    // This rule will warn when it encounters a reference to an identifier that has not yet been declared.
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],

    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  plugins: [
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier',
    'babel',
    'flowtype',
  ],
};
