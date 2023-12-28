const path = require('path');

module.exports = {
  entry: './src/index.js',  // Update this path based on your project structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      util: require.resolve('util/'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      assert: require.resolve('assert/'),
      url: require.resolve('url/'),
    },
  },
};
