---
title: Alur Migrasi Kedaulatan
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Alur Migrasi Kedaulatan

Ultimate Multisite: Multi-Tenancy 1.2.0 nambah gerbang verifikasi migrasi buat pindah subsite standar ke infrastruktur tenant kedaulatan (sovereign).

## Sebelum mulai {#before-you-start}

Pastikan kamu sudah punya:

- Cadangan terbaru dari situs sumbernya.
- Addon Multi-Tenancy sudah aktif.
- Database tenant tujuan, root filesystem, dan domain sudah siap.
- Binding host database yang cocok sama lingkungan tujuan.
- Akses untuk menjalankan perintah WP-CLI buat jaringan (network).

## Alur kerja yang disarankan {#recommended-workflow}

1. Siapkan database tenant tujuan dan filesystem.
2. Daftarkan atau perbarui pengaturan isolasi tenant.
3. Jalankan migrasi tenant.
4. Sediakan atau verifikasi pengguna tenant.
5. Kosongkan (drain) pekerjaan migrasi asinkron.
6. Jalankan verifikasi migrasi kedaulatan (sovereign migration verification).
7. Kunjungi tenant dengan SSO.
8. Ganti DNS atau routing baru setelah verifikasi lolos.

## Gerbang verifikasi {#verification-gates}

Alur kerja verifikasi ini ngecek migrasi dari beberapa sudut:

- Skema tenant sudah ada dan bisa ditulis sama penulis database tenant.
- Host database yang dikonfigurasi punya izin (grants) yang valid.
- Pengguna tenant sudah ada dan jumlahnya cocok sama perkiraan pengguna instalasi kedaulatan.
- Antrean push asinkron bisa dikosongkan dengan sukses.
- Jalur data sisi jaringan lama (legacy network-side data paths) tidak lagi diperlukan untuk tenant kedaulatan.

Anggap kegagalan verifikasi sebagai penghalang sebelum peluncuran. Perbaiki masalah database, pengguna, antrean, atau routing yang dilaporkan, lalu jalankan verifikasi lagi sebelum membuka tenant ke pelanggan.

## Kunjungan produksi pertama {#first-production-visit}

Setelah verifikasi lolos, gunakan **Visit (SSO)** dari layar manajemen situs untuk kunjungan admin pertama. Ini memastikan routing tenant, penanganan token SSO, origin pinning, dan penyediaan pengguna sisi tenant dalam satu langkah yang terkontrol.
