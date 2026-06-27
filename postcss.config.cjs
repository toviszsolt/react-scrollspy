const nextcssPlugin = require('@nextcss/nextcss/postcss-plugin');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssFlexbugsFixes(),
    (postcssPresetEnv.default || postcssPresetEnv)({
      autoprefixer: { flexbox: 'no-2009' },
      features: { 'custom-properties': false },
      stage: 3,
    }),
    nextcssPlugin.default(),
  ],
};
