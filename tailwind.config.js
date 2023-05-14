/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'buddha' : 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTud33115g7-szaATwq5B1503_LlsVTNS_dCQ&usqp=CAU")',
        'buddha2' : 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazjXle6be0wZ0AWgC6MjP-D1mchDiuiV7gg&usqp=CAU")',
        'buddha3' : 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZq3fWhU-qfhqLnPDw8FCjyvXHTEjdJfor3Q")',
      },
    },
  },
  plugins: [],
}
