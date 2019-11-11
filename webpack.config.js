let path = require('path');
let webpack = require('webpack');
module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'), 
        filename: "veri.js"
    },
    module: {
        rules: [

        ]
    }
};
