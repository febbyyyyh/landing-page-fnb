# Butter & Crumb

Landing page untuk bisnis food and beverage dengan tema bakery bernama **Butter & Crumb**. Website ini menampilkan identitas brand, produk pastry, promo, informasi tentang bakery, serta simulasi pemesanan yang interaktif.

## Fitur Utama

- Responsive layout untuk desktop dan mobile.
- Navigasi ke bagian Home, Menu, About Us, dan Order Now.
- Mobile navigation menu.
- Filter menu berdasarkan kategori pastry.
- Banner promo dan informasi brand.
- Simulasi pemesanan dengan pilihan produk, jumlah, dan tipe order Pickup atau Delivery.
- Perhitungan total harga secara otomatis.
- Tombol scroll to top.
- Favicon menggunakan aset logo brand.

> Catatan: fitur order pada project ini masih berupa simulasi frontend. Data order belum dikirim ke database, WhatsApp, payment gateway, atau backend.

## Teknologi

- React 19
- Vite
- Tailwind CSS
- JavaScript (ES Modules)
- ESLint

## Menjalankan Project di Komputer Lokal

### Prasyarat

Pastikan sudah menginstall:

- Node.js versi 18 atau lebih baru
- npm
- Git, jika ingin meng-clone repository

### Clone repository

```bash
git clone https://github.com/febbyyyyh/landing-page-fnb.git
cd landing-page-fnb
```

### Install dependencies

```bash
npm install
```

### Jalankan development server

```bash
npm run dev
```

Setelah itu buka URL lokal yang muncul di terminal, biasanya `http://localhost:5173`.

## Cara Download Tanpa Git

1. Buka repository di https://github.com/febbyyyyh/landing-page-fnb.
2. Klik tombol **Code**.
3. Pilih **Download ZIP**.
4. Extract file ZIP.
5. Buka folder hasil extract di VS Code atau terminal.
6. Jalankan `npm install`, lalu `npm run dev`.

## Script yang Tersedia

```bash
npm run dev      # Menjalankan development server
npm run build    # Membuat build untuk production
npm run preview  # Menjalankan preview hasil build
npm run lint     # Mengecek masalah pada source code
```

Untuk memeriksa hasil production secara lokal:

```bash
npm run build
npm run preview
```

## Struktur Folder

```text
src/
├── assets/       # Logo dan gambar produk
├── components/   # Komponen Navbar, Hero, Menu, Order, dan lainnya
├── App.jsx       # Susunan halaman utama
├── App.css       # Styling tambahan aplikasi
├── index.css     # Styling global dan konfigurasi Tailwind
└── main.jsx      # Entry point React
public/           # Aset statis yang tidak diproses bundler
index.html        # HTML utama dan metadata favicon
```

## Menggunakan sebagai Referensi

Project ini dapat digunakan sebagai referensi untuk membuat landing page restoran, bakery, cafe, atau bisnis F&B lainnya.

Bagian yang biasanya perlu disesuaikan:

- Ganti nama brand dan copywriting di komponen pada folder `src/components`.
- Ganti gambar produk di `src/assets`.
- Sesuaikan warna dan font di `src/index.css` serta class Tailwind pada komponen.
- Ubah daftar produk, harga, dan kategori di komponen menu dan order.
- Hubungkan form order ke API, database, WhatsApp, atau layanan checkout jika dibutuhkan.
- Ganti `logo.svg` untuk favicon dan identitas visual brand.

Setelah melakukan perubahan, jalankan:

```bash
npm run lint
npm run build
```

## Lisensi dan Penggunaan

Repository ini dibuat sebagai project portfolio dan referensi pembelajaran. Silakan gunakan struktur dan konsepnya sebagai dasar project sendiri, lalu sesuaikan konten, aset, dan integrasi sesuai kebutuhan.
