---
title: Integrasi WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrasi WPMU DEV {#wpmu-dev-integration}

## Gambaran Umum {#overview}
WPMU DEV itu adalah platform WordPress yang lengkap, menawarkan hosting, plugin, dan layanan untuk situs WordPress. Integrasi ini memungkinkan sinkronisasi domain otomatis dan pengelolaan sertifikat SSL antara Ultimate Multisite dan hosting WPMU DEV.

## Fitur {#features}
- Sinkronisasi domain otomatis
- Pengelolaan sertifikat SSL
- Percobaan verifikasi sertifikat SSL yang diperluas

## Persyaratan {#requirements}
Integrasi ini secara otomatis mendeteksi apakah Anda menghosting di WPMU DEV dan menggunakan API bawaan. Tidak perlu konfigurasi tambahan jika Anda menghosting di WPMU DEV.

Integrasi ini memeriksa keberadaan konstanta `WPMUDEV_HOSTING_SITE_ID`, yang secara otomatis didefinisikan saat menghosting di WPMU DEV.

## Instruksi Pengaturan {#setup-instructions}

### 1. Verifikasi Hosting WPMU DEV {#1-verify-wpmu-dev-hosting}

Jika Anda menghosting di WPMU DEV, konstanta yang diperlukan seharusnya sudah terdefinisi. Pastikan:

1. Konstanta `WPMUDEV_HOSTING_SITE_ID` sudah terdefinisi di lingkungan Anda
2. Anda memiliki keanggotaan WPMU DEV yang aktif dengan akses API

### 2. Aktifkan Integrasi {#2-enable-the-integration}

1. Di admin WordPress Anda, buka Ultimate Multisite > Settings
2. Arahkan ke tab "Domain Mapping"
3. Gulir ke bawah ke "Host Integrations"
4. Aktifkan integrasi WPMU DEV
5. Klik "Save Changes"

## Cara Kerjanya {#how-it-works}

### Sinkronisasi Domain {#domain-syncing}

Ketika sebuah domain dipetakan di Ultimate Multisite:

1. Integrasi menggunakan API WPMU DEV untuk menambahkan domain tersebut ke akun hosting Anda
2. Ia juga secara otomatis menambahkan versi www dari domain tersebut
3. WPMU DEV yang menangani konfigurasi domain dan penerbitan sertifikat SSL

### Pengelolaan Sertifikat SSL {#ssl-certificate-management}

Integrasi iki dikonfigurasi kanggo nambah jumlah upaya verifikasi sertifikat SSL kanggo hosting WPMU DEV, amarga bisa suwe kanggo sertifikat SSL di-issue lan diinstal. Biasane, dheweke bakal nyoba nganti 10 wektu kanggo verifikasi sertifikat SSL, luwih akeh tinimbang standar 5 upaya.

## Cathetan Penting {#important-notes}

### Penghapusan Domain {#domain-removal}

Saiki, API WPMU DEV ora duwe cara kanggo ngapus domain. Nalika pemetaan domain dihapus ing Ultimate Multisite, domain kasebut bakal tetep ana ing akun hosting WPMU DEV-mu. Yen perlu, sampeyan kudu ngapus manual saka dashboard hosting WPMU DEV.

### Otentikasi API {#api-authentication}

Integrasi iki nggunakake kunci API WPMU DEV sing disimpen ing database WordPress-mu minangka opsi `wpmudev_apikey`. Iki otomatis diatur nalika sampeyan nyambung situsmu menyang WPMU DEV.

## Pemecahan Masalah (Troubleshooting) {#troubleshooting}

### Masalah Koneksi API {#api-connection-issues}
- Verifikasi yen situsmu wis terhubung kanthi bener menyang WPMU DEV
- Cek yen opsi `wpmudev_apikey` wis diatur ing database WordPress-mu
- Pastikan keanggotaan WPMU DEV-mu aktif

### Masalah Sertifikat SSL {#ssl-certificate-issues}
- WPMU DEV bisa suwe kanggo ngasilake sertifikat SSL (biasane 5-15 menit)
- Integrasi iki dikonfigurasi kanggo nggawa maksimal 10 wektu kanggo ngecek sertifikat SSL
- Yen sertifikat SSL isih ora di-issue sawise upaya akeh, hubungi dukungan WPMU DEV

### Domain Ora Ditambah {#domain-not-added}
- Cek log Ultimate Multisite kanggo pesan error apa wae
- Verifikasi yen domain kasebut wis ora ana ing WPMU DEV
- Pastikan paket hosting WPMU DEV-mu ndukung jumlah domain sing sampeyan tambahi
