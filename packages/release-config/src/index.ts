export default {
    branches: ['main'],
    plugins: [
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
            },
        ],
        '@semantic-release/commit-analyzer',
        '@semantic-release/changelog',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                assets: ['dist/**/*.{js,css}', 'docs', 'package.json', 'package-lock.json', 'CHANGELOG.md'],
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
};
