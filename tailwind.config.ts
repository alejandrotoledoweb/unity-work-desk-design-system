import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--poppins-font)', 'sans-serif'],
        // mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      colors: {
        atoll: {
          '50': '#f2fbfa',
          '100': '#d3f4f1',
          '200': '#a7e8e2',
          '300': '#73d5d0',
          '400': '#47bab9',
          '500': '#2d9f9f',
          '600': '#1f7375',
          '700': '#1f6366',
          '800': '#1d4f52',
          '900': '#1c4345',
          '950': '#0b2528',
        },
      },
    },
  },
  plugins:
    [
      require('flowbite/plugin')
    ],

};
export default config;
