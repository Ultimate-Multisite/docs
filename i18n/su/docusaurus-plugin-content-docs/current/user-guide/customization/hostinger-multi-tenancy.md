---
title: Multi-Tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 nambah kemampuan multi-tenancy Hostinger sahingga domain yang di-host bisa ikut proses penyediaan tenant berdaulat (sovereign) bareng integrasi pemetaan domain Hostinger yang sudah ada.

Pakai kemampuan ini kalau domain tenant dan infrastruktur tenant yang terisolasi dikelola lewat Hostinger hPanel.

## Catatan pengaturan

1. Atur integrasi inti Hostinger di bawah **Ultimate Multisite > Settings > Host Integrations**.
2. Pastikan token API Hostinger bisa mengelola domain atau subdomain tujuan.
3. Aktifkan addon Multi-Tenancy.
4. Konfigurasi strategi isolasi tenant sebelum mempublikasikan tenant.
5. Jalankan alur verifikasi migrasi sebelum mengirim trafik produksi ke tenant.

Kemampuan Hostinger pakai koneksi Hostinger yang sama untuk operasi sisi host. DNS masih harus mengarah ke akun Hostinger yang benar, dan batasan akun hPanel tetap berlaku.

## Perubahan spesifik kemampuan

- Tenant berdaulat bisa dibuat dengan operasi domain yang sadar host (host-aware).
- String host database mesin yang sama akan dinormalisasi sebelum verifikasi pemberian izin.
- Tenant yang dikelola Hostinger sebaiknya pakai nilai host database yang ditampilkan di hPanel kecuali runtime WordPress butuh penimpaan lokal.
- Kunjungan SSO bergantung pada domain tenant yang menyelesaikan (resolve) ke tenant yang di-host oleh Hostinger.

## Pemecahan masalah tenant Hostinger

- Kalau instalasi tenant gagal, pastikan domain sudah terpasang di akun Hostinger.
- Kalau verifikasi database gagal, bandingkan username DB tenant, nama database, dan binding host dengan hPanel.
- Kalau **Visit (SSO)** gagal, konfirmasi DNS dan SSL aktif untuk domain tenant.
- Kalau proses penghapusan (teardown) meninggalkan sumber daya host, hapus database, user, atau folder yang tersisa dari hPanel setelah memastikan backup sudah aman.
