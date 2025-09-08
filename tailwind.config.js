// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // Blue
        secondary: "#7c3aed", // Indigo/Violet
        accent: "#fbbf24",    // Amber
        background: "#f9fafb", // Light Gray BG
        textDark: "#1f2937",  // Dark Gray for text
        textLight: "#6b7280", // Muted text
        white: "#ffffff",
        
      },
    },
  },
  plugins: [],
};
