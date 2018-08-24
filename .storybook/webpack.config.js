const {
  CheckerPlugin,
  TsConfigPathsPlugin,
} = require('awesome-typescript-loader');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
    exclude: /node_modules/,
  });
  defaultConfig.resolve.extensions.push('.ts', '.tsx');
  defaultConfig.resolve.plugins = [new TsConfigPathsPlugin()];
  defaultConfig.plugins.push(new CheckerPlugin());

  return defaultConfig;
};
