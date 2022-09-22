const { merge } = require('webpack-merge');

module.exports = (config) => {
  return merge(config, {
    resolve: {
      fallback: {
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
      },
    },
  });
};
