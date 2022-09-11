const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StandaloneSingleSpaPlugin = require('standalone-single-spa-webpack-plugin');

const PackageJSON = require('./package.json');
const WebpackCommon = require('./webpack.common');

const projectName = PackageJSON.name || 'bundle';

module.exports = merge(
    WebpackCommon({
        projectName,
    }),
    {
        devServer: {
            hot: true,
            open: true,
            port: 3000,
        },
        devtool: 'cheap-source-map',
        optimization: {
            minimize: false,
        },
        mode: 'development',
        plugins: [
            new HtmlWebpackPlugin(),
            new StandaloneSingleSpaPlugin({
                appOrParcelName: projectName,
                disabled: false,
                HtmlWebpackPlugin,
            }),
        ],
    },
);
