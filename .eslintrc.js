/** @format */

const path = require("path");
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended",
    "plugin:node/recommended",
    "plugin:promise/recommended",
    "plugin:import/recommended",
    "plugin:lodash/recommended",
    "plugin:ramda/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module", // Allows for the use of imports
  },
  plugins: [
    "import",
    "react",
    "node",
    "promise",
    "@typescript-eslint",
    "jsx-a11y",
    "react-hooks",
    "lodash",
    "ramda",
    "prettier",
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
