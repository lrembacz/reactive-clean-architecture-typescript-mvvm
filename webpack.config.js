const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'bundle': [path.resolve(__dirname, 'src/index.ts')],
        'polyfills': [path.resolve(__dirname, 'src/polyfills.ts')],
        'service-worker': [path.resolve(__dirname, 'src/service/service-worker.ts')]
    },
    context: __dirname,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/es-next'),
    },
    devtool: "source-map",
    mode: "production",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [{test: /\.tsx?$/, loader: 'ts-loader'}],
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     template: './index.html'
        // })
    ],
    devServer: {
        port: 80
    }
};
