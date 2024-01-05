/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D348B",
        secondary: "#E6AF2E",
        accent: "#FF5E5B",
        neutral: "#E0E2DB",
        "base-100": "#ffffff",
        info: "#008395",
        success: "#00896b",
        warning: "#ffb700",
        error: "#ff6264",
        black: "#191716",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3D348B",
          secondary: "#E6AF2E",
          accent: "#FF5E5B",
          neutral: "#E0E2DB",
          "base-100": "#ffffff",
          info: "#008395",
          success: "#00896b",
          warning: "#ffb700",
          error: "#ff6264",
          black: "#191716",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    themeRoot: ":root",
  },
};
