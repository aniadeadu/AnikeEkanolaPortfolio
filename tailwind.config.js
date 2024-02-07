/** @type {import('tailwindcss').Config} */
export default {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        anikeImage: "url('/src/assets/anikeImage.jpg')",
      },
      colors: {
        yellow: "#ffffc5",
        orange: "#fad9b6",
        blue: "#bae1ff",
        green: "#baffc9",
        purple: "#C3B1E1",
      },
      fontFamily: {
        Raleway: ["Raleway"],
        Cormorant: ["Cormorant Unicase"],
      },
    },
  },
  plugins: [],
};
