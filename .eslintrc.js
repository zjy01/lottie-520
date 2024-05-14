module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:vue/vue3-recommended",
    "standard",
    "prettier",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    node: true,
  },
};
