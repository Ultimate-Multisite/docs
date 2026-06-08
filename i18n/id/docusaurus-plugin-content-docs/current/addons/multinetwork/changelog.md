---
title: Catatan Perubahan Multi-Jaringan
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Catatan Perubahan Multi-Network

### 1.3.0
* Baru: Pratinjau template jaringan — jelajahi dan pratinjau template jaringan dengan panel langsung sebelum membeli.
* Baru: Pemilih template jaringan saat checkout — pelanggan dapat memilih template jaringan selama alur checkout pendaftaran.
* Baru: SSO magic link lintas jaringan — pelanggan dapat mengakses sub-jaringan dengan mulus melalui otentikasi magic-link.
* Baru: Kloning media jaringan — media situs diduplikasi dengan benar saat mengkloning jaringan dari template.
* Perbaikan: Kloning jaringan sekarang berfungsi tanpa addon multi-tenancy; hak istimewa super admin diberikan kembali setelah kloning.
* Perbaikan: Pembuatan jaringan sekarang kompatibel dengan WooCommerce dan semua gateway pembayaran.
* Perbaikan: Nomor port sekarang disertakan dalam pembuatan domain fallback.
* Perbaikan: CSS pemilih template dipindahkan ke stylesheet yang diantrekan (enqueued) untuk rendering yang benar di semua tema.
* Perbaikan: Perlindungan terhadap kunci `network_id` yang tidak terdefinisi dalam cakupan kueri situs.
* Perbaikan: Pemeriksaan izin jaringan sebelum peralihan konteks mencegah kesalahan properti tabel `wpdb`.

### 1.0.4
* Perbaikan: Membuat jaringan baru.
* Perbaikan: Merender Menu.

### 1.0.3
* Diperbarui ke Plugin Update Checker v5
* Menambahkan header plugin WordPress modern
* Meningkatkan kompatibilitas dengan versi WordPress terbaru

### 1.0.2
* Perbaikan bug dan peningkatan kinerja
* Peningkatan isolasi jaringan

### 1.0.0
* Rilis awal
* Fungsionalitas multi-jaringan inti
* Integrasi dengan Multisite Ultimate
