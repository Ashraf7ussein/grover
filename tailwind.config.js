/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#F86061",
        customRedLight: "#FDECEC",
        customYellow: "#F9BA45",
        customGreen: "#03A66B",
      },
    },
  },
  plugins: [],
};
