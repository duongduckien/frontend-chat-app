const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.tsx'],
        vendor: ['react', 'react-dom', 'react-router-dom'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',                    
                    'css-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
            {
                test: /font-awesome\.config\.js/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'font-awesome-loader' }
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto'
            },
            {
                test: /\.(jpe?g|gif|png|svg|jpg)$/i,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
              ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new TSLintPlugin({
            files: ['./src/**/*.ts'],
            config: './tslint.json',
            waitForLinting: true,
            warningsAsError: true
        })
    ]
};