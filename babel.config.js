module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
          alias: {
            "@": "./src",
          },
        },
      ],
      "babel-plugin-react-compiler",
      'react-native-worklets/plugin',
    ],
  };
};

