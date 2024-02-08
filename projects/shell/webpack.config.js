const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    // Check this line. Is port 4201 configured?
    mfe1: 'http://localhost:4201/remoteEntry.js',
    mfe2: 'http://localhost:4202/remoteEntry.js',
    move: 'http://localhost:4203/remoteEntry.js',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
