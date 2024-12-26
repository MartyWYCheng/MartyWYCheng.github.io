/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Add or modify your custom colors here
        'custom-blue': '#1e3a8a',
        'custom-gray': '#1f2937',
        // ...existing colors...
      },
    },
  },
  plugins: [],
};
