/**
 * Created by wangdanting on 16/11/15.
 */

var url = require('url');
const minimist = require('minimist');

const APP_ROOT = __dirname;
const CODE_BASE = APP_ROOT + '/src'; //代码目录
const OUTPUT_PATH = APP_ROOT + '/output'; //输出目录

//参数解析
const argv = minimist(process.argv.slice(2));

const PACKAGE =require('./package.json');
const PROJECT_NAME = PACKAGE.name;

const CDN = {
    'dev': PACKAGE.cdn.dev,
    // 'test': PACKAGE.cdn.test + PROJECT_NAME + '/',
    // 'stage': PACKAGE.cdn.stage + PROJECT_NAME + '/',
    // 'release': PACKAGE.cdn.release + PROJECT_NAME + '/'
};

const PUBLIC_PATH = CDN[argv.env];

//提取文本捆绑到一个文件中。
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: CODE_BASE,
    cache: true,
    entry: {
        // app: './modules/app',
        entry: './entry/entry.js'
    },
    output: {
        path: OUTPUT_PATH,
        //[name]由组块的名称代替
        filename: '[name].js',
        //指定输出文件的公共URL地址
        publicPath: PUBLIC_PATH
    },
    module: {
        loaders: [{
            //test 必须满足的条件
            test: /\.html$/,
            //!字符串分隔loaders
            loader: 'html'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.jpg|png|gif$/i,
            loader: 'url?name=[hash:8].[ext]&limit=4096'
        }, {
            test: /\.woff/,
            loader: 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf/,
            loader: 'file?prefix=font/'
        }, {
            test: /\.eot/,
            loader: 'file?prefix=font/'
        }, {
            test: /\.svg/,
            loader: 'file?prefix=font/'

        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ]
};