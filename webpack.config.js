const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    
    entry: ['./resources/sass/app.scss', './resources/js/app.js'],
    
    output: {
        filename: './js/app.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require.resolve('sass')
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/[name].css",
            chunkFilename: "./css/[id].[hash].css"
        })
    ]
}