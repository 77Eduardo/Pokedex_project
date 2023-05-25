/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'inset 0px -3px 4px rgba(1, 28, 68, 0.20)',
        'custom2': 'inset 0px -9px 0px rgba(0, 0, 0, 0.18)'
      },
      colors: {
        'third': '#F5DB13',
        'yellow': '#F2B807',
        'pharagraph': '#212121',
      
      },
    },
  plugins: [],
  }
}
