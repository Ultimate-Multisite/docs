---
title: Multi-Tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy Hostinger {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 menambahkan kemampuan multi-tenancy Hostinger sehingga domain yang dihosting dapat berpartisipasi dalam penyediaan tenant kedaulatan (sovereign tenant provisioning) bersama dengan integrasi pemetaan domain Hostinger yang sudah ada.

Gunakan kemampuan ini ketika domain tenant dan infrastruktur tenant yang terisolasi dikelola melalui hPanel Hostinger.

## Catatan pengaturan {#setup-notes}

1. Konfigurasikan integrasi Hostinger inti di bawah **Ultimate Multisite > Settings > Host Integrations**.
2. Pastikan token API Hostinger dapat mengelola domain atau subdomain target.
3. Aktifkan addon Multi-Tenancy.
4. Konfigurasikan strategi isolasi tenant sebelum mempublikasikan tenant.
5. Jalankan alur verifikasi migrasi sebelum mengirim lalu lintas produksi ke tenant.

Kemampuan Hostinger menggunakan koneksi Hostinger bersama untuk operasi sisi host. DNS masih harus mengarah ke akun Hostinger yang benar, dan batasan akun hPanel masih berlaku.

## Perubahan spesifik kemampuan {#capability-specific-changes}

- Tenant kedaulatan (sovereign tenants) dapat dibuat dengan operasi domain yang sadar host.
- String host database pada mesin yang sama dinormalisasi sebelum verifikasi pemberian izin.
- Tenant yang dikelola Hostinger harus menggunakan nilai host database yang ditampilkan di hPanel kecuali *runtime* WordPress memerlukan penimpaan lokal (*local override*).
- Kunjungan SSO bergantung pada domain tenant yang menyelesaikan (resolve) ke tenant yang dihosting oleh Hostinger.

## Pemecahan masalah tenant Hostinger {#troubleshooting-hostinger-tenants}

- Jika instalasi tenant gagal, periksa apakah domain sudah terlampir ke akun Hostinger.
- Jika verifikasi database gagal, bandingkan nama pengguna DB tenant, nama database, dan pengikatan host dengan hPanel.
- Jika **Visit (SSO)** gagal, konfirmasikan bahwa DNS dan SSL aktif untuk domain tenant.
- Jika proses penghapusan (*teardown*) meninggalkan sumber daya host yang tertinggal, hapus database, pengguna, atau folder yang tersisa dari hPanel setelah mengonfirmasi cadangan (*backups*).
