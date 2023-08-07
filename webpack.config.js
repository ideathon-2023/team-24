const path = require('path')

module.exports = {
    mode: 'development',
    entry: './BackEnd/index.js',
    output: {
        path: path.resolve(__dirname, 'FrontEnd'),
        filename: 'bundle.js'
    },
    watch: true
}
