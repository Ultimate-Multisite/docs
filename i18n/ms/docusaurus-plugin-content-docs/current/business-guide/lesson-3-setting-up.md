---
title: 'Pelajaran 3: Menyediakan Rangkaian Anda'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Pelajaran 3: Menyiapkan Rangkaian Anda {#lesson-3-setting-up-your-network}

Sudah tiba masanya untuk membina. Dalam pelajaran ini, anda akan memasang Ultimate Multisite dan mengkonfigurasi asas rangkaian FitSite. Setiap keputusan di sini dibuat dengan mengambil kira bidang kecergasan (fitness niche).

## Di Mana Kita Berhenti {#where-we-left-off}

Kita telah memilih studio kecergasan sebagai bidang khusus kita dan mengesahkan peluang ini. Kini, kita akan mengubah idea itu menjadi platform yang berfungsi.

## Memilih Hosting Anda {#choosing-your-hosting}

Pilihan hosting anda lebih penting untuk platform bidang khusus berbanding untuk laman web tunggal. Anda tidak hanya menghoskan satu laman web — anda menghoskan rangkaian yang akan berkembang kepada puluhan atau ratusan laman web.

### Apa yang Perlu Dicari {#what-to-look-for}

- **Sokongan WordPress Multisite**: Tidak semua penyedia hosting mengendalikan multisite dengan baik
- **Wildcard SSL**: Penting untuk rangkaian berasaskan subdomain
- **Sumber yang Boleh Dikembangkan (Scalable resources)**: Anda memerlukan ruang untuk berkembang tanpa perlu berpindah hosting (migrate)
- **Integrasi Ultimate Multisite**: Pemetaan domain dan automasi SSL yang automatik menjimatkan usaha operasi yang besar

### Pendekatan Disyorkan {#recommended-approach}

Pilih host daripada senarai [Penyedia Serasi](/user-guide/host-integrations/closte). Penyedia ini telah diuji dengan Ultimate Multisite dan menyediakan integrasi yang anda perlukan untuk pemetaan domain dan automasi SSL.

Untuk FitSite, kita akan menggunakan konfigurasi subdomain. Ini bermakna laman web pelanggan pada mulanya akan muncul sebagai `namastudio.fitsite.com` sebelum mereka secara pilihan memetakan domain mereka sendiri.

## Memasang WordPress Multisite {#installing-wordpress-multisite}

Jika anda belum mempunyai pemasangan WordPress Multisite:

1. Pasang WordPress pada penyedia hosting anda
2. Ikuti panduan [Cara Memasang WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Pilih konfigurasi **subdomain** apabila diminta

:::tip Mengapa Subdomain?
Subdomain memberikan setiap laman web pelanggan alamat uniknya sendiri (`studio.fitsite.com`) berbanding laluan (`fitsite.com/studio`). Ini lebih profesional untuk pelanggan anda dan mengelakkan konflik permalink. Lihat [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) untuk perbandingan terperinci.
:::

## Memasang Ultimate Multisite {#installing-ultimate-multisite}

Ikuti panduan [Memasang Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) untuk:

1. Muat naik dan aktifkan plugin di seluruh rangkaian
2. Jalankan [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Semasa setup wizard, ingat bidang khusus FitSite:

- **Mata Wang**: Tetapkan kepada mata wang yang digunakan oleh pelanggan studio kecergasan anda
- **Nama Syarikat**: "FitSite" (atau nama jenama pilihan anda)
- **Logo Syarikat**: Muat naik logo jenama anda — ini akan muncul pada invois dan e-mel

## Mengkonfigurasi untuk Bidang Kecergasan {#configuring-for-the-fitness-niche}

Dengan Ultimate Multisite telah dipasang, buat pilihan konfigurasi khusus bidang ini:

### Tetapan Umum (General Settings) {#general-settings}

Pergi ke **Ultimate Multisite > Settings** dan konfigurasikan:

- **Nama Laman**: FitSite
- **Peranan Lalai (Default role)**: Administrator — pemilik studio kecergasan memerlukan kawalan penuh ke atas kandungan laman mereka
- **Pendaftaran (Registration)**: Aktifkan pendaftaran pengguna supaya pemilik studio boleh mendaftar sendiri

### Konfigurasi E-mel (Email Configuration) {#email-configuration}

E-mel sistem anda harus bercakap dalam bahasa bidang khusus anda. Pergi ke **Ultimate Multisite > Settings > Emails** dan sesuaikan:

- Gantikan bahasa generik "laman web baharu anda" dengan mesej yang khusus untuk kecergasan
- Contoh subjek aluan: "Laman web studio kecergasan anda sudah sedia"
- Contoh badan aluan: Rujuk studio, kelas, dan cara memulakan laman kecergasan mereka

Kita akan memperhalusi ini lagi dalam Pelajaran 8 (Pendaftaran Pelanggan), tetapi menetapkan nada sekarang memastikan walaupun pendaftaran ujian awal terasa khusus bidang.

### Konfigurasi Domain (Domain Configuration) {#domain-configuration}

Jika menggunakan penyedia hosting yang serasi, konfigurasikan pemetaan domain sekarang:

1. Pergi ke **Ultimate Multisite > Settings > Domain Mapping**
2. Ikuti panduan integrasi untuk host anda yang spesifik
3. Uji bahawa subsites baharu mendapat SSL secara automatik

Ini memastikan bahawa apabila kita mula mencipta templat dan laman ujian dalam pelajaran seterusnya, semuanya berfungsi dari hujung ke hujung.

## Rangkaian FitSite Setakat Ini {#the-fitsite-network-so-far}

Pada akhir pelajaran ini, inilah yang anda miliki:

```
Rangkaian FitSite
├── WordPress Multisite (mod subdomain)
├── Ultimate Multisite (dipasang dan dikonfigurasi)
├── Hosting dengan Wildcard SSL
├── Pemetaan domain dikonfigurasi
├── Templat e-mel khusus bidang (awalan)
└── Sedia untuk templat laman (pelajaran seterusnya)
```

## Apa Yang Kita Bina Dalam Pelajaran Ini {#what-we-built-this-lesson}

- **Pemasangan WordPress Multisite** yang berfungsi dalam mod subdomain
- **Ultimate Multisite dipasang** dan dikonfigurasi dengan jenama FitSite
- **Hosting dan SSL** disediakan untuk rangkaian yang berkembang
- **Pemetaan domain** dikonfigurasi untuk penyedia hosting anda
- **Nada e-mel khusus bidang** ditetapkan dari hari pertama

---

**Seterusnya:** [Pelajaran 4: Membina Templat Bidang Khusus](lesson-4-templates) — kita akan mencipta templat laman yang benar-benar ingin digunakan oleh pemilik studio kecergasan.
