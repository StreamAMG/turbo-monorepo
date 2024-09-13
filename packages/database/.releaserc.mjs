import sharedConfig from '@package/release-config';
import pkg from './package.json' assert { type: 'json' };

const { name } = pkg;

export default {
    ...sharedConfig,
    tagFormat: `${name}@v\${version}`,
};
