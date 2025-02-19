/** 
 * 📌 PostCSS Configuration File
 * This file defines the PostCSS configuration, including plugins.
 * Reference: https://github.com/postcss/postcss-load-config
 * 
 * @type {import('postcss-load-config').Config} 
 */

// ───────────────────────────────────────────
// ⚙️ Define PostCSS Configuration
// ───────────────────────────────────────────
const config = {
  plugins: {
    tailwindcss: {},
  },
};

// ───────────────────────────────────────────
// 🚀 Export Configuration
// ───────────────────────────────────────────
export default config;