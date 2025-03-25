module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@services': './src/services',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
