/* eslint-disable import/no-extraneous-dependencies,global-require */

module.exports = ({ env }) => {
  const isDev = env !== "production";
  const nano = !isDev
    ? require("cssnano")({
        preset: "default",
      })
    : undefined;

  return {
    plugins: [
      require("postcss-import"),
      require("postcss-preset-env")({
        stage: 0,
      }),
      require("postcss-flexbugs-fixes"),
      nano,
    ],
  };
};
