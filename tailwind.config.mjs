const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      grey: {
		50: "#6E7380",
		100: "#5F6573",
		200: "#4F5465",
		300: "#404552",
		400: "#333840",
		500: "#262A34",
		600: "#1A1D23",
		700: "#101217",
      },
      purple: {
		DEFAULT: "#BB86FC",
		50: "#F2EBFE",
		100: "#E4D8FC",
		200: "#D6C5FA",
		300: "#C9B2F9",
		400: "#BB9FF7",
		500: "#BB86FC",
		600: "#AA72F8",
		700: "#995EF5",
		800: "#884AF1",
		900: "#7736ED",
      },


    },
  },
};