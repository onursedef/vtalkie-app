/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/routes/**/*.{js,ts,jsx,tsx}",
    "./src/lib/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito": ['Nunito Variable', 'sans-serif'],
        "krone-one": ['Krona One', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

