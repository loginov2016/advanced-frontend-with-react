import globals from 'globals';
import js from '@eslint/js';
import tseslint, { parser } from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import reactHooks from 'eslint-plugin-react-hooks';
//import prettierPlugin from 'eslint-plugin-prettier';
//import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
        ignores: ['node_modules', 'build'],
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            'react-in-jsx-scope': 'off',
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: pluginReact,
            'react-refresh': eslintReactRefresh,
        },
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2024,
                __IS_DEV__: true,
            },

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
];
