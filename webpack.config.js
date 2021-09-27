const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",
    output: { path: path.join(__dirname, "build"), filename: "[name].bundle.js" },
    mode: "development",
    resolve: {
        extensions: [".mjs", ".tsx", ".ts", ".js"],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "css-modules-typescript-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|ico|mp3|svg)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            favicon: "./public/favicon.ico",
            manifest: "./public/manifest.json",
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                defaultVendors: {
                    filename: "[name].bundle.js",
                },
            },
        },
    },
}
