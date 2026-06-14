---
title: Produk Domain lan Harga
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produk Domain dan Harga

Produk domain itu cara sampeyan ngontrol harga, TLD (Top-Level Domains), privasi WHOIS, lan pilihan penyedia layanan. Saben produk domain iku produk standar Multisite Ultimate karo tab tambahan **Domain Settings**.

## Membuat produk domain

1. Go menyang **Network Admin › Ultimate Multisite › Products**
2. Klik **Add New**
3. Atur tipe produk dadi **Domain**
4. Konfigurasi tab **Domain Settings** (deleng ing ngisor)
5. Simpan

Produk domain bakal muncul karo lencana ungu **Domain** ing daftar produk lan bisa difilter nganggo tab **Domain Products**.

## Tab pengaturan domain

### Provider

Pilih penyedia registrasi sing bakal ngurus pendaftaran kanggo produk iki. Default-e yaiku **Default provider** global sing diatur ing pengaturan Domain Seller.

### TLD yang didukung

Wanggangake kosong kanggo nggawe **catch-all product** sing berlaku kanggo kabeh TLD sing ora cocok karo produk liyane.

Tulis daftar TLD sing dipisah nganggo koma (contone: `.com, .net, .org`) kanggo nggawe **TLD-specific product** sing mung berlaku kanggo ekstensi kuwi.

**Cara pencocokan produk kerja:** Nalika pelanggan nyari domain, addon bakal milih produk paling spesifik sing cocok. Produk sing duwe `.com` ing daftar TLD-e luwih dhisik tinimbang catch-all product. Yen ora ana produk spesifik TLD sing cocok, catch-all bakal dienggo. Yen ora ana produk sing ana, pencarian domain ora bakal ditunjuka.

### Tipe markup

Ana telung mode sing ngontrol kepiye cara harga eceran sampeyan dihitung saka biaya grosir:

| Mode | Cara kerjane |
|---|---|
| **Percentage** | Nambah persentase ing dhuwur biaya grosir. Markup 20% kanggo domain grosir $10 bakal dadi $12. |
| **Fixed markup** | Nambah jumlah dolar sing tetep (fixed). Markup $5 kanggo domain $10 bakal dadi $15. |
| **Fixed price** | Ngabaake biaya grosir kabeh. Selalu ngitung sesuai jumlah sing sampeyan ketik. |

### Introductory pricing

### Harga perkenalan (Introductory price)

Bisa ngaktifkan penawaran harga diskon untuk tahun pertama. Atur **Harga Perkenalan** (harga tahun 1) yang terpisah dari **Harga Perpanjangan** reguler (tahun ke-2 dan seterusnya). Pelanggan akan melihat kedua harga ini saat checkout jadi mereka tahu apa yang akan terjadi saat perpanjangan.

### Privasi WHOIS

Mengontrol apakah perlindungan privasi WHOIS ditawarkan untuk domain yang didaftarkan melalui produk ini.

| Pengaturan | Perilaku |
|---|---|
| **Dinonaktifkan** | Perlindungan WHOIS tidak pernah ditawarkan atau diaktifkan. |
| **Selalu Termasuk** | Perlindungan WHOIS otomatis aktif saat pendaftaran tanpa biaya. |
| **Pilihan Pelanggan** | Kotak centang akan muncul saat checkout. Atur **Harga Privasi** untuk menagih per tahun, atau biarkan di $0 untuk ditawarkan gratis. |

Untuk Namecheap, privasi WHOIS menggunakan WhoisGuard (selalu gratis). Untuk OpenSRS, ia menggunakan layanan privasi OpenSRS (mungkin ada biaya saat grosir).

---

## Impor dan sinkronisasi TLD

Produk domain menampilkan harga grosir *real-time* yang diambil dari penyedia yang terhubung. Agar ini berfungsi, TLD harus diimpor.

- **Sinkronisasi manual:** Settings › Domain Seller › Sync TLDs (per provider)
- **Sinkronisasi otomatis:** Berjalan setiap hari melalui tugas cron terjadwal di semua penyedia yang dikonfigurasi.

Setelah sinkronisasi, buka tab Pengaturan Domain pada produk domain mana pun dan gunakan pemilih TLD untuk melihat TLD yang tersedia beserta harga grosir mereka saat ini.

---

## Perpanjangan Otomatis (Auto-renewal)

Perpanjangan domain terikat pada status keanggotaan pelanggan:

- Ketika keanggotaan diperbarui dan domain sudah terhubung, perpanjangan domain akan otomatis masuk antrean.
- Upaya perpanjangan menggunakan *payment gateway* aktif pelanggan.
- Perpanjangan yang gagal akan diulang secara otomatis dengan *exponential backoff*.
- Notifikasi email dikirim untuk perpanjangan yang berhasil, kegagalan, dan tanggal kedaluwarsa yang akan datang.

ID template email untuk peristiwa siklus hidup domain:

| Event | Template ID |
|---|---|
| Domain terdaftar | `domain_registered` |
| Domain diperbarui | `domain_renewed` |
| Pembaruan gagal | `domain_renewal_failed` |
| Domain akan segera kedaluwarsa | `domain_expiring_soon` |

---

## Admin: Registrasi domain manual

Kanggo mendaftarkan domain atas nama pelanggan tanpa mereka harus lewat proses checkout:

1. Masuk ke **Network Admin › Ultimate Multisite › Register Domain**
2. Pilih pelanggan lan masukkan nama domainé
3. Isi detail kontak pendaftar (nama, alamat, telepon)
4. Klik **Register**

Catatan domain bakal digawe record lan dihubungkan karo akun pelanggan kasebut.
