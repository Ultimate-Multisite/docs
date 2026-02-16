---
title: Integrasi WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrasi WPMU DEV

## Gambaran Keseluruhan
WPMU DEV ialah platform WordPress yang menyeluruh, menawarkan hosting, plugin, dan pelbagai perkhidmatan untuk laman WordPress. Integrasi ini membolehkan penyegerakan domain secara automatik serta pengurusan sijil SSL antara Ultimate Multisite dan hosting WPMU DEV.

## Ciri-ciri
- Penyegerakan domain secara automatik
- Pengurusan sijil SSL
- Percubaan pengesahan sijil SSL yang dilanjutkan

## Keperluan
Integrasi ini mengesan secara automatik jika anda menggunakan hosting WPMU DEV dan menggunakan API yang terbina dalam. Tiada konfigurasi tambahan diperlukan jika anda menggunakan hosting WPMU DEV.

Integrasi ini menyemak kehadiran pemalar `WPMUDEV_HOSTING_SITE_ID`, yang ditakrifkan secara automatik apabila menggunakan hosting WPMU DEV.

## Arahan Persediaan

### 1. Sahkan Hosting WPMU DEV

Jika anda menggunakan hosting WPMU DEV, pemalar yang diperlukan sepatutnya sudah ditakrifkan. Pastikan bahawa:

1. Pemalar `WPMUDEV_HOSTING_SITE_ID` telah ditakrifkan dalam persekitaran anda
2. Anda mempunyai keahlian WPMU DEV yang aktif dengan akses API

### 2. Aktifkan Integrasi

1. Dalam admin WordPress anda, pergi ke Ultimate Multisite > Settings
2. Navigasi ke tab "Domain Mapping"
3. Tatal ke bawah ke "Host Integrations"
4. Aktifkan integrasi WPMU DEV
5. Klik "Save Changes"

## Cara Ia Berfungsi

### Penyegerakan Domain

Apabila domain dipetakan dalam Ultimate Multisite:

1. Integrasi menggunakan API WPMU DEV untuk menambah domain ke akaun hosting anda
2. Ia juga menambah versi www domain tersebut secara automatik
3. WPMU DEV mengendalikan konfigurasi domain dan pengeluaran sijil SSL

### Pengurusan Sijil SSL

Integrasi ini dikonfigurasikan untuk meningkatkan bilangan percubaan pengesahan sijil SSL bagi hosting WPMU DEV, kerana ia mungkin mengambil sedikit masa untuk sijil SSL dikeluarkan dan dipasang. Secara lalai, ia akan mencuba sehingga 10 kali untuk pengesahan sijil SSL, berbanding 5 percubaan standard.

## Nota Penting

### Pembuangan Domain

Pada masa ini, API WPMU DEV tidak menyediakan cara untuk membuang domain. Apabila pemetaan domain dibuang dalam Ultimate Multisite, domain tersebut akan kekal dalam akaun hosting WPMU DEV anda. Anda perlu membuangnya secara manual dari dashboard hosting WPMU DEV jika perlu.

### Pengesahan API

Integrasi ini menggunakan kunci API WPMU DEV yang disimpan dalam pangkalan data WordPress anda sebagai pilihan `wpmudev_apikey`. Ini ditetapkan secara automatik apabila anda menyambungkan laman anda ke WPMU DEV.

## Penyelesaian Masalah

### Isu Sambungan API
- Pastikan laman anda disambungkan dengan betul ke WPMU DEV
- Semak bahawa pilihan `wpmudev_apikey` telah ditetapkan dalam pangkalan data WordPress anda
- Pastikan keahlian WPMU DEV anda masih aktif

### Isu Sijil SSL
- WPMU DEV mungkin mengambil sedikit masa untuk mengeluarkan sijil SSL (biasanya 5-15 minit)
- Integrasi ini dikonfigurasikan untuk menyemak sehingga 10 kali bagi sijil SSL
- Jika sijil SSL masih tidak dikeluarkan selepas beberapa percubaan, hubungi sokongan WPMU DEV

### Domain Tidak Ditambah
- Semak log Ultimate Multisite untuk sebarang mesej ralat
- Pastikan domain tersebut belum ditambah ke WPMU DEV
- Pastikan pelan hosting WPMU DEV anda menyokong bilangan domain yang anda tambah
