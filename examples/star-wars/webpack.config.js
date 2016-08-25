var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'lib', 'client.js'),
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',      
      'react-relay': 'Relay',
    },    
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'lib'),
    },
};
