/*eslint-env node*/ /*globals*/
"use strict";

const vey = require("vey");

const vendorConfig = vey.config({
  entry: "src/vendor/vendor.js",
  dest: "public/vendor.js",
  name: "vendor",
  alias: { react: "./react.js" },
  livereload: true,
  sourceMap: false,
  watch: false
});

const config = vey.config({
  entry: "src/js/main.js",
  dest: "public/main.js",
  name: "main",
  external: [ "React", "ReactDOM" ],
  globals: {
    "React": "vendor.React",
    "ReactDOM": "vendor.ReactDOM"
  },
  sourceMap: true,
  watch: true
});

vey
  .bundle(vendorConfig)
  .bundle(config)
  .livereload({ root: "public", stylus: "src/css" })
  .serve({ root: "public", css: "src/css" });

