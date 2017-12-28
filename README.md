# Festicket ESLint Config

We are building on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) v14.1.0 with a few small changes.

## Rule changes

### react/jsx-key: enabled

Validate JSX has key prop when in array or iterator.

### import/prefer-default-export: disabled

When there is only a single export from a module, prefer using default export over named export.

### no-use-before-define: enabled

This rule will warn when it encounters a reference to an identifier that has not yet been declared.
