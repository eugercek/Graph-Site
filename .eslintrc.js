module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },

  plugins: ["prettier"],
  extends: ["airbnb-base", "prettier"],

  rules: {
    "prettier/prettier": "warn",
  },
};
