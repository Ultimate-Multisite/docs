---
title: Alur Migrasi Kedaulatan
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Alur Kerja Migrasi Kedaulatan (Sovereign Migration Workflow)

Ultimate Multisite: Multi-Tenancy 1.2.0 menambahkan gerbang verifikasi migrasi untuk memindahkan subsite standar ke infrastruktur penyewa kedaulatan (sovereign tenant).

## Sebelum Anda mulai

Pastikan Anda sudah memiliki:

- Cadangan (backup) situs sumber yang masih berlaku.
- Addon Multi-Tenancy aktif.
- Database, root filesystem, dan domain tenant tujuan sudah siap.
- Pengikatan host database yang sesuai dengan lingkungan tujuan.
- Akses untuk menjalankan perintah WP-CLI untuk jaringan.

## Alur kerja yang direkomendasikan

1. Siapkan database dan filesystem tenant tujuan.
2. Daftarkan atau perbarui pengaturan isolasi tenant.
3. Jalankan migrasi tenant.
4. Sediakan (provision) atau verifikasi pengguna tenant.
5. Kosongkan (drain) pekerjaan migrasi asinkron.
6. Jalankan verifikasi migrasi kedaulatan (sovereign migration verification).
7. Kunjungi tenant menggunakan SSO.
8. Ubah DNS atau routing hanya setelah verifikasi berhasil dilewati.

## Gerbang Verifikasi

Alur kerja verifikasi memeriksa migrasi dari beberapa sudut:

- Skema tenant sudah ada dan dapat ditulis oleh penulis database tenant.
- Host database yang dikonfigurasi memiliki hak akses (grants) yang valid.
- Pengguna tenant sudah ada dan sesuai dengan jumlah pengguna instalasi kedaulatan yang diharapkan.
- Antrean dorong asinkron (async push queue) dapat dikosongkan dengan sukses.
- Jalur data sisi jaringan lama tidak lagi diperlukan untuk tenant kedaulatan.

Anggap kegagalan verifikasi sebagai penghalang pra-peluncuran. Perbaiki masalah database, pengguna, antrean, atau routing yang dilaporkan, lalu jalankan kembali verifikasi sebelum membuka tenant kepada pelanggan.

## Kunjungan produksi pertama

Setelah verifikasi berhasil dilewati, gunakan **Kunjungi (SSO)** dari layar manajemen situs untuk kunjungan admin pertama. Ini mengonfirmasi routing tenant, penanganan token SSO, *origin pinning*, dan penyediaan pengguna sisi tenant dalam satu langkah terkontrol.
