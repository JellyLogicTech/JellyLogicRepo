export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        jelly: {
          500: "#667eea",
          600: "#5a6de0",
          700: "#4f5fc9",
          800: "#3e4aa3"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(102,126,234,0.25)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(102,126,234,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(102,126,234,0.03) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "50px 50px"
      }
    },
  },
  plugins: [],
}
