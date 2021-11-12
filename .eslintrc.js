module.exports = {
  env: {
    browser: true,
    node: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "warn",
  },
};
