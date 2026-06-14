---
title: Migrasi Mode Pihak Ketiga
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrasi Mode Pihak Ketiga (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 ngubah cara kemampuan pihak ketiga ditangani. **Mode pihak ketiga saiki otomatis**, ngaktifkan integrasi WordPress Abilities API asli di WordPress 7.0+ tanpa perlu konfigurasi manual.

## Apa yang Berubah?

### Sebelum v1.12.0

Kemampuan pihak ketiga butuh konfigurasi manual:

- Kamu harus mengaktifkan "third-party mode" secara eksplisit
- Kemampuan dimuat dari registry kustom
- Integrasi dengan WordPress Abilities API itu opsional (bisa dipilih)
- Mode lama (legacy mode) adalah yang default

### Setelah v1.12.0

Kemampuan pihak ketiga kerja otomatis:

- Mode pihak ketiga default ke "auto"
- Kemampuan terintegrasi langsung sama WordPress Abilities API
- Ora perlu konfigurasi manual di WordPress 7.0+
- Mode lama (legacy mode) isih bisa dipakai kanggo versi WordPress sing luwih lawas

## Sapa Sing Kena Dampak?

### Instalasi Anyar (WordPress 7.0+)

**Ora perlu tindakan.** Mode pihak ketiga otomatis diatur ke "auto", lan kemampuan langsung kerja tanpa perlu diatur maneh.

### Instalasi Sing Wis Ana

**Pengaturan sampeyan tetep aman.** Yen sampeyan nganggo:

- **Legacy mode**: Sampeyan tetep ana ing legacy mode (ora owah)
- **Manual third-party mode**: Sampeyan tetep ana ing manual mode (ora owah)
- **Auto mode**: Sampeyan tetep nganggo auto mode (ora owah)

### Versi WordPress Sadurunge 7.0

**Legacy mode isih bisa dipake.** Yen sampeyan nganggo WordPress 6.x utawa luwih lawas:

- Mode pihak ketiga default ke "legacy"
- Sampeyan isih bisa ngaktifake mode pihak ketiga manual yen pengin
- Upgrade menyang WordPress 7.0+ kanggo nggunakake Abilities API asli

## Ngerti Mode-Mode Kasebut

### Auto Mode (Default Anyar)

**Auto mode** nggunakake integrasi native WordPress Abilities API:

- Kemampuan diregistrasi liwat WordPress hooks
- Kompatibilitas penuh karo Abilities API WordPress 7.0+
- Otomatis nemokake kemampuan pihak ketiga
- Ora perlu konfigurasi manual

**Kapan Menggunakan**: WordPress 7.0+ dengan kemampuan pihak ketiga

### Mode Manual

**Mode manual** butuh pengaturan yang jelas (eksplisit):

- Kamu tentukan kemampuan pihak ketiga mana yang mau dimuat
- Berguna buat tes atau kalau cuma mau memuat kemampuan tertentu aja
- Perlu mengedit file konfigurasi
- Kontrolnya lebih banyak, tapi persiapan juga lebih banyak

**Kapan Menggunakan**: Untuk testing, memuat kemampuan tertentu, atau kalau butuh pengaturan khusus

### Mode Legacy

**Mode legacy** pakai sistem kemampuan pihak ketiga yang lama:

- Registri kemampuan kustom (bukan WordPress Abilities API)
- Kompatibel dengan versi WordPress yang lebih lama
- Nggak ada integrasi bawaan WordPress
- Sudah usang tapi masih didukung

**Kapan Menggunakan**: Untuk WordPress 6.x atau lebih lama, atau kalau butuh kompatibilitas lama

## Mengecek Mode Kamu Sekarang

### Lewat Admin Panel

1. Buka **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Cari pengaturan **Third-Party Mode**
3. Di sana kamu akan lihat mode kamu sekarang dan pilihan untuk mengubahnya

### Lewat Kode

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', atau 'legacy'
```

## Mengubah Mode Kamu

### Beralih ke Auto Mode

Kalau kamu pakai WordPress 7.0+ dan mau pakai auto mode:

1. Buka **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Auto (WordPress Abilities API)**
4. Klik **Save**

Superdav AI Agent akan otomatis menemukan dan mendaftarkan kemampuan pihak ketiga yang ada.

### Beralih ke Manual Mode

Kalau kamu mau kontrol sendiri kemampuan mana yang dimuat:

1. Buka **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Manual**
4. Klik **Save**
5. Edit file konfigurasi kamu untuk menentukan kemampuan mana yang mau dimuat

### Beralih ke Legacy Mode

Kalau kamu butuh kompatibilitas lama:

1. Tindak menyang **Superdav AI Agent** → **Settings**
2. Cari **Third-Party Mode**
3. Pilih **Legacy**
4. Klik **Save**

## Manfaat Mode Auto

### Penemuan Otomatis

Kemampuan akan otomatis ditemukan dari:

- Plugin yang terpasang
- Tema yang aktif
- Plugin wajib pakai (Must-use plugins)
- Plugin drop-in

Ora perlu daftar manual.

### Integrasi Asli (Native Integration)

Kemampuan bakal nyambung karo WordPress Abilities API:

- Cocok karo inti WordPress
- Bisa kerja sama admin WordPress
- Kompatibel karo plugin lain yang nganggo Abilities API
- Siap buat masa depan pas WordPress di-update

### Manajemen Lebih Gampang

- Ora perlu ngedit file konfigurasi
- Ora perlu daftarin kemampuan secara manual
- Kontrol visibilitas kemampuan bakal otomatis jalan
- Admin bakal ngasih tahu sampeyan yen ana kemampuan sing durung diklasifikasi

### Performa Luwih Apik

- Kemampuan di-cache (disimpan sementara)
- Di-load pas dibutuhake (lazy-loaded on demand)
- Dioptimalkan kanggo WordPress 7.0+

## Jalur Migrasi

### Yen sampeyan lagi nganggo WordPress 6.x

1. **Upgrade menyang WordPress 7.0+** (yen wis siap)
2. **Update Superdav AI Agent** dadi v1.12.0+
3. **Ganti third-party mode dadi Auto** (opsional; mode legacy isih iso kerja)
4. **Tinjau visibilitas kemampuan** kanggo mastiake kontrol akses bener

### Yen sampeyan lagi nganggo WordPress 7.0+

1. **Update Superdav AI Agent** dadi v1.12.0+
2. **Verifikasi third-party mode wis di-set dadi Auto** (biasane wis otomatis)
3. **Tinjau visibilitas kemampuan** kanggo mastiake kontrol akses bener
4. **Uji coba kemampuan pihak ketiga** kanggo mastiake iso kerja

## Pemecahan Masalah (Troubleshooting)

### Kemampuan ora muncul pas mode auto

- Pastikan sampeyan lagi nganggo WordPress 7.0+
- Cek yen third-party mode wis di-set dadi "Auto"
- Pastikan plugin sing nyediakake kemampuan kuwi aktif
- Cek error log WordPress kanggo kesalahan registrasi

### Aku pengin tetep nganggo mode legacy

- Tindak menyang **Settings** → **Third-Party Mode**
- Pilih **Legacy**
- Klik **Save**
- Mode legacy bakal terus iso kerja

### Kemampuan kustomku ora muncul

- Pastikan kemampuanmu terdaftar lewat WordPress hooks
- Cek apakah kamu sudah menerapkan Abilities API dengan benar
- Periksa log error WordPress
- Gunakan halaman admin **Ability Visibility** untuk melihat semua kemampuan yang terdaftar

### Aku dapat notifikasi "ability tidak diklasifikasikan"

- Ini normal untuk kemampuan pihak ketiga yang baru
- Tinjau dan klasifikasikan mereka di notifikasi admin
- Lihat **Ability Visibility** untuk detail tentang klasifikasi

## Kompatibilitas Mundur (Backward Compatibility)

### Konfigurasi yang Sudah Ada

Jika kamu sudah punya konfigurasi kemampuan pihak ketiga:

- **Mode Legacy**: Konfigurasi kamu masih bisa jalan
- **Mode Manual**: Konfigurasi kamu masih bisa jalan
- **Mode Auto**: Konfigurasi kamu diabaikan (mode auto akan mengambil alih)

Untuk menjaga konfigurasi kustommu, tetap gunakan mode Manual atau Legacy.

### Linimasa Penghentian Dukungan (Deprecation Timeline)

- **v1.12.0**: Mode Legacy dan Manual masih didukung penuh
- **v1.13.0+**: Mode Legacy mungkin akan menampilkan notifikasi penghentian dukungan
- **v2.0.0**: Mode Legacy mungkin akan dihapus (masih ditunggu kepastiannya)

## Praktik Terbaik (Best Practices)

### Untuk Instalasi Baru

- Gunakan mode Auto (ini yang paling umum/default)
- Biarkan Superdav AI Agent menemukan kemampuan secara otomatis
- Gunakan Ability Visibility untuk mengontrol akses

### Untuk Instalasi yang Sudah Ada

- Upgrade ke WordPress 7.0+ kalau memungkinkan
- Ganti ke mode Auto agar pengelolaannya lebih gampang
- Tinjau dan klasifikasikan kemampuan menggunakan Ability Visibility

### Untuk Kemampuan Kustom

- Daftarkan kemampuan lewat WordPress hooks (Abilities API)
- Hindari membuat registri kemampuan kustom sendiri
- Uji coba di WordPress 7.0+ dengan mode Auto

## Langkah Selanjutnya

1. **Cek versi WordPress sampeyan**: Pastikan sampeyan pakai 7.0+ supaya bisa pakai mode Auto
2. **Tinjau mode pihak ketiga sampeyan**: Masuk ke Settings lan cek mode sampeyan saiki piye
3. **Update yen perlu**: Ganti menyang mode Auto yen sampeyan wis nganggo WordPress 7.0+
4. **Klasifikasi kemampuan**: Tinjau lan klasifikasi kemampuan sing durung diklasifikasi
5. **Uji coba**: Pastikan kemampuan pihak ketiga sampeyan kerja kanthi bener

## Topik Terkait

- **Ability Visibility**: Ngontrol kemampuan endi sing bakal krosokake ing ngendi
- **WordPress Abilities API**: Pelajari babagan registrasi kemampuan WordPress asli
- **Third-Party Ability Development**: Gawe kemampuan sing cocok karo mode Auto
