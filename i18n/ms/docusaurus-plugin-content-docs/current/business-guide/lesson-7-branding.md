---
title: 'Pelajaran 7: Menjadikannya Milik Anda'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Pelajaran 7: Menjadikannya Milik Anda

Pelanggan anda tidak seharusnya rasa seperti mereka menggunakan "satu plugin WordPress." Mereka seharusnya rasa seperti mereka menggunakan FitSite — sebuah platform yang dibina khas untuk industri mereka. Pelajaran ini merangkumi penjenamaan (branding), *white-labeling*, dan cara menjadikan platform ini terasa seperti sebuah produk yang lengkap.

## Di Mana Kita Berhenti

FitSite sudah mempunyai aliran *checkout* yang berfungsi, yang membawa pemilik studio kecergasan dari pemilihan pelan kepada laman web yang aktif. Sekarang, kita akan menjadikan keseluruhan pengalaman ini terasa seperti produk berjenama yang padu.

## Domain Platform Anda

Asas jenama anda adalah domain anda. Untuk FitSite:

- **Domain utama**: `fitsite.com` (laman pemasaran dan akar rangkaian anda)
- **Laman pelanggan**: `studioname.fitsite.com` (subdomain)
- **Domain tersuai**: Pelanggan pada pelan Growth dan Pro boleh memetakan domain mereka sendiri

### Menetapkan Domain Anda

1. Daftar domain platform anda
2. Arahkannya ke penyedia hosting anda
3. Konfigurasi DNS *wildcard* (`*.fitsite.com`) untuk subdomain pelanggan
4. Pastikan SSL *wildcard* aktif

Sila lihat [Cara Mengkonfigurasi Pemetaan Domain](/user-guide/domain-mapping/how-to-configure-domain-mapping) untuk arahan terperinci.

## *White-Labeling* Pengalaman Admin

Apabila pemilik studio kecergasan log masuk ke *dashboard* laman mereka, mereka seharusnya melihat jenama anda, bukan jenama WordPress atau Ultimate Multisite.

### Halaman Log Masuk Tersuai

Sesuaikan halaman log masuk WordPress untuk memaparkan:

- Logo FitSite anda
- Imej latar belakang yang sesuai untuk kecergasan
- Warna jenama anda

### Penjenamaan Dashboard

Gunakan *addon* [Admin Page Creator](/addons/admin-page-creator) atau CSS tersuai untuk:

- Menggantikan logo WordPress dengan logo FitSite anda
- Menyesuaikan skema warna admin agar sepadan dengan jenama anda
- Menambah *widget* *dashboard* tersuai dengan pautan pantas dan sumber bantuan khusus kecergasan

### Halaman Admin Tersuai

Pertimbangkan untuk mencipta halaman admin tersuai yang memaparkan tindakan yang paling relevan untuk pemilik studio kecergasan:

- "Sunting Jadual Kelas Anda"
- "Kemas Kini Profil Jurulatih"
- "Lihat Laman Anda"

Ini mengurangkan lengkungan pembelajaran dengan meletakkan tindakan yang sangat relevan di hadapan, berbanding menyembunyikannya dalam menu standard WordPress.

## Menjenamakan Komunikasi Anda

Setiap e-mel, invois, dan notifikasi harus mengukuhkan jenama anda.

### E-mel Sistem

Navigasi ke **Ultimate Multisite > Settings > Emails** dan sesuaikan semua e-mel sistem:

- **Nama pengirim**: FitSite
- **E-mel pengirim**: hello@fitsite.com
- **Templat e-mel**: Gunakan warna dan logo jenama anda
- **Bahasa**: Khusus kecergasan di seluruhnya

E-mel utama yang perlu disesuaikan:

| E-mel | Versi Umum | Versi FitSite |
|-------|----------------|-----------------|
| Selamat Datang | "Laman web baharu anda sudah sedia" | "Laman web studio kecergasan anda sudah aktif" |
| Resit Pembayaran | "Pembayaran diterima" | "Pembayaran langganan FitSite disahkan" |
| Percubaan Tamat | "Percubaan anda akan tamat tidak lama lagi" | "Percubaan FitSite anda tamat dalam 3 hari — kekalkan laman web studio anda aktif" |

### Invois

Sesuaikan templat invois dengan:

- Logo dan warna jenama FitSite anda
- Butiran perniagaan anda
- Nama produk khusus kecergasan (bukan ID pelan umum)

## Laman Web Berhadapan Pelanggan

Domain utama anda (`fitsite.com`) memerlukan laman pemasaran yang menjual platform ini. Ini berbeza daripada admin rangkaian Ultimate Multisite — ia adalah wajah awam perniagaan anda.

Halaman utama:

- **Laman Utama**: Cadangan nilai yang jelas untuk perniagaan kecergasan
- **Ciri-ciri**: Apa yang dilakukan oleh FitSite, dalam istilah kecergasan
- **Harga**: Tiga pelan anda dengan perbandingan ciri khusus niche
- **Contoh**: Paparkan laman web yang dibina di atas platform
- **Daftar**: Pautan ke borang *checkout* anda

:::tip Laman Pemasaran Anda Boleh Menjadi Laman Rangkaian
Cipta laman pemasaran anda sebagai laman dalam rangkaian anda sendiri. Ini membolehkan anda mengurusnya dari *dashboard* yang sama dan menunjukkan keupayaan platform anda sendiri.
:::

## Domain Tersuai untuk Pelanggan

Bagi pelanggan yang menggunakan pelan yang merangkumi domain tersuai, dokumentasikan proses ini dengan jelas:

1. Pelanggan mendaftar atau memindahkan domain mereka ke pendaftar domain
2. Pelanggan mengemas kini DNS untuk menunjuk ke platform anda (sediakan rekod yang tepat)
3. Ultimate Multisite mengendalikan pemetaan domain dan SSL

Cipta artikel bantuan atau entri pangkalan pengetahuan khusus untuk proses ini, ditulis untuk pemilik studio kecergasan yang bukan teknikal.

## Rangkaian FitSite Setakat Ini

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Apa Yang Kita Bina Dalam Pelajaran Ini

- **Domain platform dan DNS** dikonfigurasi untuk pengalaman berjenama
- **Admin *white-label*** dengan jenama FitSite di seluruh tempat
- **Komunikasi yang disesuaikan** — e-mel, invois, dan notifikasi semuanya berjenama
- **Laman pemasaran** yang menjual FitSite kepada pemilik studio kecergasan
- **Dokumentasi domain tersuai** untuk pelanggan yang mahukan domain mereka sendiri

---

**Seterusnya:** [Pelajaran 8: Onboarding Pelanggan](lesson-8-onboarding) — kita akan reka pengalaman yang mengubah pendaftaran baharu menjadi pelanggan yang aktif dan gembira.
