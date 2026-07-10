---
title: Pembaruan Log Pelan Bermeter
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Log Perubahan Metered Plans {#metered-plans-changelog}

Versi 1.1.0 - Dilancar pada 2026-05-05
- Baharu: Pengbilan token AI untuk subsite multisite — jejaki dan kenakan bil penggunaan token AI merentasi tapak pelanggan dengan kadar per-token yang boleh dikonfigurasi.
- Baharu: Penguatkuasaan Konektor dibina semula dengan penemuan had dinamik dan *write-through*, memastikan ketepatan masa nyata merentasi semua konektor.
- Pembaikan: Naik taraf jadual pangkalan data kini selaras dengan definisi skema BerlinDB, mencegah kegagalan naik taraf pada pemasangan baharu.
- Pembaikan: Panggilan balik naik taraf pangkalan data ditukar kepada format yang betul, menyelesaikan kegagalan naik taraf senyap.
- Pembaikan: Nilai pecahan kini diterima dalam medan input Markup Lebihan Penggunaan AI.
- Pembaikan: Menyelesaikan ralat kritikal dan isu inisialisasi berganda semasa memuatkan plugin.
- Peningkatan: Menambah skrip npm check-env supaya persekitaran pembangun dapat mengkonfigurasi diri sendiri semasa larian pertama.

### 1.0.3 {#103}
* Dikemas kini kepada Plugin Update Checker v5
* Menambah tajuk plugin WordPress moden
* Meningkatkan keserasian dengan versi WordPress terkini
* Meningkatkan prestasi penjejakan penggunaan

### 1.0.2 {#102}
* Pembaikan pepijat dan peningkatan prestasi
* Pelaporan penggunaan yang dipertingkatkan

### 1.0.0 {#100}
* Pelancaran awal
* Fungsi pengbilan berukuran teras
* Penjejakan penggunaan dan pengiraan lebihan
* Penjanaan invois automatik
