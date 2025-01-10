const path = require('path');

module.exports = {
    entry: './src/index.js',  // Entry point for your app
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output file after bundling
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
