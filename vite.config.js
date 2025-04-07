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
            include: ['src/**'],
            exclude: ['src/contentScript.js'],
        },
    },
    publicDir: 'public',
});
