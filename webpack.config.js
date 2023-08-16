const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        bundle1: './BackEnd/index.js',
        // bundle2: './BackEnd/index2.js',
      },
    output: {
        path: path.resolve(__dirname, 'FrontEnd'),
        filename: 'bundle.js',
        // filename: 'bundle2.js',
    },
    watch: true
}
module.exports = {
    mode: 'development',
    entry: {
        // bundle1: './BackEnd/index.js',
        bundle2: './BackEnd/index2.js',
      },
    output: {
        path: path.resolve(__dirname, 'FrontEnd'),
        // filename: 'bundle.js',
        filename: 'bundle2.js'
    },
    watch: true
}
// module.exports = {
//     mode: 'development',
//     entry: {
//         // bundle1: './BackEnd/index.js',
//         bundle3: './BackEnd/index3.js',
//       },
//     output: {
//         path: path.resolve(__dirname, 'FrontEnd'),
//         // filename: 'bundle.js',
//         filename: 'bundle3.js'
//     },
//     watch: true
// }
