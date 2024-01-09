module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-refresh", "@typescript-eslint", "react-hooks"],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      { ts: "never", tsx: "never" },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "max-len": ["warn", { code: 100, ignoreComments: true, ignoreUrls: true }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
