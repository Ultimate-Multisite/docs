---
title: Catatan Perubahan Rencana Berbayar
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Catatan Perubahan Paket Berbasis Meteran

Versi 1.1.0 - Dirilis pada 2026-05-05
- Baru: Penagihan token AI untuk subsites multisite — lacak dan tagih penggunaan token AI di berbagai situs pelanggan dengan tarif per token yang dapat dikonfigurasi.
- Baru: Penegakan konektor dibangun ulang dengan penemuan batas dinamis dan *write-through*, memastikan akurasi waktu nyata di semua konektor.
- Perbaikan: Peningkatan tabel database kini selaras dengan definisi skema BerlinDB, mencegah kegagalan peningkatan pada instalasi baru.
- Perbaikan: Callback peningkatan database diubah ke format yang benar, menyelesaikan kegagalan peningkatan senyap.
- Perbaikan: Nilai pecahan kini diterima di kolom input Markup Kelebihan Penggunaan AI.
- Perbaikan: Menyelesaikan kesalahan fatal dan masalah inisialisasi ganda saat memuat plugin.
- Peningkatan: Menambahkan skrip npm check-env sehingga lingkungan pengembang dapat mengonfigurasi diri sendiri pada kali pertama dijalankan.

### 1.0.3
* Diperbarui ke Plugin Update Checker v5
* Menambahkan *header* plugin WordPress modern
* Meningkatkan kompatibilitas dengan versi WordPress terbaru
* Meningkatkan kinerja pelacakan penggunaan

### 1.0.2
* Perbaikan *bug* dan peningkatan kinerja
* Pelaporan penggunaan yang ditingkatkan

### 1.0.0
* Rilis awal
* Fungsionalitas penagihan metered inti
* Pelacakan penggunaan dan perhitungan kelebihan penggunaan
* Pembuatan faktur otomatis
