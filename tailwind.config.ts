import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        quotes: "rgba(191, 187, 180, 0.15) 0px 16px 48px",
        clutch: "rgba(0, 0, 0, 0.25) 0px 16px 48px",
        partner: "rgba(0, 0, 0, 0.25) 0px 16px 48px",
      },
      scrollBehavior: ["smooth"],
      colors: {
        primary: "#FF782C",
      },
      keyframes: {
        "ring-blazity": {
          "0%": {
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
          },
          "50%": {
            boxShadow: "0 0 0 0.5rem rgba(255,120,44,0.4)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
          },
        },
        circular: {
          "0%": {
            transform: "rotate(0deg) translate(-165px) rotate(0deg) ",
          },
          // "20%": { transform: "resize(1.2)" },
          // "40%": { transform: "resize(1)" },
          // "60%": { transform: "resize(1.2)" },
          // "80%": { transform: "resize(1)" },
          "100%": {
            transform: "rotate(360deg) translate(-165px) rotate(-360deg)",
          },
        },
        circular2: {
          "0%": {
            transform: "rotate(0deg) translate(200px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translate(200px) rotate(-360deg)",
          },
        },
        circular3: {
          "0%": {
            transform: "rotate(0deg) translate(-150px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translate(-150px) rotate(-360deg)",
          },
        },
        scroll: {
          "0%": {
            transform: "translate(0%)",
          },

          "100%": {
            transform: "translate(-50%)",
          },
        },
      },
      animation: {
        "ring-blazity": "ring-blazity 2s ease-in alternate infinite",
        circular: "circular 30s linear infinite ",
        circular2: "circular2 33s linear infinite ",
        circular3: "circular3 50s linear infinite ",
        scroll: "scroll 8s linear infinite backwards",
      },
    },
  },
  plugins: [],
};
export default config;
