---
title: Migrasi Mode Pihak Ketiga
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrasi Mode Pihak Ketiga (Third-Party Mode)

Superdav AI Agent v1.12.0 ngarobah cara penanganan kemampuan pihak ketiga. **Mode pihak ketiga ayeuna defaultna jadi auto**, ngajadikeun integrasi WordPress Abilities API asli di WordPress 7.0+ tanpa perlu konfigurasi manual.

## Naon Anu Berubah?

### Saméméan jeung v1.12.0

Kemampuan pihak ketiga butuh konfigurasi manual:

- Anjeun kudu ngaktifkeun "third-party mode" sacara eksplisit
- Kemampuan dimuat tina registry kustom
- Integrasi jeung WordPress Abilities API pilihan (opsional)
- Mode lama (legacy mode) jadi default

### Sanggeus v1.12.0

Kemampuan pihak ketiga bakal jalan otomatis:

- Mode pihak ketiga defaultna jadi "auto"
- Kemampuan ngintegrasi langsung jeung WordPress Abilities API
- Teu perlu konfigurasi manual di WordPress 7.0+
- Mode lama (legacy mode) masih aya pikeun versi WordPress anu leuwih kolot

## Saha Anu Katingali?

### Instalasi Anyar (WordPress 7.0+)

**Teu perlu ngalakukeun naon-naon.** Mode pihak ketiga otomatis diatur jadi "auto", jeung kemampuan bakal langsung jalan tanpa perlu diatur.

### Instalasi Anu Geus Aya

**Pangaturan anjeun bakal tetep aman.** Upami anjeun geus nganggo:

- **Legacy mode**: Anjeun tetep dina mode legacy (teu robah)
- **Manual third-party mode**: Anjeun tetep dina mode manual (teu robah)
- **Auto mode**: Anjeun bakal neraskeun mode auto (teu robah)

### Versi WordPress Saméméan 7.0

**Mode legacy masih aya.** Upami anjeun nganggo WordPress 6.x atawa leuwih kolot:

- Mode pihak ketiga defaultna jadi "legacy"
- Anjeun bisa ngaktifkeun mode pihak ketiga sacara manual upami dipikahoyong
- Naingkeun ka WordPress 7.0+ pikeun ngagunakeun Abilities API asli

## Ngarti Mode-Modeana

### Auto Mode (Default Anyar)

**Auto mode** ngagunakeun integrasi native WordPress Abilities API:

- Kemampuan diregistérkeun lewat WordPress hooks
- Kompatibilitas penuh jeung WordPress 7.0+ Abilities API
- Otomatis néangan kemampuan pihak ketiga
- Teu perlu konfigurasi manual

**Kapan Dipakai**: WordPress 7.0+ dengan kemampuan pihak ketiga

### Mode Manual (Manual Mode)

**Mode manual** butuh pengaturan yang jelas:

- Anda tentukan kemampuan pihak ketiga mana yang mau dimuat
- Berguna buat tes atau memuat kemampuan tertentu saja
- Perlu mengedit file konfigurasi
- Kontrol lebih banyak, tapi persiapan juga lebih banyak

**Kapan Dipakai**: Untuk tes, memuat kemampuan tertentu, atau konfigurasi khusus

### Mode Lama (Legacy Mode)

**Mode lama** pakai sistem kemampuan pihak ketiga yang lama:

- Registri kemampuan kustom (bukan WordPress Abilities API)
- Kompatibel dengan versi WordPress yang lebih lama
- Tidak ada integrasi bawaan WordPress
- Sudah usang tapi masih didukung

**Kapan Dipakai**: Untuk WordPress 6.x atau lebih awal, atau kalau butuh kompatibilitas lama

## Mengecek Mode Saat Ini

### Lewat Admin Panel

1. Pergi ke **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Cari pengaturan **Third-Party Mode**
3. Anda akan lihat mode saat ini dan pilihan untuk mengubahnya

### Lewat Kode (Via Code)

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', atau 'legacy'
```

## Mengubah Mode Anda

### Beralih ke Mode Auto

Kalau Anda pakai WordPress 7.0+ dan mau pakai mode auto:

1. Pergi ke **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Auto (WordPress Abilities API)**
4. Klik **Save**

Superdav AI Agent akan otomatis menemukan dan mendaftarkan kemampuan pihak ketiga.

### Beralih ke Mode Manual

Kalau Anda mau mengontrol secara manual kemampuan mana yang dimuat:

1. Pergi ke **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Manual**
4. Klik **Save**
5. Edit file konfigurasi Anda untuk menentukan kemampuan mana yang mau dimuat

### Beralih ke Mode Legacy

Kalau Anda butuh kompatibilitas lama:

1. Pergi ke **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Legacy**
4. Klik **Save**

## Manfaat Mode Auto

### Penemuan Otomatis (Automatic Discovery)

Kemampuan bakal ditambih secara otomatis tina:

- Plugin anu geus dipasang (Installed plugins)
- Theme anu aktif (Active theme)
- Plugin wajib pake (Must-use plugins)
- Plugin drop-in

Teu perlu daék daftar manual.

### Integrasi Asli (Native Integration)

Kemampuan bakal nyambung jeung WordPress Abilities API:

- Cocok jeung inti WordPress (WordPress core)
- Bisa dipake di admin WordPress
- Kompatibel jeung plugin séjén anu nganggo Abilities API
- Aman pikeun masa depan sabab WordPress terus maju.

### Ngatur Leuwih Gampang (Simplified Management)

- Teu perlu ngedit file konfigurasi
- Teu perlu daék daftar kemampuan manual
- Kontrol Visibilitas Kemampuan bakal otomatis nyieun
- Admin bakal ngirim notifikasi lamun aya kemampuan anu teu diklasifikasi.

### Performa Leuwih Hadé (Better Performance)

- Kemampuan bakal di-*cache* (cached)
- Di-*load* pas dibutuhkeun (Lazy-loaded on demand)
- Optimal pikeun WordPress 7.0+.

## Jalur Migrasi (Migration Path)

### Lamun Anjeun keur WordPress 6.x

1. **Upgrade ka WordPress 7.0+** (lamun geus siap)
2. **Update Superdav AI Agent** ka v1.12.0+
3. **Ubah third-party mode jadi Auto** (opsional; mode legacy masih jalan)
4. **Tinjau visibilitas kemampuan** pikeun mastike kontrol aksesna bener.

### Lamun Anjeun keur WordPress 7.0+

1. **Update Superdav AI Agent** ka v1.12.0+
2. **Verifikasi third-party mode geus diatur jadi Auto** (biasana mah geus kitu)
3. **Tinjau visibilitas kemampuan** pikeun mastike kontrol aksesna bener.
4. **Uji kemampuan pihak ketiga** pikeun mastike éta jalan.

## Troubleshooting

### Kemampuan teu ngabaca dina mode auto

- Pastike anjeun keur WordPress 7.0+
- Cek yén third-party mode geus diatur jadi "Auto"
- Pastike plugin anu nyadiake kemampuan éta aktif
- Cek error log WordPress pikeun salah daék daftar (registration errors).

### Abdi hayang mode legacy tetep dipaké

- Pergi ka **Settings** → **Third-Party Mode**
- Pilih **Legacy**
- Klik **Save**
- Mode legacy bakal terus jalan.

### Kemampuan kustom saya tidak muncul

- Pastikan kemampuan tersebut terdaftar melalui WordPress hooks
- Cek apakah mereka mengimplementasikan Abilities API dengan benar
- Periksa log error WordPress
- Gunakan halaman admin **Ability Visibility** untuk melihat semua kemampuan yang terdaftar

### Saya mendapatkan notifikasi "ability tak diklasifikasikan"

- Ini normal untuk kemampuan pihak ketiga yang baru
- Tinjau dan klasifikasikan mereka di notifikasi admin
- Lihat **Ability Visibility** untuk detail tentang klasifikasi

## Kompatibilitas Mundur (Backward Compatibility)

### Konfigurasi yang Sudah Ada

Jika Anda sudah punya konfigurasi kemampuan pihak ketiga:

- **Mode Legacy**: Konfigurasi Anda masih berfungsi
- **Mode Manual**: Konfigurasi Anda masih berfungsi
- **Mode Auto**: Konfigurasi Anda diabaikan (mode auto akan mengambil alih)

Untuk mempertahankan konfigurasi kustom Anda, tetap gunakan mode Manual atau Legacy.

### Linimasa Penghentian Dukungan (Deprecation Timeline)

- **v1.12.0**: Mode Legacy dan Manual masih didukung penuh
- **v1.13.0+**: Mode Legacy mungkin akan menampilkan notifikasi penghentian dukungan
- **v2.0.0**: Mode Legacy mungkin akan dihapus (Akan ditentukan kemudian)

## Praktik Terbaik (Best Practices)

### Untuk Instalasi Baru

- Gunakan mode Auto (ini adalah pengaturan default)
- Biarkan Superdav AI Agent menemukan kemampuan secara otomatis
- Gunakan Ability Visibility untuk mengontrol akses

### Untuk Instalasi yang Sudah Ada

- Tingkatkan ke WordPress 7.0+ jika memungkinkan
- Beralih ke mode Auto untuk pengelolaan yang lebih sederhana
- Tinjau dan klasifikasikan kemampuan menggunakan Ability Visibility

### Untuk Kemampuan Kustom

- Daftarkan kemampuan melalui WordPress hooks (Abilities API)
- Hindari registri kemampuan kustom
- Uji di WordPress 7.0+ dengan mode Auto

## Langkah Selanjutnya

1. **Cek versi WordPress anjeun**: Pastike anjeun nganggo 7.0+ pikeun Mode Auto
2. **Tinjau mode pihak ketiga anjeun**: Ka Settings terus cek mode anjeun ayeuna
3. **Update lamun perlu**: Ganti ka Mode Auto lamun anjeun nganggo WordPress 7.0+
4. **Klasifikasi kemampuan**: Tinjau jeung klasifikasi kemampuan anu masih teu diklasifikasi
5. **Uji**: Pastike kemampuan pihak ketiga anjeun geus lumangsung kalawan bener

## Topik Terkait

- **Visibilitas Kemampuan (Ability Visibility)**: Ngontrol kemampuan mana waé anu dipamerkeun di mana
- **WordPress Abilities API**: Pelajari ngeunaan registrasi kemampuan WordPress asli
- **Pengembangan Kemampuan Pihak Ketiga (Third-Party Ability Development)**: Bikin kemampuan anu bisa gawé bareng jeung Mode Auto
