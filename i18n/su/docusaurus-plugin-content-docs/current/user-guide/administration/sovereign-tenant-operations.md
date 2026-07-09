---
title: Operasi Penyewa Berdaulat
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operasi Tenant Berdaulat (Sovereign) {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 nambahin alat operasional kanggo tenant berdaulat (sovereign): subsites sing jalan nganggo database dhewe, filesystem root dhewe, lan konteks routing dhewe, nanging tetep bisa ditemokake dening admin jaringan.

Gunakan halaman iki nalika ngelola situs pelanggan sing terisolasi, serah terima situs jarak jauh (remote-site handoffs), utawa migrasi sing pindhah saka subsites standar menyang infrastruktur berdaulat.

## Apa sing owah kanggo administrator {#what-changes-for-administrators}

- **Autologin tenant tanpa status** — Admin jaringan bisa ngunjungi tenant berdaulat tanpa kudu ngandelake status sesi bareng sing dawa. SSO token iku duwe cakupan tujuan (purpose-scoped), di-pin saka asale (origin-pinned), dilindungi saka pengulangan (replay-protected), lan dibatasi wektu kadaluwarsa sing cendhak.
- **Routing sadar berdaulat** — Jaringan terisolasi lawas lan tenant berdaulat resolver liwat jalur router situs sing padha, ngurangi beda awal antar instalasi lawas lan anyar sing terisolasi.
- **Status migrasi sing diverifikasi** — Verifikasi migrasi ngecek penyediaan pengguna (user provisioning), izin penulis database (database writer permissions), status drain queue, lan ketiadaan tabel lawas sadurunge tenant dianggep rampung.
- **Teardown sing luwih aman** — Teardown berdaulat saiki ngilangake kredensial tenant kanthi resik supaya tenant sing dihapus ora ninggalake akses database sing wis kadaluwarsa.

## Ngunjungi tenant berdaulat {#visiting-a-sovereign-tenant}

1. Buka **Network Admin > Ultimate Multisite > Sites**.
2. Pilih tenant berdaulat kasebut.
3. Gunakake **Visit (SSO)** nalika bisa kanggo ngindari nyalin password utawa nggawe akun admin sementara.

Alur kunjungan (visit flow) bakal nggawe token login sing wektu cendhak kanggo tenant kuwi lan nyatet acara SSO ing jejak audit tenant. Yen tombol kasebut gagal, cek yen domain tenant resolver menyang instalasi sing dikarepake lan yen tenant bisa nyedhaki endpoint SSO sisi jaringan.

## Daftar periksa operasi situs jarak jauh (Remote-site operations checklist) {#remote-site-operations-checklist}

Sadurunge ngowahi tenant berdaulat utawa jarak jauh, konfirmasi:

- Domain penyewa mengarah ke host yang memiliki sistem file penyewa.
- Host database penyewa cocok dengan binding host yang dikonfigurasi untuk instalasi tersebut.
- Perintah verifikasi migrasi berhasil untuk penyewa.
- Antrean migrasi asinkron dikosongkan sebelum melakukan perubahan DNS atau kepemilikan.
- Pengguna admin penyewa telah disediakan selama migrasi dan dapat masuk melalui SSO.

## Menghapus tenant kedaulatan (sovereign tenants) {#deleting-sovereign-tenants}

Menghapus tenant kedaulatan itu merusak data. Pastikan status backup dan ekspor terlebih dahulu, baru hapus dari layar manajemen situs. Alur teardown 1.2.0 akan menghapus kredensial database penyewa sebagai bagian dari pembersihan, tetapi administrator tetap harus memverifikasi bahwa pengguna database tingkat host dan folder sudah hilang saat menggunakan panel hosting eksternal.

:::warning
Jangan hapus tenant kedaulatan selagi verifikasi migrasi masih berjalan atau selagi pekerjaan push asinkron sedang dalam antrean. Tunggu sampai verifikasi selesai agar teardown tidak menghapus kredensial yang dibutuhkan oleh pekerjaan yang tertunda.
:::
