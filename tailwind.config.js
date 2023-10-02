/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      'redhat': ['Red Hat Display', 'sans-serif'],
    },
    extend: {
      colors: {
        'paleblue': '#e0e8ff',
        'brightblue': '	#3829e0',
        'verypaleblue': '#f5f7ff',
        'desaturatedblue': '#7280a7',
        'darkblue': '#1f2f56',
      }
    },
  },
  plugins: [],
}

