module.exports = {
  env: {
    browser: true,
    node: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsConfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: [
    "prettier",
    "@typescript-eslint",
    "styled-components-a11y",
    "jsx-a11y",
    "import",
    "unicorn",
    "jest",
    "jest-formatting",
    "no-only-tests",
    "testing-library",
  ],
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime", // Don't require React in scope for React 17
    "plugin:react-hooks/recommended",
    "plugin:styled-components-a11y/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended",
    "plugin:testing-library/react",
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ".",
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "warn",
    "no-only-tests/no-only-tests": ["error", { fix: true }],
    "no-unreachable": "error",
    "no-unused-vars": "error",
    "react/boolean-prop-naming": [
      "error",
      { rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+" },
    ],
    "react/button-has-type": "warn",
    "react/default-props-match-prop-types": "warn",
    "react/no-unused-prop-types": "warn",
    "react/require-default-props": "warn",
    //#region Imported from CRA
    "react/require-render-return": "error",
    "react/style-prop-object": "warn",
    //#endregion
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"],
      },
    ],
  },
};
