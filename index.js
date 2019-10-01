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
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': 'off',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
    'jsx-a11y/control-has-associated-label': 0,

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/button-has-type': ['off'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['off'],

    // This rule will warn when it encounters a reference to an identifier that has not yet been declared.
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: true },
    ],

    // When turned on this rule enforces always declaring static properties outside of classes,
    // this is coming from AirBNB who override the default: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L490
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md#when-property-assignment-is-enabled
    'react/static-property-placement': ['off'],

    // We need to disable the rule here to get around @{foldername} alias'
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 0,

    // This is turned off because we would rather end paths such as '.' and '..' with '/'.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': 0,

    // When there is only a single export from a module, prefer using default export over named export.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': ['off'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': ['off'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': ['off'],

    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['off'],

    // Validate JSX has key prop when in array or iterator
    // AirBNB disable this rule: https://github.com/airbnb/javascript/blob/530278467f8b0a1b2aee632fbeee543e6732ef35/packages/eslint-config-airbnb/rules/react.js#L94
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // This is turned off because we would rather use default parameters in functional components.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',

    // TODO FES-5572: Fixes an intermittent issue with Flow, to be investigated. Ideally should be fixed and this rule re-enabled.
    'react/default-props-match-prop-types': ['off'],

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-define-flow-type
    'flowtype/define-flow-type': 1,

    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-use-flow-type
    'flowtype/use-flow-type': 1,

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
