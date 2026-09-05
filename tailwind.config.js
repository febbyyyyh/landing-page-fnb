/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#1D4ED8',
        brandCream: '#FDFBF7', // Background krem terang seperti di gambar
        brandDark: '#3D2C2E',  // Cokelat gelap untuk warna teks judul
      },
      fontFamily: {
        display: ['"Lilita One"', '"Arial Rounded MT Bold"', '"Cooper Black"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}