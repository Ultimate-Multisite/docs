---
title: Pengaturan dan Konfigurasi Penyedia
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Pengaturan dan Konfigurasi Provider

Addon Domain Seller dilengkapi dengan wizard pengaturan terpandu yang akan memandu Anda melalui setiap langkah yang diperlukan. Halaman ini membahas alur kerja wizard dan cara mengonfigurasi atau mengonfigurasi ulang provider setelahnya.

## Persyaratan

- **Ultimate Multisite** v2.4.12 atau lebih tinggi, diaktifkan di tingkat jaringan (network-activated)
- **PHP** 7.4+
- Kredensial API untuk setidaknya satu registrar yang didukung

## Wizard pengaturan pertama kali

Wizard pengaturan akan berjalan secara otomatis pada pertama kalinya Anda mengaktifkan plugin di tingkat jaringan. Wizard ini juga dapat diakses kapan saja dari **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Langkah 1 — Pilih provider

Pilih registrar yang ingin Anda hubungkan. Opsi yang didukung:

| Provider | Manajemen DNS | Privasi WHOIS |
|---|---|---|
| OpenSRS | Ya | Ya |
| Namecheap | Tidak | Ya (WhoisGuard, gratis) |
| GoDaddy | Tidak | Tidak |
| ResellerClub | Ya | Tidak |
| NameSilo | Tidak | Tidak |
| Enom | Ya | Tidak |

### Langkah 2 — Masukkan kredensial

Setiap provider memiliki kolom kredensial yang berbeda:

**OpenSRS** — Nama pengguna dan kunci pribadi (dari OpenSRS Reseller Control Panel)

**Namecheap** — Nama pengguna dan kunci API (dari Account › Tools › API Access)

**GoDaddy** — Kunci API dan rahasia (dari developer.godaddy.com)

**ResellerClub** — ID Reseller dan kunci API (dari panel kontrol ResellerClub)

**NameSilo** — Kunci API (dari namesilo.com › Account › API Manager)

**Enom** — ID Akun dan token API

Periksa **Sandbox mode** jika tersedia untuk menguji terhadap lingkungan uji coba provider sebelum digunakan secara langsung (live).

### Langkah 3 — Uji koneksi

Klik **Test Connection**. Wizard akan mengirimkan panggilan API ringan untuk memverifikasi kredensial dan konektivitas. Perbaiki masalah kredensial apa pun sebelum melanjutkan.

### Langkah 4 — Impor TLDs

Klik **Import TLDs** untuk menarik semua TLD dan harga grosir yang tersedia dari provider yang terhubung. Ini akan mengisi daftar TLD yang digunakan oleh produk domain. Impor mungkin memakan waktu 30–60 detik untuk provider dengan katalog TLD yang besar.

TLD juga akan disinkronkan ulang secara otomatis sekali sehari melalui tugas cron terjadwal.

### Langkah 5 — Buat produk domain

Wizard akan membuat produk domain *catch-all* default dengan markup 10%. Anda dapat mengedit produk ini segera atau melewati langkah ini dan membuat produk secara manual di **Ultimate Multisite › Products**.

Lihat [Domain Products and Pricing](./domain-products) untuk panduan konfigurasi produk lengkap.

---

## Mengonfigurasi ulang provider

Buka **Network Admin › Ultimate Multisite › Settings › Domain Seller** (atau klik **Settings** di daftar plugin).

Halaman pengaturan berisi:

- **Enable domain selling** — untuk mengaktifkan/menonaktifkan seluruh fitur
- **Default provider** — provider yang digunakan untuk pencarian domain dan produk baru
- **Max TLDs per search** — berapa banyak TLD yang diperiksa saat pelanggan mencari; nilai yang lebih tinggi menampilkan lebih banyak pilihan tetapi lebih lambat
- **Availability cache duration** — berapa lama hasil ketersediaan dan harga disimpan dalam *cache*; nilai yang lebih rendah lebih akurat tetapi meningkatkan panggilan API
- **Manage domain products** — tautan cepat ke daftar Produk
- **Configure providers** — membuka Integration Wizard untuk menambahkan atau mengonfigurasi ulang provider

### Menambahkan provider kedua

Klik **Configure providers** dan jalankan wizard lagi untuk registrar yang baru. Anda dapat mengonfigurasi beberapa provider secara bersamaan. Tetapkan setiap produk domain ke provider tertentu, atau biarkan pada *default*.

### Sinkronisasi TLD secara manual

Di halaman pengaturan, klik **Sync TLDs** di samping provider yang dikonfigurasi untuk menarik harga terbaru. Ini berguna setelah provider memperbarui harga grosir atau menambahkan TLD baru.

---

## Log

Setiap provider menulis ke saluran lognya sendiri. Log dapat dilihat di **Network Admin › Ultimate Multisite › Logs**:

| Saluran log | Isi |
|---|---|
| `domain-seller-registration` | Semua upaya pendaftaran (sukses dan gagal) |
| `domain-seller-renewal` | Hasil tugas perpanjangan |
| `domain-seller-opensrs` | Aktivitas API OpenSRS mentah |
| `domain-seller-namecheap` | Aktivitas API Namecheap mentah |
| `domain-seller-godaddy` | Aktivitas API GoDaddy mentah |
| `domain-seller-resellerclub` | Aktivitas API ResellerClub mentah |
| `domain-seller-namesilo` | Aktivitas API NameSilo mentah |
| `domain-seller-enom` | Aktivitas API Enom mentah |
