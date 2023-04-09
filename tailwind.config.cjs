/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        numeric: "2rem",
      },
      colors: {
        "key-front": "hsla(var(--key-front), <alpha-value>)",
        "key-back": "hsla(var(--key-back), <alpha-value>)",
        "key-shadow": "hsla(var(--key-shadow), <alpha-value>)",
        "key-active": "hsla(var(--key-active), <alpha-value>)",
        "key-front-alt": "hsla(var(--key-front-alt), <alpha-value>)",
        "key-back-alt": "hsla(var(--key-back-alt), <alpha-value>)",
        "key-shadow-alt": "hsla(var(--key-shadow-alt), <alpha-value>)",
        "key-active-alt": "hsla(var(--key-active-alt), <alpha-value>)",
        "keyboard-back": "hsla(var(--keyboard-back), <alpha-value>)",
        "screen-front": "hsla(var(--screen-front), <alpha-value>)",
        "screen-back": "hsla(var(--screen-back), <alpha-value>)",
        "body-back": "hsla(var(--body-back), <alpha-value>)",
        "key-back-important": "hsla(var(--key-back-important), <alpha-value>)",
        "key-front-important": "hsla(var(--key-front-important), <alpha-value>)",
        "key-shadow-important": "hsla(var(--key-shadow-important), <alpha-value>)",
        "key-active-important": "hsla(var(--key-active-important), <alpha-value>)",
      },
    },
  },
};
