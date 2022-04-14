module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: 12,
  },
  rules: {
    "import/extensions": [ 
      "warn",
      "ignorePackages",
      { 
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never",
        "d.ts": "never",
        "json": "always",
        "": "never",
      } ]
  },
};
