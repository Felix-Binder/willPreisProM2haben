export default {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        'semantic-release-license',
        '@semantic-release/npm',
        [
            '@semantic-release/exec',
            {
                prepareCmd:
                    'npm run script:update-version && npm run build && npm run script:zip-dist',
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: ['LICENSE', 'package.json', 'CHANGELOG.md', 'public/manifest.json'],
                message: 'chore(release): ${nextRelease.version} [skip ci]',
            },
        ],
        [
            '@semantic-release/github',
            {
                assets: [
                    {
                        path: 'release/willPreisProM2haben-v*.zip',
                        label: 'Chrome Extension ZIP',
                    },
                ],
            },
        ],
    ],
};
