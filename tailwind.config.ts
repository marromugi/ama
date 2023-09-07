import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "tw-",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sumi: {
          900: "#07070A",
          800: "#2a2a2c",
          700: "#474749",
          600: "#5a5a5b",
          500: "#808082",
          400: "#a2a2a4",
          300: "#c8c8ca",
          200: "#dcdcde",
          100: "#eaeaec",
          50: "#f6f6f8",
        },
        sun: {
          500: "#E73D3D",
        },
      },
      opacity: {
        disabled: "0.5",
      },
    },
  },
  plugins: [],
};
export default config;
