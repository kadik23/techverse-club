/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      rotate: {
        '135': '135deg',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'bounce-once': 'bounce 1s ease-in-out 10  ', 
        'fade-in': 'fadeIn 1s ease-in-out forwards', 
      },
      colors: {
        primary: '#26215A',
        secondary: '#870284',
        light_purple: '#8B3889'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        geistMono: ['Geist Mono', 'monospace'],
        geist: ['Geist', 'monospace']
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}