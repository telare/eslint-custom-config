import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    ignores: ["dist", "build", "node_modules", ".next"],
  },
  
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },

    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",

      ...reactHooks.configs.recommended.rules,

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      ...jsxA11y.configs.recommended.rules,

      "perfectionist/sort-imports": [
        "error",
        {
          groups: [
            "type",
            ["builtin", "external"],
            "internal-type",
            ["internal"],
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "object",
            "style",
            "side-effect-style",
            "unknown",
          ],
          internalPattern: ["^~/.*", "^@/.*"],
          newlinesBetween: "always",
          order: "asc",
          type: "natural",
        },
      ],

      "no-console": ["error", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-explicit-any": "warn",
      "unused-imports/no-unused-imports": "error",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
