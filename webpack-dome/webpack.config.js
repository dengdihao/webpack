const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        filename: 'js/[name]-[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            title: '你好a',
            chunks: ['main', 'a']
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            title: '你好b',
            // chunks: ['c'],
            chunks: ['main', 'b']
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            title: '你好c',
            // chunks: ['c'],
            excludeChunks: ['a', 'b']
        })
    ]
}

module.exports = config;