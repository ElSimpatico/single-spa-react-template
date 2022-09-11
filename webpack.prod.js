const { merge } = require('webpack-merge');
const WebpackCommon = require('./webpack.common');

const PackageJSON = require('./package.json');

const externals = Object.keys(PackageJSON.peerDependencies);

module.exports = merge(
    WebpackCommon({
        projectName: PackageJSON.name,
    }),
    {
        externals,
        optimization: {
            minimize: true,
        },
        mode: 'production',
    },
);
