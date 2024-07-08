/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      primary: {
        // marineBlue: "hsl(213, 96%, 18%)",
        // purplishBlue: "hsl(243, 100%, 62%)",
        // pastelBlue: "hsl(228, 100%, 84%)",
        // lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",
      },
    },
  },
  },
  plugins: [],
}