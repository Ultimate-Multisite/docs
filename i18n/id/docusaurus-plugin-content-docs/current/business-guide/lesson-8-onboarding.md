---
title: 'Pelajaran 8: Orientasi Pelanggan'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Pelajaran 8: Onboarding Pelanggan {#lesson-8-customer-onboarding}

Membuat pelanggan mendaftar hanyalah setengah dari pekerjaan. Jika mereka berhasil login, merasa kewalahan, dan akhirnya tidak kembali lagi, berarti Anda telah kehilangan mereka. Pelajaran ini merancang pengalaman yang mengubah pendaftaran baru menjadi pelanggan yang aktif dan terlibat.

## Di Mana Kita Berhenti {#where-we-left-off}

FitSite sudah sepenuhnya diberi *branding* dengan alur *checkout* yang berfungsi. Sekarang kita fokus pada apa yang terjadi setelah pemilik studio kebugaran menyelesaikan pendaftaran dan pertama kali mendarat di situs baru mereka.

## Mengapa Onboarding Itu Penting {#why-onboarding-matters}

30 menit pertama setelah pendaftaran menentukan apakah pelanggan akan bertahan atau berhenti menggunakan layanan Anda. Pemilik studio kebugaran yang:

- Login dan melihat situs yang sudah terlihat seperti situs kebugaran → akan bertahan
- Tahu persis apa yang harus dilakukan selanjutnya → akan bertahan
- Merasa tersesat di *dashboard* WordPress yang generik → akan pergi

Template niche Anda (Pelajaran 4) menangani poin pertama. Pelajaran ini menangani poin kedua.

## Pengalaman Login Pertama {#the-first-login-experience}

### Widget Dashboard Selamat Datang {#welcome-dashboard-widget}

Buat *widget dashboard* kustom yang menyambut pelanggan baru dan memandu mereka melalui proses penyiapan. Ini harus muncul secara menonjol saat mereka pertama kali login.

**FitSite Quick Start:**

1. **Tambahkan nama studio dan logo Anda** -- Tautkan ke pengaturan Customizer atau Site Identity
2. **Perbarui jadwal kelas Anda** -- Tautkan langsung ke editor halaman Classes
3. **Tambahkan pelatih Anda** -- Tautkan ke editor halaman Trainers
4. **Atur detail kontak Anda** -- Tautkan ke editor halaman Contact
5. **Pratinjau situs Anda** -- Tautkan ke *frontend*

Setiap langkah menautkan langsung ke halaman atau pengaturan yang relevan. Tidak perlu mencari-cari di menu.

### Menyederhanakan Dashboard {#simplify-the-dashboard}

Pelanggan baru tidak perlu melihat setiap item menu WordPress. Pertimbangkan:

- Menyembunyikan item menu yang tidak relevan dengan manajemen situs kebugaran (misalnya, Komentar jika tidak digunakan)
- Mengatur ulang urutan menu untuk menempatkan item yang paling sering digunakan di awal
- Menambahkan label menu kustom yang masuk akal untuk niche tersebut ("Studio Anda" alih-alih "Appearance")

Addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) dapat membantu mengontrol apa yang dilihat pelanggan.

## Urutan Email Selamat Datang {#welcome-email-sequence}

Satu email selamat datang saja tidak cukup. Atur urutan yang memandu pelanggan selama minggu pertama mereka:

### Email 1: Selamat Datang (Segera setelah mendaftar) {#email-1-welcome-immediately-after-signup}

- Subjek: "Selamat datang di FitSite -- situs web studio Anda sudah aktif"
- Konten: Tautan login, langkah awal cepat, tautan ke sumber daya bantuan
- Nada: Antusias, mendorong, spesifik ke kebugaran

### Email 2: Kemenangan Cepat (Hari 1) {#email-2-quick-wins-day-1}

- Subjek: "3 hal yang harus dilakukan pertama kali di FitSite Anda"
- Konten: Tambahkan logo Anda, perbarui gambar hero beranda, tambahkan jadwal kelas
- Sertakan tangkapan layar yang menunjukkan dengan tepat tempat untuk mengklik

### Email 3: Jadikan Milik Anda (Hari 3) {#email-3-make-it-yours-day-3}

- Subjek: "Buat situs kebugaran Anda menonjol"
- Konten: Kustomisasi warna, tambahkan foto pelatih, tulis kisah studio Anda
- Tautkan ke contoh situs kebugaran hebat di platform

### Email 4: Siap Tayang (Hari 7) {#email-4-go-live-day-7}

- Subjek: "Siap membagikan FitSite Anda ke dunia?"
- Konten: Daftar periksa hal yang perlu diverifikasi sebelum dibagikan, cara menghubungkan domain kustom (jika menggunakan Growth/Pro), tips berbagi media sosial

:::tip Otomatisasi Email
Gunakan [Webhooks](/user-guide/integrations/webhooks) atau [Zapier](/user-guide/integrations/zapier) untuk memicu email ini melalui platform pemasaran email Anda. Ini memberi Anda lebih banyak kontrol atas waktu dan memungkinkan Anda melacak keterlibatan.
:::

## Sumber Daya Bantuan {#help-resources}

Buat konten bantuan spesifik niche yang menjawab pertanyaan yang sebenarnya diajukan oleh pemilik studio kebugaran:

### Artikel Knowledge Base {#knowledge-base-articles}

- "Cara memperbarui jadwal kelas Anda"
- "Menambah dan mengedit profil pelatih"
- "Mengubah logo dan warna studio Anda"
- "Menghubungkan nama domain Anda sendiri" (untuk pelanggan Growth/Pro)
- "Menambahkan widget pemesanan ke situs Anda"

Tulis ini untuk pengguna non-teknis. Gunakan tangkapan layar. Hindari jargon WordPress.

### Video Panduan {#video-walkthroughs}

Rekaman layar singkat (2-3 menit) yang menunjukkan:

- Login pertama dan orientasi
- Mengedit beranda
- Memperbarui jadwal kelas
- Menambahkan pelatih baru

Ini tidak perlu menjadi produksi yang sempurna. Yang penting adalah jelas, membantu, dan spesifik niche.

## Halaman Akun {#the-account-page}

Ultimate Multisite menyertakan [Halaman Akun](/user-guide/client-management/account-page) yang dilihat pelanggan di mana pelanggan mengelola langganan mereka. Kustomisasi ini untuk:

- Menampilkan paket FitSite mereka saat ini
- Menampilkan opsi peningkatan dengan manfaat spesifik kebugaran
- Menyediakan riwayat penagihan dan unduhan faktur
- Menautkan ke sumber daya bantuan

## Mengukur Keberhasilan Onboarding {#measuring-onboarding-success}

Lacak indikator-indikator ini untuk mengetahui apakah onboarding Anda berhasil:

- **Activation rate**: Berapa persentase pendaftar yang benar-benar menyesuaikan situs mereka dalam minggu pertama?
- **Login minggu pertama**: Berapa kali pelanggan baru login selama minggu pertama mereka?
- **Tiket dukungan dari pelanggan baru**: Volume yang tinggi berarti onboarding Anda memiliki celah
- **Konversi dari uji coba ke berbayar**: Jika Anda menawarkan uji coba, berapa persentase yang konversi?

## FitSite Network Sejauh Ini {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Apa yang Kita Bangun di Pelajaran Ini {#what-we-built-this-lesson}

- **Pengalaman login pertama yang terpandu** dengan widget Quick Start
- **Dashboard yang disederhanakan** berfokus pada tugas manajemen situs kebugaran
- **Urutan email selamat datang** yang memandu pelanggan selama minggu pertama mereka
- **Sumber daya bantuan spesifik niche** yang ditulis untuk pemilik studio kebugaran non-teknis
- **Metrik onboarding** untuk melacak dan meningkatkan pengalaman

---

**Selanjutnya:** [Pelajaran 9: Penetapan Harga untuk Keuntungan](lesson-9-pricing) -- kita menyempurnakan strategi penetapan harga untuk memaksimalkan pendapatan dan meminimalkan *churn*.
