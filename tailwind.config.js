/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //          Dark Theme 
        'dark-bg': '#0f172a',      // Very Dark Slate Blue
        'dark-card': '#1e293b',    // Dark Slate
        'dark-primary': '#334155',  // Medium Slate
        'dark-accent': '#08d9d6',   // Bright Cyan

        //            Light Theme
        'light-bg': '#f8fafc',      // Very Light Gray (almost white)
        'light-card': '#ffffff',    // White
        'light-primary': '#3730a3',  // Deep Indigo
        'light-accent': '#08d9d6',   // Bright Cyan
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}