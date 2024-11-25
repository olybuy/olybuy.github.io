const path = require('path');

module.exports = {
    entry: './puzzles/framework/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};