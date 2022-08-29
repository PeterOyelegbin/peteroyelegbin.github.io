/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('https://img.freepik.com/free-photo/hooded-computer-hacker-stealing-information-with-laptop_155003-1918.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')",
        portfolio: "url('https://img.freepik.com/free-photo/businessman-speaking-mobile-phone_657883-531.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')",
        contact: "url('https://img.freepik.com/free-photo/colleagues-working-together-call-center-with-headphones_23-2149256084.jpg?size=626&ext=jpg&ga=GA1.2.405634466.1654584137')"
      }
    },
  },
  plugins: [],
}
