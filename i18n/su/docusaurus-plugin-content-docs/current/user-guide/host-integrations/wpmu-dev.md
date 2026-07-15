---
title: Integrasi WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrasi WPMU DEV

## Gambaran Umum {#overview}
WPMU DEV téh mangrupa platform WordPress anu komprehensif nu nawarke hosting, plugin, je layanan pikeun situs WordPress. Integrasi ieu ngabantu sinkronisasi domain otomatis je ngatur sertifikat SSL antara Ultimate Multisite je hosting WPMU DEV.

## Fitur {#features}
- Sinkronisasi domain otomatis
- Ngatur sertifikat SSL
- Upaya verifikasi sertifikat SSL anu diperpanjang

## Persyaratan {#requirements}
Integrasi ieu bakal ngadeukeutan lamun anjeun hosting di WPMU DEV je maké API nu aya dina sistem. Teu perlu konfigurasi tambahan upami anjeun hosting di WPMU DEV.

Integrasi ieu bakal nyaho aya naon `WPMUDEV_HOSTING_SITE_ID`, anu otomatis jadi lamun hosting di WPMU DEV.

## Panduan Setup {#setup-instructions}

### 1. Verifikasi Hosting WPMU DEV {#1-verify-wpmu-dev-hosting}

Lamun anjeun hosting di WPMU DEV, konstanta nu dibutuhkeun parantos aya. Timbangna:

1. Konstanta `WPMUDEV_HOSTING_SITE_ID` parantos didefinisike dina lingkungan anjeun
2. Anjeun gaduh anggota aktif WPMU DEV je akses API

### 2. Aktifkeun Integrasi {#2-enable-the-integration}

1. Di admin WordPress anjeun, indit ka Ultimate Multisite > Settings
2. Pindah ka tab "Domain Mapping"
3. Gulirkeun handap ka bagian "Host Integrations"
4. Aktifkeun integrasi WPMU DEV
5. Klik "Save Changes"

## Kumaha Cara Kerjanya {#how-it-works}

### Sinkronisasi Domain {#domain-syncing}

Lamun domain di-map dina Ultimate Multisite:

1. Integrasi ieu maké API WPMU DEV pikeun nambahan domain ka akun hosting anjeun
2. Ieu ogé otomatis nambah versi www tina domain éta
3. WPMU DEV nu ngurus konfigurasi domain je penerbitan sertifikat SSL

### Ngatur Sertifikat SSL {#ssl-certificate-management}

Integrasi téh diatur pikeun nambahan jumlah upaya verifikasi sertifikat SSL kanggo hosting WPMU DEV, sabab bisa butuh waktos kanggo sertifikat SSL diterbitkeun jeung dipasang. Secara *default*, éta bakal nyobaan nepi ka 10 kali tina verifikasi sertifikat SSL, dibandingkeun jeung standar 5 kali upaya.

## Catatan Penting {#important-notes}

### Ngabersihkeun Domain (Domain Removal) {#domain-removal}

Ayeuna, API WPMU DEV teu ngajak cara pikeun ngabersihkeun domain. Lamun pemetaan domain dibersihkeun dina Ultimate Multisite, domain éta bakal tetep aya di akun hosting WPMU DEV anjeun. Anjeun kudu milih ngabersihkeunana sacara manual tina *dashboard* hosting WPMU DEV lamun perlu.

### Otentikasi API (API Authentication) {#api-authentication}

Integrasi ieu ngagunake kunci API WPMU DEV anu tersimpan dina database WordPress salaku opsi `wpmudev_apikey`. Ieu otomatis diatur nalika anjeun nyambung situs anjeun ka WPMU DEV.

## Troubleshooting {#troubleshooting}

### Masalah Koneksi API (API Connection Issues) {#api-connection-issues}
- Pastike yén situs anjeun geus nyambung kalayan WPMU DEV
- Cek yén opsi `wpmudev_apikey` geus diatur dina database WordPress anjeun
- Pastike keanggotaan WPMU DEV anjeun masih aktif

### Masalah Sertifikat SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- WPMU DEV bisa butuh waktos pikeun ngajadikeun sertifikat SSL (biasana 5-15 menit)
- Integrasi téh diatur pikeun nyobaan nepi ka 10 kali tina verifikasi sertifikat SSL
- Lamun sertifikat SSL masih teu diterbitkeun sanggeus sababar upaya, hubungi *support* WPMU DEV

### Domain Teu Ditambah (Domain Not Added) {#domain-not-added}
- Cek log Ultimate Multisite pikeun aya pesan error naon waé
- Pastike domain éta geus teu aya di WPMU DEV
- Pastike paket hosting WPMU DEV anjeun ngajak jumlah domain anu anjeun tina keur ditambah
