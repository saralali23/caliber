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
          primary: "#e7ed40",

          secondary: "#a252f2",

          accent: "#66fc58",

          neutral: "#16161d",

          "base-100": "#ffffff",

          info: "#7dbaf7",

          success: "#5eed95",

          warning: "#bd8a14",

          error: "#e6375d",
        },
      },
    ],
  },
};
