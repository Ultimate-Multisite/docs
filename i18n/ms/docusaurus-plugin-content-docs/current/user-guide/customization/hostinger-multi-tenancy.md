---
title: Multi-Tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy Hostinger

Ultimate Multisite: Multi-Tenancy 1.2.0 menambah keupayaan multi-tenancy Hostinger supaya domain yang dihoskan boleh menyertai penyediaan tetamu berdaulat (sovereign tenant provisioning) bersama integrasi pemetaan domain Hostinger sedia ada.

Gunakan keupayaan ini apabila domain tetamu dan infrastruktur tetamu yang terasing diurus melalui hPanel Hostinger.

## Nota persediaan {#setup-notes}

1. Konfigurasikan integrasi Hostinger teras di bawah **Ultimate Multisite > Settings > Host Integrations**.
2. Sahkan bahawa token API Hostinger boleh mengurus domain atau subdomain sasaran.
3. Aktifkan addon Multi-Tenancy.
4. Konfigurasikan strategi pengasingan tetamu sebelum menerbitkan tetamu tersebut.
5. Jalankan aliran kerja pengesahan migrasi sebelum menghantar trafik pengeluaran ke tetamu.

Keupayaan Hostinger menggunakan sambungan Hostinger yang dikongsi untuk operasi sisi hos (host-side operations). DNS masih perlu menunjuk kepada akaun Hostinger yang betul, dan had akaun hPanel masih terpakai.

## Perubahan spesifik keupayaan {#capability-specific-changes}

- Tetamu berdaulat boleh dicipta dengan operasi domain yang sedar hos (host-aware domain operations).
- String hos pangkalan data mesin yang sama akan dinormalisasikan sebelum pengesahan pemberian hak.
- Tetamu yang diurus oleh Hostinger harus menggunakan nilai hos pangkalan data yang ditunjukkan dalam hPanel melainkan runtime WordPress memerlukan lebihan tempatan (local override).
- Lawatan SSO bergantung pada domain tetamu menyelesaikan kepada tetamu yang dihoskan oleh Hostinger.

## Penyelesaian masalah tetamu Hostinger {#troubleshooting-hostinger-tenants}

- Jika pemasangan tetamu gagal, sahkan bahawa domain sudah dilekatkan kepada akaun Hostinger.
- Jika pengesahan pangkalan data gagal, bandingkan nama pengguna DB tetamu, nama pangkalan data, dan pengikatan hos dengan hPanel.
- Jika **Visit (SSO)** gagal, sahkan DNS dan SSL aktif untuk domain tetamu.
- Jika proses pembuangan meninggalkan sumber hos yang tidak perlu, padam sebarang pangkalan data, pengguna, atau folder yang tinggal daripada hPanel selepas mengesahkan sandaran (backups).
