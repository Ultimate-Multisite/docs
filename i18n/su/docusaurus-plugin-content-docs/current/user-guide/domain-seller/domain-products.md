---
title: Produk Domain sareng Harga
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produk Domain jeung Harga {#domain-products-and-pricing}

Produk domain téh cara anjeun ngontrol harga, TLD (Top-Level Domain), privasi WHOIS, jeung pilihan penyedia layanan. Saban produk domain téh mangrupa produk Ultimate Multisite standar anu aya tab **Domain Settings** tambahan.

## Ngadamel produk domain {#creating-a-domain-product}

1. Pergi ka **Network Admin › Ultimate Multisite › Products**
2. Klik **Add New** (Tambah Anyar)
3. Atur tipe produk jadi **Domain**
4. Konfigurasi tab **Domain Settings** (tingali di handap ieu)
5. Simpan

Produk domain bakal muncul kalawan lencana **Domain** warna ungu dina daftar produk je bisa difilter ku tab **Domain Products**.

## Tab pengaturan domain {#domain-settings-tab}

### Penyedia (Provider) {#provider}

Pilih penyedia mana anu ngurus registrasi pikeun produk ieu. Defaultna nyaéta **Default provider** global anu diatur dina pengaturan Domain Seller.

### TLD anu didukung (Supported TLDs) {#supported-tlds}

Tingali kosong pikeun ngadamel **catch-all product** anu berlaku pikeun sakabéh TLD nu teu cocog jeung produk séjén.

Asupkeun daftar TLD anu dipisah ku koma (misal: `.com, .net, .org`) pikeun ngadamel **TLD-specific product** anu ngan ukur berlaku pikeun ekstensi éta.

**Kumaha cara kerja pencocokan produk:** Nalika pelanggan nyari domain, addon bakal milih produk cocog anu paling spesifik. Produk anu aya `.com` dina daftar TLD-na leuwih diprioritaskeun tibatan produk *catch-all*. Upami teu aya produk spesifik TLD anu cocog, mah *catch-all* anu bakal dipaké. Upami teu aya produk, pencarian domain moal ditunjuke.

### Jenis Markup (Markup type) {#markup-type}

Tilul mode ngatur kumaha harga ritel anjeun dihitung tina biaya grosir:

| Mode | Kumaha cara kerjanya |
|---|---|
| **Percentage** | Nambah persentase dina biaya grosir. Markup 20% tina domain grosir $10 bakal jadi $12. |
| **Fixed markup** | Nambah jumlah dolar anu tetep (fixed). Markup $5 tina domain $10 bakal jadi $15. |
| **Fixed price** | Teu ngaliwatan biaya grosir sacara total. Salawasna ngitung jumlah anu anjeun asupkeun. |

### Harga pangawitan (Introductory pricing) {#introductory-pricing}

Aktifkan penawaran harga diskon tahun pertama. Atur **Harga Perkenalan** (harga tahun 1) yang terpisah di samping **Harga Perpanjangan** reguler (tahun ke-2 dan seterusnya). Pelanggan akan melihat kedua harga ini ditampilkan saat checkout, jadi mereka tahu apa yang harus diharapkan saat perpanjangan.

### Privasi WHOIS {#whois-privacy}

Mengontrol apakah perlindungan privasi WHOIS ditawarkan untuk domain yang terdaftar melalui produk ini.

| Pengaturan | Perilaku |
|---|---|
| **Dinonaktifkan** | Perlindungan privasi WHOIS tidak pernah ditawarkan atau diaktifkan. |
| **Selalu Termasuk** | Perlindungan privasi WHOIS diaktifkan secara otomatis saat pendaftaran tanpa biaya. |
| **Pilihan Pelanggan** | Kotak centang akan muncul selama checkout. Atur **Harga Privasi** untuk menagih per tahun, atau biarkan di $0 untuk ditawarkan gratis. |

Untuk Namecheap, privasi WHOIS menggunakan WhoisGuard (selalu gratis). Untuk OpenSRS, ini menggunakan layanan privasi OpenSRS (mungkin ada biaya saat grosir).

---

## Impor dan sinkronisasi TLD {#tld-import-and-sync}

Produk domain menampilkan harga grosir *real-time* yang diambil dari penyedia yang terhubung. Agar ini berfungsi, TLD harus diimpor.

- **Sinkronisasi manual:** Settings › Domain Seller › Sync TLDs (per penyedia)
- **Sinkronisasi otomatis:** Berjalan setiap hari melalui tugas cron terjadwal di semua penyedia yang dikonfigurasi.

Setelah sinkronisasi, buka tab Pengaturan Domain untuk produk domain mana pun dan gunakan pemilih TLD untuk melihat TLD yang tersedia beserta harga grosir mereka saat ini.

---

## Perpanjangan Otomatis (Auto-renewal) {#auto-renewal}

Perpanjangan domain terikat pada status keanggotaan pelanggan:

- Ketika keanggotaan diperbarui dan domain sudah terhubung, perpanjangan domain akan otomatis masuk antrean
- Upaya perpanjangan menggunakan *payment gateway* aktif pelanggan
- Perpanjangan yang gagal akan dicoba lagi secara otomatis dengan *exponential backoff* (penundaan eksponensial)
- Notifikasi email dikirim untuk perpanjangan yang berhasil, kegagalan, dan tanggal kedaluwarsa yang akan datang

ID template email untuk peristiwa siklus hidup domain:

| Event | Template ID |
|---|---|
| Domain terdaftar | `domain_registered` |
| Domain diperpanjang | `domain_renewed` |
| Perpanjangan gagal | `domain_renewal_failed` |
| Domain akan segera kedaluwarsa | `domain_expiring_soon` |

---

## Admin: Registrasi domain manual {#admin-manual-domain-registration}

Kanggo mendaftar domain atas nama pelanggan tanpa mereka harus lewat proses checkout:

1. Pergi ke **Network Admin › Ultimate Multisite › Register Domain**
2. Pilih pelanggan sareng masukkan nama domainna
3. Lengkapi detail kontak pendaftar (nama, alamat, telepon)
4. Klik **Register**

Catatan domain bakal dibuat sareng dihubungkan ka akun pelanggan.
