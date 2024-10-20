// @ts-check

import js from "@eslint/js"
import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      eqeqeq: "error",
      '@typescript-eslint/no-floating-promises': 'off', // Enable the test function rewriting method when found.
    }
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module"        
      }
    }
  }
];