const { resolve } = require('path');

module.exports = (options) => {
    const { projectName } = options;
    return {
        context: resolve(__dirname, 'src'),
        entry: './index.tsx',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'swc-loader',
                        options: {
                            jsc: {
                                parser: {
                                    syntax: 'typescript',
                                },
                            },
                        },
                    },
                },
            ],
        },
        output: {
            filename: `${projectName}.js`,
            libraryTarget: 'system',
            path: resolve(__dirname, 'dist'),
            uniqueName: projectName,
            devtoolNamespace: projectName,
            publicPath: '',
            clean: true,
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.json'],
        },
    };
};
