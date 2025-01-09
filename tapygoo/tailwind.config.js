/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customDarkGreen: "#203635", // Add this color
        customOrange: "#FCA028",
        textHeading: "#2E2E2E",
        customBgGray: "#EEF3F3"   // Add this color
      },
      fontFamily: {
        fontOutfit: ["Outfit", "serif"]
      }
    },
  },
  plugins: [],
}