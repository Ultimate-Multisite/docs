---
title: 'Pelajaran 3: Mengatur Jaringan Anda'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Pelajaran 3: Menyiapkan Network Anda

Saatnya membangun. Di pelajaran ini, Anda akan menginstal Ultimate Multisite dan mengonfigurasi fondasi network FitSite. Setiap keputusan di sini dibuat dengan mempertimbangkan ceruk pasar (niche) kebugaran.

## Di Mana Kita Berhenti

Kita telah memilih studio kebugaran sebagai ceruk pasar kita dan memvalidasi peluangnya. Sekarang, kita mengubah ide itu menjadi platform yang berfungsi.

## Memilih Hosting Anda

Pilihan hosting Anda jauh lebih penting untuk platform ceruk pasar daripada untuk situs web tunggal. Anda tidak hanya menghosting satu situs—Anda menghosting sebuah network yang akan berkembang menjadi puluhan atau ratusan situs.

### Apa yang Harus Dicari

- **Dukungan WordPress Multisite**: Tidak semua host menangani multisite dengan baik
- **Wildcard SSL**: Penting untuk network berbasis subdomain
- **Sumber Daya yang Skalabel**: Anda membutuhkan ruang untuk tumbuh tanpa harus migrasi
- **Integrasi Ultimate Multisite**: Pemetaan domain dan otomatisasi SSL yang otomatis menghemat banyak upaya operasional

### Pendekatan yang Direkomendasikan

Pilih host dari daftar [Penyedia yang Kompatibel](/user-guide/host-integrations/closte). Penyedia ini telah diuji dengan Ultimate Multisite dan menyediakan integrasi yang Anda butuhkan untuk pemetaan domain dan otomatisasi SSL.

Untuk FitSite, kita akan menggunakan konfigurasi subdomain. Ini berarti situs pelanggan pada awalnya akan muncul sebagai `namastudio.fitsite.com` sebelum mereka secara opsional memetakan domain mereka sendiri.

## Menginstal WordPress Multisite

Jika Anda belum memiliki instalasi WordPress Multisite:

1. Instal WordPress di penyedia hosting Anda
2. Ikuti panduan [Cara Menginstal WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Pilih konfigurasi **subdomain** saat diminta

:::tip Mengapa Subdomain?
Subdomain memberikan alamat unik sendiri untuk setiap situs pelanggan (`studio.fitsite.com`) daripada jalur (`fitsite.com/studio`). Ini lebih profesional bagi pelanggan Anda dan menghindari konflik tautan permanen (permalink conflicts). Lihat [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) untuk perbandingan mendetail.
:::

## Menginstal Ultimate Multisite

Ikuti panduan [Menginstal Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) untuk:

1. Mengunggah dan mengaktifkan plugin di seluruh network
2. Menjalankan [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Selama setup wizard, ingatlah ceruk pasar FitSite:

- **Mata Uang (Currency)**: Atur ke mata uang yang digunakan pelanggan studio kebugaran Anda
- **Nama Perusahaan (Company name)**: "FitSite" (atau nama merek pilihan Anda)
- **Logo Perusahaan (Company logo)**: Unggah logo merek Anda -- ini akan muncul di faktur dan email

## Mengonfigurasi untuk Ceruk Pasar Kebugaran

Setelah Ultimate Multisite terinstal, lakukan pilihan konfigurasi spesifik ceruk pasar ini:

### Pengaturan Umum (General Settings)

Arahkan ke **Ultimate Multisite > Settings** dan konfigurasikan:

- **Nama Situs (Site name)**: FitSite
- **Peran Default (Default role)**: Administrator -- pemilik studio kebugaran membutuhkan kontrol penuh atas konten situs mereka
- **Pendaftaran (Registration)**: Aktifkan pendaftaran pengguna agar pemilik studio dapat mendaftar sendiri

### Konfigurasi Email

Email sistem Anda harus berbicara dalam bahasa ceruk pasar Anda. Arahkan ke **Ultimate Multisite > Settings > Emails** dan sesuaikan:

- Ganti bahasa generik "situs baru Anda" dengan pesan yang spesifik untuk kebugaran
- Contoh subjek sambutan: "Situs web studio kebugaran Anda sudah siap"
- Contoh isi sambutan: Merujuk pada studio, kelas, dan cara memulai situs kebugaran mereka

Kita akan menyempurnakan ini lebih lanjut di Pelajaran 8 (Onboarding Pelanggan), tetapi mengatur nadanya sekarang memastikan bahkan pendaftaran uji coba awal terasa spesifik ceruk pasar.

### Konfigurasi Domain

Jika menggunakan penyedia hosting yang kompatibel, konfigurasikan pemetaan domain sekarang:

1. Arahkan ke **Ultimate Multisite > Settings > Domain Mapping**
2. Ikuti panduan integrasi untuk host spesifik Anda
3. Uji bahwa subsites baru mendapatkan SSL secara otomatis

Ini memastikan bahwa ketika kita mulai membuat template dan situs uji coba di pelajaran berikutnya, semuanya berfungsi dari ujung ke ujung.

## Network FitSite Sejauh Ini

Di akhir pelajaran ini, inilah yang telah Anda miliki:

```
Network FitSite
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (terinstal dan terkonfigurasi)
├── Hosting dengan wildcard SSL
├── Pemetaan domain telah dikonfigurasi
├── Template email spesifik ceruk pasar (awal)
└── Siap untuk template situs (pelajaran berikutnya)
```

## Apa yang Kita Bangun Pelajaran Ini

- **Instalasi WordPress Multisite** yang berfungsi dalam mode subdomain
- **Ultimate Multisite terinstal** dan dikonfigurasi dengan branding FitSite
- **Hosting dan SSL** diatur untuk network yang berkembang
- **Pemetaan domain** dikonfigurasi untuk penyedia hosting Anda
- **Nada email spesifik ceruk pasar** ditetapkan sejak hari pertama

---

**Selanjutnya:** [Pelajaran 4: Membangun Template Ceruk Pasar](lesson-4-templates) -- kita akan membuat template situs yang benar-benar ingin digunakan oleh pemilik studio kebugaran.
