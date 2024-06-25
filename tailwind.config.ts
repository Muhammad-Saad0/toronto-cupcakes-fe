import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Satisfy: ["Satisfy"],
        edu: ['"Edu TAS Beginner"', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        marker: ["Permanent Marker"],
        lobster: ["Lobster Two"],
        itim: ["Itim"],
        fredoka: ["Fredoka"],
        averia: ["Averia Serif Libre"],
        marcellus: ["Marcellus"]
      },
    },
  },
  plugins: [],
};
export default config;
