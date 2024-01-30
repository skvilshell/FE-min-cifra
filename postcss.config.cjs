module.exports = {
  plugins: {
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 2,
      features: { 'nesting-rules': false },
    }
  }
};
