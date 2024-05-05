/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'arrow-down': "url('../public/images/arrow-down.svg')",
      },
    },
  },
  plugins: [],
}

