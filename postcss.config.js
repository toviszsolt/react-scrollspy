const configPresetEnv = {
  autoprefixer: { flexbox: 'no-2009' },
  stage: 3,
  features: { 'custom-properties': false },
};

export default {
  plugins: {
    'postcss-flexbugs-fixes': { null: null },
    'postcss-preset-env': configPresetEnv,
    '@nextcss/nextcss/postcss-plugin': { null: null },
  },
};
