const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlWebpackPlugiun = require('html-webpack-plugin')
// const isDev = process.env.NODE_ENV === 'development'
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const config = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:5].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.styl$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                            // 启用源映射支持，postcss-loader将使用其他加载器给出的先前源映射并相应地更新它，
                            // 如果之前没有应用先前的加载器postcss-loader，则加载器将为您生成源映射。
                        }
                    },
                    'stylus-loader'
                ]
            })
        }, {
            test: /\.(png|jpg|gif|SVG)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 2048,
                    name: 'img/[name]-aaa.[ext]'
                }
            }
        }]
    },
    devServer: {
        overlay: true,
        port: 8080,
        host: '127.0.0.1',
        hot: true // 热加载
    },
    devtool: "cheap-module-eval-source-map", // 指定开发者模式
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugiun({
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(), //
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'NICE_FEATURE': JSON.stringify(true),
            'EXPERIMENTAL_FEATURE': JSON.stringify(false)
        }),
        new ExtractTextWebpackPlugin("styles.[hash:5].css")
    ]
}


module.exports = config