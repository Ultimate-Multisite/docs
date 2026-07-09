---
title: Produk Domain dan Harga
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produk Domain dan Harga {#domain-products-and-pricing}

Produk domain adalah cara Anda mengontrol penetapan harga, TLD, privasi WHOIS, dan pemilihan penyedia. Setiap produk domain adalah produk standar Ultimate Multisite dengan tab tambahan **Pengaturan Domain** (Domain Settings).

## Membuat produk domain {#creating-a-domain-product}

1. Buka **Network Admin › Ultimate Multisite › Products**
2. Klik **Add New**
3. Atur jenis produk menjadi **Domain**
4. Konfigurasikan tab **Pengaturan Domain** (lihat di bawah)
5. Simpan

Produk domain akan muncul dengan lencana **Domain** berwarna ungu di daftar produk dan dapat difilter menggunakan tab **Produk Domain** (Domain Products).

## Tab pengaturan domain {#domain-settings-tab}

### Penyedia (Provider) {#provider}

Pilih registrar mana yang menangani pendaftaran untuk produk ini. Secara default, ini menggunakan **Penyedia Default** (Default provider) global yang diatur di pengaturan Domain Seller.

### TLD yang didukung (Supported TLDs) {#supported-tlds}

Biarkan kosong untuk membuat **produk *catch-all*** yang berlaku untuk semua TLD yang tidak cocok dengan produk lain.

Masukkan daftar TLD yang dipisahkan koma (misalnya, `.com, .net, .org`) untuk membuat **produk spesifik TLD** yang hanya berlaku untuk ekstensi tersebut.

**Cara kerja pencocokan produk:** Ketika pelanggan mencari domain, *addon* akan memilih produk yang paling spesifik cocok. Produk dengan `.com` dalam daftar TLD-nya akan diprioritaskan daripada produk *catch-all*. Jika tidak ada produk spesifik TLD yang cocok, maka *catch-all* yang digunakan. Jika tidak ada produk yang ada, pencarian domain tidak akan ditampilkan.

### Jenis markup (Markup type) {#markup-type}

Tiga mode mengontrol bagaimana harga ritel Anda dihitung dari biaya grosir:

| Mode | Cara kerjanya |
|---|---|
| **Persentase (Percentage)** | Menambahkan persentase di atas biaya grosir. Markup 20% pada domain grosir $10 akan menghasilkan $12. |
| **Markup tetap (Fixed markup)** | Menambahkan jumlah dolar tetap. Markup $5 pada domain $10 akan menghasilkan $15. |
| **Harga tetap (Fixed price)** | Mengabaikan biaya grosir sepenuhnya. Selalu menagih jumlah yang Anda masukkan. |

### Harga perkenalan (Introductory pricing) {#introductory-pricing}

Aktifkan untuk menawarkan harga tahun pertama yang diskon. Atur **Harga perkenalan** (harga tahun ke-1) terpisah dari **Harga perpanjangan** (Renewal price) reguler (tahun ke-2 dan seterusnya). Pelanggan akan melihat kedua harga ini saat *checkout* sehingga mereka tahu apa yang diharapkan saat perpanjangan.

### Privasi WHOIS (WHOIS privacy) {#whois-privacy}

Mengontrol apakah perlindungan privasi WHOIS ditawarkan untuk domain yang didaftarkan melalui produk ini.

| Pengaturan | Perilaku |
|---|---|
| **Dinonaktifkan (Disabled)** | Privasi WHOIS tidak pernah ditawarkan atau diaktifkan. |
| **Selalu Termasuk (Always Included)** | Privasi WHOIS diaktifkan secara otomatis saat pendaftaran tanpa biaya. |
| **Pilihan Pelanggan (Customer Choice)** | Kotak centang akan muncul saat *checkout*. Atur **Harga Privasi** (Privacy price) untuk ditagih per tahun, atau biarkan $0 untuk menawarkannya secara gratis. |

Untuk Namecheap, privasi WHOIS menggunakan WhoisGuard (selalu gratis). Untuk OpenSRS, ini menggunakan layanan privasi OpenSRS (mungkin memiliki biaya di tingkat grosir).

---

## Impor dan sinkronisasi TLD {#tld-import-and-sync}

Produk domain menampilkan harga grosir *real-time* yang diambil dari penyedia yang terhubung. Agar ini berfungsi, TLD harus diimpor.

- **Sinkronisasi manual:** Settings › Domain Seller › Sync TLDs (per penyedia)
- **Sinkronisasi otomatis:** Berjalan setiap hari melalui *cron job* terjadwal di semua penyedia yang dikonfigurasi

Setelah sinkronisasi, buka tab Pengaturan Domain dari produk domain mana pun dan gunakan pemilih TLD untuk melihat TLD yang tersedia beserta harga grosir saat ini.

---

## Perpanjangan otomatis (Auto-renewal) {#auto-renewal}

Perpanjangan domain terkait dengan status keanggotaan pelanggan:

- Ketika keanggotaan diperpanjang dan domain tertaut, perpanjangan domain akan otomatis dimasukkan ke antrian
- Upaya perpanjangan menggunakan *payment gateway* aktif pelanggan
- Perpanjangan yang gagal akan dicoba ulang secara otomatis dengan *exponential backoff*
- Notifikasi email dikirim untuk perpanjangan yang berhasil, kegagalan, dan kedaluwarsa yang akan datang

ID template email untuk acara siklus hidup domain:

| Acara | ID Template |
|---|---|
| Domain terdaftar | `domain_registered` |
| Domain diperpanjang | `domain_renewed` |
| Perpanjangan gagal | `domain_renewal_failed` |
| Domain akan segera kedaluwarsa | `domain_expiring_soon` |

---

## Admin: Pendaftaran domain manual {#admin-manual-domain-registration}

Untuk mendaftarkan domain atas nama pelanggan tanpa mereka harus melalui *checkout*:

1. Buka **Network Admin › Ultimate Multisite › Register Domain**
2. Pilih pelanggan dan masukkan nama domain
3. Isi detail kontak pendaftar (nama, alamat, telepon)
4. Klik **Register**

Catatan domain akan dibuat dan ditautkan ke akun pelanggan.
