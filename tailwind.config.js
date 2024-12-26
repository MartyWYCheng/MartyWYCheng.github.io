/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Add or modify your custom colors here
        'custom-blue': '#1e3a8a', // Change this value to your desired color
        'custom-gray': '#1f2937', // Change this value to your desired color
        // ...existing colors...
      },
    },
  },
  plugins: [],
};
