import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-console': 'error',
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-empty': 'off',
      'no-empty-pattern': 'off',
      'no-prototype-builtins': 'off',
      'no-fallthrough': 'off',
      'no-case-declarations': 'off',
      'no-constant-condition': 'off',
      'no-constant-binary-expression': 'off',
      'no-async-promise-executor': 'off',
      'no-async-without-await': 'off',
      'no-async-without-reason': 'off',
      'no-async-without-reason-or-error': 'off',
      'no-async-without-reason-or-error-or-timeout': 'off',
      'no-async-without-reason-or-error-or-timeout-or-cancel': 'off',
      'no-async-without-reason-or-error-or-timeout-or-cancel-error': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/display-name': 'off',
      'no-useless-catch': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
