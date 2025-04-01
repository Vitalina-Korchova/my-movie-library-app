/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componentsLanding/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tabl: { max: "1251px", min: "860px" },
        xss: { max: "732px" },
        tel: { min: "240px", max: "454px" },
        telS: { max: "375px" },
      },
    },
  },
  plugins: [],
};
