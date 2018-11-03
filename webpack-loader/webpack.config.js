const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [{
            // npm install babel-loader --save-dev            
            test: /\.js$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
            // npm install style-loader css-loader --save-dev            
            test: /\.css$/,
            use: ['style-loader', 'css-loader?importLoaders=1',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require("autoprefixer")("last 5 versions")]
                    }
                }
            ]
        }, {
            // npm install less-loader --save-dev
            test: /\.less$/,
            use: [
                'style-loader', 'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require("autoprefixer")("last 5 versions")]
                    }
                },
                {
                    loader: 'less-loader'
                }
            ]
        }, {
            // npm install html-loader --save-dev
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            // npm install sass-loader --save-dev
            test: /\.sass$/,
            use: [
                'style-loader', 'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require("autoprefixer")("last 5 versions")]
                    }
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }, {
            // npm install file-loader --save-dev
            test: /\.(png|jpg|gif|svg)/,
            loader: 'file-loader',
            options: {
                name: 'assets/[name]-[hash:5].[ext]'
            }
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            title: ' this is a '
        })
    ]
}

module.exports = config;