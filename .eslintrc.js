/** @format */

const path = require("path");
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "react-app",
    "plugin:node/recommended",
    "plugin:promise/recommended",
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
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module", // Allows for the use of imports
  },
  plugins: [
    "react",
    "node",
    "promise",
    "@typescript-eslint",
    "jsx-a11y",
    "react-hooks",
    "ramda",
    "prettier",
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-missing-import": [
      "error",
      {
        tryExtensions: [".js", ".json", ".node", ".ts", ".tsx"],
      },
    ],
    "node/no-missing-require": [
      "error",
      {
        tryExtensions: [".js", ".json", ".node", ".ts", ".tsx"],
      },
    ],
    "node/no-extraneous-import": [
      "error",
      {
        allowModules: ["react-router"],
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "no-public",
      },
    ],
  },
  settings: {
    react: { version: "detect" },
  },
};
