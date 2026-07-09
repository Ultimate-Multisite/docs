---
title: Integrasi Multi-Tenancy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrasi Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 mengubah beberapa titik sentuh integrasi untuk tenant berdaulat, verifikasi migrasi, dan otomatisasi siklus hidup tenant.

## Alur bootstrap tenant

Integrasi yang membuat atau memodifikasi tenant harus mengikuti urutan ini:

1. Selesaikan catatan registri tenant dan model isolasi.
2. Buat atau verifikasi writer basis data tenant.
3. Bootstrap skema tenant.
4. Provision pengguna tenant.
5. Daftarkan routing tenant dan path filesystem.
6. Jalankan verifikasi migrasi sebelum mengekspos tenant.

Jangan berasumsi bahwa tenant berdaulat dapat menggunakan ulang koneksi basis data jaringan. Gunakan registri tenant dan abstraksi writer yang disediakan oleh addon.

## Hook SSO dan REST

Autologin tenant tanpa state menggunakan token berumur pendek dengan klaim tujuan, perlindungan replay JTI, batas kedaluwarsa, dan pinning origin. Integrasi yang menambahkan tombol login atau tautan manajemen jarak jauh harus menghasilkan kunjungan tenant melalui alur SSO yang didukung, bukan menyusun URL login tenant secara langsung.

Event audit API sisi jaringan dan ringkasan harian tersedia untuk gateway tenant berdaulat. Gunakan log tersebut saat men-debug sistem eksternal yang memanggil endpoint siklus hidup tenant.

## URL tindakan pelanggan berdaulat

Ultimate Multisite v2.13.0 merutekan tindakan pelanggan tenant berdaulat kembali ke situs utama untuk alur Account, checkout, penagihan, invoice, situs, pergantian template, dan pemetaan domain. Integrasi yang merender tautan manajemen sisi tenant harus mengarahkan tindakan tersebut ke panel pelanggan situs utama dan menyertakan target kembali yang divalidasi ketika pengguna harus dapat menavigasi kembali ke tenant setelah menyelesaikan tindakan.

Gunakan wrapper SSO inti untuk tautan manajemen lintas-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL yang dihasilkan tetap dapat difilter melalui `wu_sso_url`, yang menerima URL SSO, pengguna saat ini, ID situs target, dan konteks pengalihan. Add-on dapat menggunakan filter tersebut untuk menambahkan konteks khusus penyedia atau mengganti URL broker sambil mempertahankan validasi token Ultimate Multisite.

Jangan menduplikasi state membership, invoice, alamat penagihan, template, atau manajemen domain di dalam tenant berdaulat. Perlakukan dashboard tenant sebagai peluncur dan panel pelanggan situs utama sebagai sistem catatan untuk tindakan yang dikelola.

## Verifikasi migrasi

Setelah integrasi migrasi atau siklus hidup mengubah data tenant, jalankan gate verifikasi:

- `wp tenant verify-no-legacy --site=<site-id>` mengonfirmasi bahwa tenant tidak lagi bergantung pada path sisi jaringan lama.
- `wp tenant verify-sovereign-push --site=<site-id>` mengonfirmasi bahwa job push berdaulat dapat memproses dan mengosongkan antrean.

Integrasi harus memperlakukan verifikasi yang gagal sebagai penghalang deployment dan menghindari menandai tenant sebagai live sampai kegagalan diselesaikan.

## Penghapusan tenant

Alur penghapusan harus memanggil path teardown addon agar kredensial basis data tenant dibersihkan. Integrasi eksternal dapat menghapus resource penyedia setelah teardown berhasil, tetapi tidak boleh menghapus basis data atau folder host saat verifikasi atau job push async masih berjalan.

## Router basis data yang deprecated

`Database_Router` lama telah digantikan oleh stub deprecation. Integrasi baru harus menyelesaikan tenant melalui API router situs saat ini dan registri tenant, bukan bergantung pada class router lama.
