module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/babel',
  ],
  plugins: ['prettier', 'import', 'flowtype', 'babel', 'jest'],
  rules: {
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,

    // We need to disable the rule here to get around @{foldername} alias'
    'import/no-extraneous-dependencies': 0,

    // When there is only a single export from a module, prefer using default export over named export.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md

    'import/prefer-default-export': 'off',
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md

    'react/static-property-placement': ['off'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md

    'react/no-access-state-in-setstate': ['off'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md

    'react/state-in-constructor': ['off'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md

    'react/jsx-props-no-spreading': ['off'],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md

    'react/button-has-type': ['off'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['off'],

    // TODO FES-5572: Fixes an intermittent issue with Flow, to be investigated. Ideally should be fixed and this rule re-enabled.
    'react/default-props-match-prop-types': ['off'],

    'react/jsx-filename-extension': ['off'],

    // Validate JSX has key prop when in array or iterator
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // Prefer to use ES2015 default params for functional components.
    'react/require-default-props': 'off',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
    'jsx-a11y/control-has-associated-label': 0,

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    // This rule will warn when it encounters a reference to an identifier that has not yet been declared.
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],

    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': 'off',
  },
};
