module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
      backgroundImage: {
        "img-primary": "linear-gradient(112.33deg, #FC4D6D 23.89%, #FDA02F 94.22%)",
      },
      backgroundColor: {
        "color-primary": "#FFF2E3"
      },
      colors: {
        secondary: "#FC4D6D"
      },
    },
  },
  plugins: [],
}
