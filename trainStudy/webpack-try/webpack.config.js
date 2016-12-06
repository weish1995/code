/**
 * Created by Administrator on 2016-12-1.
 */
const path = require('path');

const SOURCE_PATH = path.resolve('app/'); // 源路径
const DEST_PATH = path.resolve('dist/'); // 输出路径

module.exports = {
    context: SOURCE_PATH,
    cache: false,
    entry: {
        index: 'index.js'
    },
    output: {
        path: DEST_PATH,
        filename: '[name].js'
    },
    resolve: {
        root: [path.resolve('./app')],
        modulesDirectories: ['node_modules', './node_modules'],
        extensions: ['', '.js'],
        unsafeCache: true
    },
    stats: 'error-only',
    modules: {
        loaders: [{

        }]
    }
};
