import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:"#b82308",
        content:"#545454",
        greyAccent:"#EDEDED",
        greyContent:"#939393",
        buttonDisabled:"#fccbc2",
        orderHeader:"#b82308",
      }
    },
  },
  plugins: [],
};
export default config;