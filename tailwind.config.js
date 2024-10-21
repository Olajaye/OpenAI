/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, #87CEEB, #FFD700)',
        'chatGPT-1-gradient': 'radial-gradient(circle at top left, #FFD700, #87CEEB)',
      },
    },
  },
  plugins: [],
}