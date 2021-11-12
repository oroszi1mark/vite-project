module.exports = {
  env: {
    browser: true,
    node: true,
  },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "prettier",
    "@typescript-eslint",
    "styled-components-a11y",
    "jsx-a11y",
    "import",
    "unicorn",
  ],
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:styled-components-a11y/recommended",
    "plugin:jsx-a11y/recommended",
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
  },
  rules: {
    "prettier/prettier": "warn",
    "no-unused-vars": "error",
    "react/boolean-prop-naming": [
      "error",
      { rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+" },
    ],
    "react/button-has-type": "warn",
    "react/default-props-match-prop-types": "warn",
    "react/no-unused-prop-types": "warn",
    "react/require-default-props": "warn",
  },
  // Turn off rule for importing React for JSX from React 17
  configs: {
    "jsx-runtime": {
      plugins: "react",
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      jsxPragma: null,
    },
    rules: {
      "react/react-in-jsx-scope": 0,
      "react/jsx-uses-react": 0,
    },
  },
};
