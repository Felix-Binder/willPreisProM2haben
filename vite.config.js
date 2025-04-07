import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                contentScript: 'src/contentScript.js',
            },
            output: {
                entryFileNames: '[name].js',
            },
        },
    },
    test: {
        globals: true,
        include: ['tests/**/*.test.js'],
        environment: 'jsdom',
        coverage: {
            provider: 'v8',
            exclude: [
                '**/node_modules/**',
                '**/dist/**',
                '**/release.config.js',
                '**/vite.config.js',
                'src/contentScript.js',
            ],
        },
    },
    publicDir: 'public',
});
