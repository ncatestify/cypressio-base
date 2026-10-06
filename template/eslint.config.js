const { defineConfig, globalIgnores } = require('eslint/config');
const js = require('@eslint/js');
const typescriptParser = require('@typescript-eslint/parser');
const typescript = require('@typescript-eslint/eslint-plugin');
const cypress = require('eslint-plugin-cypress');
const mocha = require('eslint-plugin-mocha').default;
const chaiFriendly = require('eslint-plugin-chai-friendly');
const jsonc = require('eslint-plugin-jsonc');
const globals = require('globals');

module.exports = defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      },
      globals: {
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      ...typescript.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ]
    }
  },
  {
    files: ['cypress/**/*.{js,ts}'],
    extends: [
      cypress.configs.recommended,
      mocha.configs.recommended,
      chaiFriendly.configs.recommendedFlat
    ],
    rules: {
      // Cypress rules - tweaks on top of eslint-plugin-cypress recommended
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      // Mocha rules - adjusted for Cypress compatibility
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-pending-tests': 'error',
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-async-in-sync-tests': 'off'
    }
  },
  {
    files: ['**/*.json', '**/*.json5', '**/*.jsonc'],
    extends: [jsonc.configs['flat/recommended-with-jsonc']]
  },
  globalIgnores([
    'node_modules/**',
    'cypress/videos/**',
    'cypress/screenshots/**',
    'cypress/downloads/**',
    'cypress/fixtures/**',
    // Contains npm init placeholders like {{projectName}} which are not valid JSON
    'package.json',
    'package-lock.json'
  ])
]);
