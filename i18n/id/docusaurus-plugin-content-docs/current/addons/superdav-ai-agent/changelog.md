---
title: Catatan Perubahan
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Catatan Perubahan

## 1.16.0 — Dirilis pada 2026-05-20

### Baru

- **Fitur pembuatan logo SVG** — Theme Builder kini dapat menghasilkan dan menyematkan SVG logo kustom dengan sanitasi yang aman dari namespace.
- **Unggah Foto dalam Wawancara Penemuan** — Wawancara penemuan Theme Builder kini menyertakan langkah unggah foto untuk konteks desain yang lebih kaya.
- **Kemampuan Validasi Kontras Palet** — Periksa pasangan warna untuk kepatuhan WCAG sebelum diterapkan ke tema.
- **Menu Perhotelan** — Theme Builder kini dapat menghasilkan halaman menu makanan dan minuman yang terstruktur untuk bisnis perhotelan.
- **Rendering Pratinjau Desktop dan Seluler** — Pratinjau desain Anda di perangkat desktop dan seluler selama pemilihan arah desain.
- **Parameter Label Navigasi** — Kemampuan Buat Menu kini mendukung `navigation_label` yang berbeda dan terpisah dari judul halaman.
- **Ketersediaan Alat Tingkat 1** — sd-ai-agent/site-scrape kini menjadi alat Tingkat 1 yang tersedia secara default di Theme Builder.

### Diperbaiki

- **Cache Klien AI** — kini didukung oleh *transients* untuk persistensi lintas permintaan, mencegah kehilangan data pada tugas agen yang berjalan lama.
- **Tautan Aksi Baris Plugin** — diperbaiki dan diganti nama agar lebih jelas.

## 1.10.0 — Dirilis pada 2026-05-05

### Baru

- **Pencarian Internet Tavily** — menambahkan Tavily sebagai penyedia pencarian untuk hasil pencarian internet yang lebih kaya, bersama dengan Brave Search.
- **Keterampilan Bawaan Sadar Tema** — Panduan keterampilan untuk Block Themes, Classic Themes, Kadence Blocks, dan Kadence Theme kini disertakan dengan plugin.
- **Kemampuan Formulir Kontak Pembuat Situs** — menambahkan formulir kontak ke halaman mana pun langsung dari antarmuka obrolan.

### Ditingkatkan

- **Integrasi WooCommerce Direfaktor** — kini menggunakan API WooCommerce asli untuk keandalan dan kompatibilitas yang lebih baik.
- **Daftar Penyedia Menyegarkan Otomatis** — ketika plugin apa pun diaktifkan atau dinonaktifkan.

### Diperbaiki

- **Kemampuan navigate-to** — memperbaiki *infinite reload loop* pada beberapa halaman admin.
- **Kemampuan list-posts** — kini menyelesaikan nama kategori dan tag ke *slug* dengan benar.
- **Perintah WP-CLI** — memulihkan alias namespace yang hilang setelah refaktor sebelumnya.
- **Otomasi Event** — menangani situs dengan anggun di mana tabel otomatisasi belum dibuat.
- **Kemampuan memory-save** — kini menggunakan awalan namespace yang benar di *system instruction builder*.
- **Hasil Alat Scalar** — kini dibungkus dengan benar sebelum dikembalikan ke AI.
- **Statistik Penggunaan** — kini menangani format kunci kemampuan lama dengan benar saat peningkatan dari versi yang lebih lama.
