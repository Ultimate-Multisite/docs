---
title: Multi-Tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 nambah kemampuan multi-tenancy Hostinger supaya domain yang di-host bisa ikut proses penyediaan tenant berdaulat (sovereign tenant provisioning) bareng integrasi pemetaan domain Hostinger yang sudah ada.

Gunakan kemampuan ini kalau domain tenant dan infrastruktur tenant yang terisolasi dikelola lewat Hostinger hPanel.

## Catatan pengaturan {#setup-notes}

1. Atur integrasi Hostinger inti di bawah **Ultimate Multisite > Settings > Host Integrations**.
2. Pastikan token API Hostinger bisa mengelola domain atau subdomain tujuan.
3. Aktifkan addon Multi-Tenancy.
4. Konfigurasi strategi isolasi tenant sebelum mempublikasikan tenant tersebut.
5. Jalankan alur verifikasi migrasi sebelum mengirim trafik produksi ke tenant.

Kemampuan Hostinger ini pakai koneksi Hostinger yang sama untuk operasi di sisi host. DNS masih harus mengarah ke akun Hostinger yang benar, dan batasan akun hPanel tetap berlaku.

## Perubahan spesifik kemampuan {#capability-specific-changes}

- Tenant berdaulat (sovereign tenants) bisa dibuat dengan operasi domain yang sadar terhadap host.
- String host database pada mesin yang sama akan dinormalisasi sebelum verifikasi pemberian izin.
- Tenant yang dikelola Hostinger sebaiknya menggunakan nilai host database yang ditampilkan di hPanel kecuali runtime WordPress memerlukan penimpaan lokal.
- Kunjungan SSO bergantung pada resolusi domain tenant ke tenant yang di-host oleh Hostinger.

## Pemecahan masalah tenant Hostinger {#troubleshooting-hostinger-tenants}

- Kalau instalasi tenant gagal, pastikan domain sudah terpasang di akun Hostinger.
- Kalau verifikasi database gagal, bandingkan username DB tenant, nama database, dan binding host dengan hPanel.
- Kalau **Visit (SSO)** gagal, konfirmasi DNS dan SSL aktif untuk domain tenant.
- Kalau proses penghapusan (teardown) meninggalkan sumber daya host, hapus database, user, atau folder yang tersisa dari hPanel setelah memastikan backup sudah aman.
