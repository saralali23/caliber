/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: ["light", "dark"],
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#242424",

          secondary: "#a252f2",

          accent: "#66fc58",

          neutral: "#16161d",

          "base-100": "#f6c802",
          // "base-100": "#ffffff",

          info: "#7dbaf7",

          success: "#5eed95",

          warning: "#bd8a14",

          error: "#e6375d",
        },
        mydark: {
          primary: "#d8c443",

          secondary: "#ba4409",

          accent: "#e8c988",

          neutral: "#ffffff",

          "base-100": "#3d3d3d",

          info: "#82b0ed",

          success: "#34e59e",

          warning: "#8f530a",

          error: "#f8524f",
        },
      },

      "dark",
    ],
  },
};
