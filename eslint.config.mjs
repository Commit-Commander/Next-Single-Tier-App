// 📌 ESLint Configuration File (ESM Format)
// This file sets up ESLint configuration using the Flat Config system.
// Reference: https://eslint.org/docs/latest/use/flat-config

// ───────────────────────────────────────────
// 📦 Import Required Modules
// ───────────────────────────────────────────
import { dirname } from "path"; 
import { fileURLToPath } from "url"; 
import { FlatCompat } from "@eslint/eslintrc"; 

// ───────────────────────────────────────────
// 🔄 Resolve __dirname Equivalent in ES Modules
// ───────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename); 

// ───────────────────────────────────────────
// ⚙️ Initialize ESLint Compatibility Config
// ───────────────────────────────────────────
const compat = new FlatCompat({
  baseDirectory: __dirname, 
});

// ───────────────────────────────────────────
// 🔧 Define ESLint Configuration
// ───────────────────────────────────────────
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), 
];

// ───────────────────────────────────────────
// 🚀 Export Configuration
// ───────────────────────────────────────────
export default eslintConfig;