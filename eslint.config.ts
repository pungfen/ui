import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// import json from '@eslint/json'

export default defineConfig([
  { ignores: ['dist', 'fixtures', '__fixtures', 'package-lock.json'] },
  {
    extends: ['js/recommended'],
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.node },
    plugins: { js }
  },

  // {
  //   extends: ['json/recommended'],
  //   files: ['**/*.json'],
  //   language: 'json/json',
  //   plugins: { json }
  // },
  // {
  //   extends: ['json/recommended'],
  //   files: ['**/*.jsonc'],
  //   language: 'json/jsonc',
  //   plugins: { json }
  // },
  // {
  //   extends: ['json/recommended'],
  //   files: ['**/*.json5'],
  //   language: 'json/json5',
  //   plugins: { json }
  // },
  tseslint.configs.recommended,
  perfectionist.configs['recommended-natural'],
  {
    plugins: { '@stylistic': stylistic },
    rules: {
      ...(stylistic.configs.customize().rules),
      '@stylistic/array-bracket-newline': ['error', { multiline: true }],
      '@stylistic/array-element-newline': ['error', { multiline: true }],
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/max-statements-per-line': ['error', { max: 1 }],
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0
        }
      ],
      '@stylistic/object-curly-newline': ['error', { multiline: true }],
      '@stylistic/object-property-newline': 'error',
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/spaced-comment': ['error']
    }
  }
])
