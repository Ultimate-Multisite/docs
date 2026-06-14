---
title: Penyiapan dan Konfigurasi Penyedia
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Penjual Domain: Pengaturan dan Konfigurasi Penyedia

Addon Domain Seller dikirim dengan panduan pengaturan yang akan memandu Anda melalui setiap langkah yang diperlukan. Halaman ini membahas alur wizard tersebut dan cara mengkonfigurasi atau mengkonfigurasi ulang penyedia setelahnya.

## Persyaratan

- **Multisite Ultimate** v2.4.12 atau lebih tinggi, diaktifkan jaringan
- **PHP** 7.4+
- Kredensial API untuk setidaknya satu registrar yang didukung

## Wizard pengaturan pertama

Wizard pengaturan akan otomatis berjalan saat Anda mengaktifkan plugin untuk pertama kalinya melalui jaringan. Ini juga bisa diakses kapan saja dari **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Langkah 1 — Pilih penyedia

Pilih registrar yang ingin Anda hubungkan. Pilihan yang didukung:

| Penyedia | Manajemen DNS | Privasi WHOIS |
|---|---|---|
| OpenSRS | Ya | Ya |
| Namecheap | Tidak | Ya (WhoisGuard, gratis) |
| HostAfrica | Ya | Ya (Perlindungan ID) |
| Openprovider | Ya | Ya |
| Hostinger | Melalui pemetaan domain Hostinger inti untuk domain yang di-host | Ya |
| GoDaddy | Tidak | Tidak |
| ResellerClub | Ya | Tidak |
| NameSilo | Tidak | Tidak |
| Enom | Ya | Tidak |

### Langkah 2 — Masukkan kredensial

Setiap penyedia punya kolom kredensial yang berbeda:

**OpenSRS** — Username dan private key (dari OpenSRS Reseller Control Panel)

**Namecheap** — Username dan API key (dari Account › Tools › API Access)

**HostAfrica** — Endpoint API Reseller Domains dan kredensial dari modul reseller HostAfrica. Saat ini tidak ada endpoint sandbox terpisah yang didokumentasikan; coba lakukan pengecekan baca saja yang aman sebelum menjalankan registrasi langsung.

**Openprovider** — Username dan password dengan akses API diaktifkan. Mode sandbox opsional menggunakan Openprovider sandbox API, dan handle pelanggan default opsional bisa digunakan kembali untuk registrasi.

**Hostinger** — Token hPanel Hostinger yang dibagi dari integrasi inti Hostinger. Token yang sama ini dipakai untuk pemetaan domain utama dan operasi pendaftaran Penjual Domain.

**GoDaddy** — API key dan secret (dari developer.godaddy.com)

**ResellerClub** — Reseller ID dan API key (dari panel kontrol ResellerClub)

**NameSilo** — API key (dari namesilo.com › Account › API Manager)

**Enom** — Account ID dan token Anda

Cek **mode Sandbox** jika tersedia untuk menguji coba ke lingkungan tes penyedia sebelum mulai dipakai sungguhan.

### Langkah 3 — Uji koneksi

Klik **Test Connection**. Wizard akan mengirimkan panggilan API ringan untuk memverifikasi kredensial dan konektivitas. Perbaiki masalah kredensial apa pun sebelum lanjut.

### Langkah 4 — Impor TLDs

Klik **Import TLDs** untuk menarik semua TLD yang tersedia dan harga grosir dari penyedia yang terhubung. Ini akan mengisi daftar TLD yang dipakai oleh produk domain. Proses impor mungkin butuh waktu 30–60 detik untuk penyedia dengan katalog TLD yang besar.

TLDs juga akan disinkronkan ulang otomatis sekali sehari melalui jadwal cron job.

### Langkah 5 — Buat produk domain

Wizard akan membuat produk domain *catch-all* (produk penampung) secara default dengan markup 10%. Anda bisa langsung mengedit produk ini atau lewati dan buat produk secara manual di bawah **Ultimate Multisite › Products**.

Lihat [Domain Products and Pricing](./domain-products) untuk panduan konfigurasi produk lengkap.

---

## Mengkonfigurasi ulang penyedia

Buka **Network Admin › Ultimate Multisite › Settings › Domain Seller** (atau klik **Settings** di daftar plugin).

Halaman pengaturan ini berisi:

- **Aktifkan penjualan domain** — nyalakan atau matikan fitur ini sepenuhnya
- **Penyedia default** — penyedia yang dipakai untuk pencarian domain dan produk baru
- **Maksimal TLD per pencarian** — berapa banyak TLD (Top Level Domain) yang akan dicek saat pelanggan mencari; nilai yang lebih tinggi menunjukkan lebih banyak pilihan tapi lebih lambat
- **Durasi cache ketersediaan** — berapa lama hasil ketersediaan dan harga di-cache; nilai yang lebih rendah lebih akurat tapi menambah panggilan API

- **Kelola produk domain** — tautan cepat ke daftar Produk
- **Konfigurasi penyedia** — membuka Integration Wizard untuk menambah atau mengatur ulang penyedia

### Menambahkan penyedia kedua

Klik **Configure providers** dan jalankan wizard lagi untuk registrar yang baru. Kamu bisa punya beberapa penyedia yang dikonfigurasi sekaligus. Tetapkan setiap produk domain ke penyedia tertentu, atau biarkan pada default saja.

### Menyinkronkan TLD secara manual

Di halaman pengaturan, klik **Sync TLDs** di sebelah penyedia yang sudah dikonfigurasi untuk mengambil harga terbaru. Ini berguna setelah suatu penyedia memperbarui harga grosir atau menambahkan TLD baru.

---

## Logs

Setiap penyedia akan menulis ke saluran lognya sendiri. Log bisa dilihat di bawah **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Kabeh upaya registrasi (sukses lan gagal) |
| `domain-seller-renewal` | Hasil pekerjaan renewal |
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

## Catatan kemampuan penyedia (Provider capability notes)

Ora kabeh API registrar nggampangake operasi sing padha. Addon iki nuduhake operasi sing ora didukung kanthi error sing jelas kanggo admin, dudu mung gagal tanpa kabar.

- **HostAfrica** ndukung alur reseller live paling jembar, kalebu pencarian (lookup), sinkronisasi TLD/harga, registrasi, renewal, transfer, pembaruan nameserver, DNS records, EPP codes, registrar lock, lan perlindungan ID.
- **Openprovider** ndukung sinkronisasi TLD harga reseller, registrasi, renewal, transfer, pembaruan nameserver, DNS zones, EPP codes, registrar lock, lan WHOIS privacy. Iki otentikasi nganggo bearer token sing wektu cendhak (short-lived) sing di-refresh otomatis den addon iki.
- **Hostinger** ndukung pencarian ketersediaan (availability search), registrasi, portfolio lookup, pembaruan nameserver, registrar lock, lan WHOIS privacy liwat shared hPanel API token. API Domains publik Hostinger ora nggampangake harga reseller/wholesale, transfer masuk (inbound transfer), renewal eksplisit, utawa pengambilan EPP-code; renewal otomatis wae.
