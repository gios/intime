var path = require("path");
var webpack = require("webpack");
var host = "localhost";
var port = 3001;

module.exports = {
    devServerPort: port,
    devtool: "inline-source-map",
    entry: [
        "webpack-dev-server/client?http://" + host + ":" + port,
        "webpack/hot/only-dev-server",
        "./client/index.js"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "http://" + host + ":" + port + "/dist/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ["react-hot", "babel?optional=runtime"],
            exclude: /node_modules/,
            include: __dirname
        }]
    }
};
