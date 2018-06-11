/* eslint-disable import/no-extraneous-dependencies,global-require */

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 0,
    }),
    require("postcss-flexbugs-fixes"),
    require("cssnano")({
      preset: "default"
    })
  ]
};
