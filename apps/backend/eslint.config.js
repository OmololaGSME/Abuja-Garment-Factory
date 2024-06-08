export default [
    {
      files: ["**/*.js"],
      ignores: ["node_modules/**", "dist/**"],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module" 
      },
      env: {
        node: true, 
        es6: true
      },
      plugins: ["node"],
      extends: [
        "eslint:recommended",
        "plugin:node/recommended" 
      ],
      rules: {
        "no-console": "off", 
        "node/no-unsupported-features/es-syntax": [
          "error",
          { ignores: ["modules"] } // Allow import/export syntax if using ES modules
        ]
      }
    }
  ];
  