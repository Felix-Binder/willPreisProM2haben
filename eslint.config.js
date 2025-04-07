import { defineConfig } from 'eslint/config';
import globals from 'globals';
import eslintPluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs}'] },
    { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.browser } },
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { eslintPluginJs },
        extends: ['eslintPluginJs/recommended'],
    },
    eslintPluginPrettier,
]);
