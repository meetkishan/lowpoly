const webpack = require('webpack');
const path = require('path');

module.exports = function(env, argv) {
    return {
        entry: './src/js/index.jsx',

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'docs/js'),
            publicPath: 'docs/js',
        },

        devtool: 'source-map',

        module: {
            rules: [{
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    },
                },
            ]
        },

        resolve: {
            extensions: ['.js', '.jsx'],
        }
    }
};