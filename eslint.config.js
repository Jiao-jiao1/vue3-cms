import vue from 'eslint-plugin-vue'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },

  {
    files: ['**/*.vue', '**/*.js', '**/*.ts'],
    languageOptions: {
      // vue-eslint-parser supports Vue SFC + JS/TS blocks
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
      '@typescript-eslint': tseslint,
      prettier,
    },
    rules: {
      ...vue.configs['flat/essential'].rules,
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
  },

  prettierConfig,
]
