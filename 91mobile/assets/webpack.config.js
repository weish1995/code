const minimist = require('minimist');
const path = require('path');

const CODE_BASE = path.resolve('src'); // 源码目录
const OUTPUT_PATH = path.resolve('../public/dist/');

// 参数解析
const argv = minimist(process.argv.slice(2));

const PACKAGE = require('./package.json');

const CDN = PACKAGE.cdn;
const PUBLIC_PATH = CDN[argv.env];

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
import CleanWebpackPlugin from 'clean-webpack-plugin';
import px2rem from 'postcss-px2rem';

console.log('wozhixingle')

const copyFile = PACKAGE.copyFile;

const babelQuery = {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime', 'add-module-exports', 'array-includes'],
    cacheDirectory: true,
};

module.exports = {
    context: CODE_BASE,
    cache: false,
    entry: {
        index: ['page/detail/detail.js', 'page/home/home/home.js', 'page/home/search/index.js'],
        // detail: 'page/detail/detail.js',
        // home: 'page/home/home/home.js',
        // search: 'page/home/search/index.js',
    },
    output: {
        path: OUTPUT_PATH,
        filename: '[name].js',
        publicPath: PUBLIC_PATH,
    },
    resolve: {
        root: [path.resolve('./src')],
        modulesDirectories: ['node_modules', './node_modules'],
        extensions: ['', '.js'],
        unsafeCache: true,
    },
    stats: 'errors-only',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: babelQuery,
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css?sourceMap&-restructuring!' + 'postcss-loader'),
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('css?sourceMap!' + 'postcss-loader!' + 'less?{"sourceMap":true,"modifyVars":{}}'),
        }, {
            test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
            loader: 'url?limit=3000',
        }, {
            test: /\.woff(\?((t=\d+)|(v=\d+\.\d+\.\d+)))?$/,
            loader: 'url?limit=10000&minetype=application/font-woff',
        }, {
            test: /\.woff2(\?((t=\d+)|(v=\d+\.\d+\.\d+)))?$/,
            loader: 'url?limit=10000&minetype=application/font-woff',
        }, {
            test: /\.ttf(\?((t=\d+)|(v=\d+\.\d+\.\d+)))?$/,
            loader: 'url?limit=10000&minetype=application/octet-stream',
        }, {test: /\.eot(\?((t=\d+)|(v=\d+\.\d+\.\d+)))?$/, loader: 'file'}, {
            test: /\.svg(\?((t=\d+)|(v=\d+\.\d+\.\d+)))?$/,
            loader: 'url?limit=10000&minetype=image/svg+xml',
        }],
    },
    postcss: () => {
        return [px2rem({remUnit: 66.2}), autoprefixer({ browsers: ['last 2 versions'] })];
    },
    plugins:
        ((argv.env !== 'dev') ? [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"',
                },
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true,
                },
            }),
        ] : []).concat([
            new CopyWebpackPlugin(
                (argv.env === 'dev') ? copyFile.development : copyFile.production
            ),
            new ExtractTextPlugin('[name].css', {
                allChunks: true,
            }),
              new CleanWebpackPlugin('public/dist/', {
                root: path.resolve('../'), // An absolute path for the root.
            }),
        ]),
}
