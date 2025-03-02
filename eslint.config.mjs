// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import docusaurus from '@docusaurus/eslint-plugin'
import babelParser from '@babel/eslint-parser'

// Initialize compatibility layer
const compat = new FlatCompat();

export default [
  // Include base configurations
  js.configs.recommended,

  {
    name: "gesslar/lpcdoc/ignores",
    ignores: [".docusaurus/", "build/", "eslint.config.mjs"]
  },
  // Add Docusaurus plugin and recommended rules
  {
    name: "gesslar/lpcdoc/docusaurus",
    plugins: {
      '@docusaurus': docusaurus,
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        requireConfigFile: false,
      },
    },
    rules: {
      ...docusaurus.configs.recommended.rules,
    },
  },

  // Optionally, include compatibility for existing eslintrc configurations
  ...compat.extends('plugin:@docusaurus/recommended'),
];
