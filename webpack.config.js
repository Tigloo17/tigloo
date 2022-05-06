const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    output: {
        filename: './js/app.js',
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
    }
}