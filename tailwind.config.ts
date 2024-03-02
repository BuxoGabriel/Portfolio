import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-out': 'fade-in-out 3s ease-in-out'
      },
      keyframes: {
        'fade-in-out': {
          '0%, 20%, 80%, 100%': { opacity: '0'},
          '30%, 70%': { opacity: '100'}
        }
      }
    },
  },
  plugins: [],
};
export default config;
