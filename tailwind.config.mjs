/** 
 * 📌 Tailwind CSS Configuration File
 * This file defines the Tailwind CSS settings, including theme customizations.
 * Reference: https://tailwindcss.com/docs/configuration
 * 
 * @type {import('tailwindcss').Config} 
 */

// ───────────────────────────────────────────
// ⚙️ Export Tailwind CSS Configuration
// ───────────────────────────────────────────
export default {
  // 🔍 Specify the files Tailwind should scan for class usage
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       
  ],

  // 🎨 Customize the Tailwind theme
  theme: {
    extend: {
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)", 
      },
    },
  },

  // 🔌 Add Tailwind plugins if needed
  plugins: [],
};