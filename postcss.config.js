/* eslint-disable import/no-extraneous-dependencies */

const atImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const cssnext = require("postcss-cssnext");
const cssnano = require("cssnano");

module.exports = {
  parser: "postcss-scss",
  plugins: [
    atImport,
    cssnext,
    cssnano({
      preset: "default"
    }),
    autoprefixer
  ]
};
