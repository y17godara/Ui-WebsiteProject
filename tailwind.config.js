module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      
    },
  },
  variants: {
    extend: {
      backgroundImage:
      {
        'hero_pattern': "url('/public/background.svg)"
      }
    },
  },
  plugins: [],
}
