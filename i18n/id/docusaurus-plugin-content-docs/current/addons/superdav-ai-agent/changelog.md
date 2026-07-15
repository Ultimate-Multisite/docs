---
title: Changelog
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Log Perubahan

## 1.18.0 — Dirilis pada 2026-06-29 {#1180--released-on-2026-06-29}

### Baru {#new}

- **Alat Google Calendar** — membaca kalender dan acara yang dikonfigurasi untuk otomatisasi yang sadar jadwal
- **Pemetaan kontak dan pembantu peserta** — mencocokkan peserta kalender dengan pengguna dan kontak situs
- **Gerbang persetujuan manusia dan catatan pengingat** — menjeda otomatisasi untuk peninjauan dan menghindari notifikasi duplikat
- **Penyedia SMS TextBee** — mengirim notifikasi pesan teks yang dikonfigurasi melalui TextBee
- **Paket pendamping Advanced** — menambahkan alat filesystem pengembang tepercaya, database, WP-CLI, dispatcher REST, pembuat plugin, snapshot git, manajemen pengguna, dan benchmark yang didistribusikan terpisah dari build WordPress.org

### Ditingkatkan {#improved}

- **Penyiapan layanan Superdav terkelola** — menambahkan endpoint layanan hosted dan penyediaan koneksi otomatis untuk situs yang didukung
- **Pengemasan rilis** — membangun ZIP inti dan Advanced terpisah, menerbitkan keduanya di GitHub, dan hanya mengirim paket inti ke WordPress.org

### Diperbaiki {#fixed}

- **Keandalan permintaan AI** — meningkatkan pemilihan model, timeout permintaan, model penyiapan default, penanganan teks penalaran, dan panduan percobaan ulang untuk pemanggilan alat yang tidak valid
- **Penguatan kalender dan pengingat** — memperkuat token Google Calendar dan deduplikasi pengingat
- **Onboarding dan kelanjutan persetujuan** — memperbaiki peluncuran onboarding frontend dan kelanjutan kemampuan yang dikonfirmasi
- **Masalah tinjauan pengemasan WordPress.org** — menangani masukan tinjauan pengemasan untuk rilis inti

## 1.16.0 — Dirilis pada 2026-05-20 {#1160--released-on-2026-05-20}

### Baru {#new-1}

- **Kemampuan Generate Logo SVG** — Theme Builder kini dapat menghasilkan dan menyematkan SVG logo kustom dengan sanitasi yang aman terhadap namespace
- **Unggah foto dalam wawancara discovery** — wawancara discovery Theme Builder kini menyertakan langkah unggah foto untuk konteks desain yang lebih kaya
- **Kemampuan Validate Palette Contrast** — memeriksa pasangan warna untuk kepatuhan WCAG sebelum diterapkan ke theme
- **Menu hospitality** — Theme Builder kini dapat menghasilkan halaman menu makanan dan minuman terstruktur untuk bisnis hospitality
- **Rendering pratinjau desktop dan seluler** — pratinjau desain Anda di perangkat desktop dan seluler selama pemilihan arah desain
- **Parameter label navigasi** — kemampuan Create Menu kini mendukung `navigation_label` yang berbeda dan terpisah dari judul halaman
- **Ketersediaan alat Tier 1** — sd-ai-agent/site-scrape kini menjadi alat Tier 1 yang tersedia secara default di Theme Builder

### Diperbaiki {#fixed-1}

- **Cache AI Client** — kini didukung oleh transient untuk persistensi lintas-permintaan, mencegah kehilangan data pada tugas agent yang berjalan lama
- **Tautan tindakan baris plugin** — diperbaiki dan diganti namanya agar lebih jelas

## 1.10.0 — Dirilis pada 2026-05-05 {#1100--released-on-2026-05-05}

### Baru {#new-2}

- **Pencarian internet Tavily** — menambahkan Tavily sebagai penyedia pencarian untuk hasil pencarian internet yang lebih kaya bersama Brave Search
- **Skill bawaan yang sadar theme** — panduan skill Block Themes, Classic Themes, Kadence Blocks, dan Kadence Theme kini disertakan dengan plugin
- **Kemampuan formulir kontak pembuat situs** — menambahkan formulir kontak ke halaman mana pun langsung dari antarmuka chat

### Ditingkatkan {#improved-1}

- **Integrasi WooCommerce direfaktor** — kini menggunakan API native WooCommerce untuk keandalan dan kompatibilitas yang lebih baik
- **Daftar penyedia disegarkan otomatis** — saat plugin apa pun diaktifkan atau dinonaktifkan

### Diperbaiki {#fixed-2}

- **Kemampuan navigate-to** — memperbaiki loop muat ulang tak terbatas pada beberapa halaman admin
- **Kemampuan list-posts** — kini dengan benar menyelesaikan nama kategori dan tag menjadi slug
- **Perintah WP-CLI** — memulihkan alias namespace yang hilang setelah refactor sebelumnya
- **Otomatisasi acara** — menangani situs dengan baik ketika tabel otomatisasi belum dibuat
- **Kemampuan memory-save** — kini menggunakan prefix namespace yang benar dalam pembuat instruksi sistem
- **Hasil alat skalar** — kini dibungkus dengan benar sebelum dikembalikan ke AI
- **Statistik penggunaan** — kini menangani format kunci kemampuan lama dengan benar saat upgrade dari versi lama
