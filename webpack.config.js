var path = require("path");
module.exports = {
    entry: {
        app: "./src/index.tsx",
        // server: "./server/server.ts"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname + "/dist")
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"]},

            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
