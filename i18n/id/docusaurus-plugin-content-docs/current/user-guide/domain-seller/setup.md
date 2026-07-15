---
title: Penyiapan dan Konfigurasi Penyedia
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Pengaturan dan Konfigurasi Penyedia

Addon Domain Seller hadir dengan wizard pengaturan terpandu yang memandu Anda melalui setiap langkah yang diperlukan. Halaman ini mencakup alur wizard dan cara mengonfigurasi atau mengonfigurasi ulang penyedia setelahnya.

## Persyaratan {#requirements}

- **Multisite Ultimate** v2.4.12 atau lebih tinggi, diaktifkan di jaringan
- **PHP** 7.4+
- Kredensial API untuk setidaknya satu registrar yang didukung

## Wizard pengaturan pertama kali {#first-run-setup-wizard}

Wizard pengaturan diluncurkan secara otomatis saat pertama kali Anda mengaktifkan plugin di jaringan. Wizard ini juga tersedia kapan saja dari **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Langkah 1 — Pilih penyedia {#step-1--choose-a-provider}

Pilih registrar yang ingin Anda hubungkan. Opsi yang didukung:

| Penyedia | Manajemen DNS | Privasi WHOIS |
|---|---|---|
| OpenSRS | Ya | Ya |
| Namecheap | Tidak | Ya (WhoisGuard, gratis) |
| HostAfrica | Ya | Ya (perlindungan ID) |
| Openprovider | Ya | Ya |
| Hostinger | Melalui pemetaan domain inti Hostinger untuk domain yang di-host | Ya |
| GoDaddy | Tidak | Tidak |
| ResellerClub | Ya | Tidak |
| NameSilo | Tidak | Tidak |
| Enom | Ya | Tidak |

### Langkah 2 — Masukkan kredensial {#step-2--enter-credentials}

Setiap penyedia memiliki field kredensial yang berbeda:

**OpenSRS** — Username dan private key (dari OpenSRS Reseller Control Panel)

**Namecheap** — Username dan API key (dari Account › Tools › API Access)

**HostAfrica** — Endpoint API Domains Reseller dan kredensial dari modul reseller HostAfrica. Tidak ada endpoint sandbox terpisah yang saat ini didokumentasikan; uji dengan pemeriksaan read-only yang aman sebelum menjalankan pendaftaran live.

**Openprovider** — Username dan password dengan akses API diaktifkan. Mode sandbox opsional menggunakan API sandbox Openprovider, dan handle pelanggan default opsional dapat digunakan ulang untuk pendaftaran.

**Hostinger** — Token API hPanel Hostinger bersama dari integrasi inti Hostinger. Token yang sama menjalankan pemetaan domain inti dan operasi pendaftaran Domain Seller.

**GoDaddy** — API key dan secret (dari developer.godaddy.com)

**ResellerClub** — Reseller ID dan API key (dari panel kontrol ResellerClub)

**NameSilo** — API key (dari namesilo.com › Account › API Manager)

**Enom** — Account ID dan token API

Centang **Sandbox mode** jika tersedia untuk menguji terhadap lingkungan pengujian penyedia sebelum live.

### Langkah 3 — Uji koneksi {#step-3--test-the-connection}

Klik **Test Connection**. Wizard mengirim panggilan API ringan untuk memverifikasi kredensial dan konektivitas. Perbaiki masalah kredensial apa pun sebelum melanjutkan.

### Langkah 4 — Impor TLD {#step-4--import-tlds}

Klik **Import TLDs** untuk mengambil semua TLD yang tersedia dan harga grosir dari penyedia yang terhubung. Ini mengisi daftar TLD yang digunakan oleh produk domain. Impor dapat memakan waktu 30–60 detik untuk penyedia dengan katalog TLD besar.

TLD juga disinkronkan ulang secara otomatis sekali per hari melalui cron job terjadwal.

### Langkah 5 — Buat produk domain {#step-5--create-a-domain-product}

Wizard membuat produk domain catch-all default dengan markup 10%. Anda dapat langsung mengedit produk ini atau melewati dan membuat produk secara manual di bawah **Ultimate Multisite › Products**.

Lihat [Produk Domain dan Harga](./domain-products) untuk panduan konfigurasi produk lengkap.

---

## Mengonfigurasi ulang penyedia {#reconfiguring-a-provider}

Buka **Network Admin › Ultimate Multisite › Settings › Domain Seller** (atau klik **Settings** di daftar plugin).

Halaman pengaturan berisi:

- **Enable domain selling** — aktifkan/nonaktifkan seluruh fitur
- **Default provider** — penyedia yang digunakan untuk pencarian domain dan produk baru
- **Max TLDs per search** — berapa banyak TLD yang akan diperiksa saat pelanggan mencari; nilai yang lebih tinggi menampilkan lebih banyak opsi tetapi lebih lambat
- **Availability cache duration** — berapa lama hasil ketersediaan dan harga di-cache; nilai yang lebih rendah lebih akurat tetapi meningkatkan panggilan API
- **Manage domain products** — tautan cepat ke daftar Products
- **Configure providers** — membuka Integration Wizard untuk menambahkan atau mengonfigurasi ulang penyedia

### Menambahkan penyedia kedua {#adding-a-second-provider}

Klik **Configure providers** dan jalankan wizard lagi untuk registrar baru. Anda dapat memiliki beberapa penyedia yang dikonfigurasi secara bersamaan. Tetapkan setiap produk domain ke penyedia tertentu, atau biarkan pada default.

### Menyinkronkan TLD secara manual {#syncing-tlds-manually}

Di halaman pengaturan, klik **Sync TLDs** di sebelah penyedia yang dikonfigurasi untuk mengambil harga terbaru. Ini berguna setelah penyedia memperbarui harga grosir atau menambahkan TLD baru.

---

## Log {#logs}

Setiap penyedia menulis ke channel log-nya sendiri. Log dapat dilihat di bawah **Network Admin › Ultimate Multisite › Logs**:

| Channel log | Isi |
|---|---|
| `domain-seller-registration` | Semua upaya pendaftaran (berhasil dan gagal) |
| `domain-seller-renewal` | Hasil tugas perpanjangan |
| `domain-seller-opensrs` | Aktivitas API OpenSRS mentah |
| `domain-seller-namecheap` | Aktivitas API Namecheap mentah |
| `domain-seller-hostafrica` | Aktivitas API HostAfrica mentah |
| `domain-seller-openprovider` | Aktivitas API Openprovider mentah |
| `domain-seller-hostinger` | Aktivitas API Hostinger mentah |
| `domain-seller-godaddy` | Aktivitas API GoDaddy mentah |
| `domain-seller-resellerclub` | Aktivitas API ResellerClub mentah |
| `domain-seller-namesilo` | Aktivitas API NameSilo mentah |
| `domain-seller-enom` | Aktivitas API Enom mentah |

---

## Catatan kemampuan penyedia {#provider-capability-notes}

Tidak setiap API registrar menyediakan operasi yang sama. Addon menampilkan operasi yang tidak didukung dengan error yang jelas untuk admin, alih-alih gagal secara diam-diam.

- **HostAfrica** mendukung alur kerja reseller live yang paling luas, termasuk pencarian, sinkronisasi TLD/harga, pendaftaran, perpanjangan, transfer, pembaruan nameserver, catatan DNS, kode EPP, registrar lock, dan perlindungan ID.
- **Openprovider** mendukung sinkronisasi TLD dengan harga reseller, pendaftaran, perpanjangan, transfer, pembaruan nameserver, zona DNS, kode EPP, registrar lock, dan privasi WHOIS. Ini mengautentikasi dengan bearer token berumur pendek yang disegarkan secara otomatis oleh addon.
- **Hostinger** mendukung pencarian ketersediaan, pendaftaran, pencarian portofolio, pembaruan nameserver, registrar lock, dan privasi WHOIS melalui token API hPanel bersama. Domains API publik Hostinger tidak mengekspos harga reseller/grosir, transfer masuk, perpanjangan eksplisit, atau pengambilan kode EPP; perpanjangan hanya auto-renew.
