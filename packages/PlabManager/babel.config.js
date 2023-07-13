module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@navigators': './src/navigators',
            '@types': './src/types',
            '@layouts': './src/layouts',
          },
        },
      ],
    ],
  };
};
