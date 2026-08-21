export default [
  {
    languageOptions: {
      globals: {
        process: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];
