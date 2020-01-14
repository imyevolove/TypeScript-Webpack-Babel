const path = require('path');

module.exports = {
    entry: './src/index',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "babel-loader?presets[]=es2015",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/typescript"
                    ],
                    plugins: [

                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-proposal-private-methods"
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './static/build'),
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};