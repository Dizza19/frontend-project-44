import globals from "globals";
import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import"; 

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      import: importPlugin, 
    },
    rules: {
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/namespace": "error",
      "import/default": "error",
      "import/export": "error",

      
      "indent": ["error", 2],
      "func-style": ["error", "expression", { "allowArrowFunctions": true }],
      "linebreak-style": ["error", "unix"],
    },
  },
];
