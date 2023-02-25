module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@core": "./src/core",
            "@modules": "./src/modules",
            "@shared": "./src/shared",
            "@service": "./src/service",
            "@components": "./src/shared/components",
            "@assets": "./src/shared/assets",
          },
        },
      ],
    ],
  };
};
