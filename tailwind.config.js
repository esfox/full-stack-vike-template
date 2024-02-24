/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
