/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        sourceSans: ['Source Sans Pro', 'sans-serif'],
        droidSans: ['Droid Sans', 'sans-serif'],
        lora: ['Lora', 'serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        firaSans: ['Fira Sans', 'sans-serif'],
        varela: ['Varela Round', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        titillium: ['Titillium Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
}