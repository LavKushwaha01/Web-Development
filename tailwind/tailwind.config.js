/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
  red: { 
    500: "blue"  // now we changed the name of blue as red-500 when red-500 is use it's implement blue
  }
      },
      screens:{
        md:'780px',
        lg:'1024',  // changed breakpoint from default tailwind
      }
    },
  },
  plugins: [],
}

