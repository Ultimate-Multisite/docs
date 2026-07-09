---
title: Operasi Penyewa Berdaulat
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operasi Tenant Berdaulat (Sovereign Tenant Operations) {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 menambahkan alat operasional untuk tenant berdaulat (*sovereign tenants*): subsites yang berjalan dengan basis data, *filesystem root*, dan konteks *routing* sendiri sambil tetap terlihat oleh admin jaringan.

Gunakan halaman ini saat mengelola situs pelanggan yang terisolasi, serah terima situs jarak jauh (*remote-site handoffs*), atau migrasi yang memindahkan subsites standar ke infrastruktur berdaulat.

## Apa yang berubah bagi administrator {#what-changes-for-administrators}

- **Autologin tenant tanpa status (*Stateless tenant autologin*)** — Admin jaringan dapat mengunjungi tenant berdaulat tanpa bergantung pada status sesi bersama yang bertahan lama. Token SSO bersifat terbatas ruang tuju (*purpose-scoped*), terikat asal (*origin-pinned*), terlindungi dari pemutaran ulang (*replay-protected*), dan dibatasi hingga jendela kedaluwarsa yang singkat.
- **Routing sadar berdaulat (*Sovereign-aware routing*)** — Jaringan terisolasi lama dan tenant berdaulat diselesaikan melalui jalur *router site* yang sama, mengurangi perbedaan *bootstrap* antara instalasi lama dan baru yang terisolasi.
- **Status migrasi terverifikasi (*Verified migration state*)** — Verifikasi migrasi memeriksa penyediaan pengguna, izin penulis basis data (*database writer permissions*), status pengosongan antrean (*queue drain status*), dan ketiadaan tabel lama sebelum tenant dianggap selesai.
- **Pembongkaran yang lebih aman (*Safer teardown*)** — Pembongkaran berdaulat sekarang menghapus kredensial tenant dengan bersih sehingga tenant yang dihapus tidak meninggalkan akses basis data yang usang.

## Mengunjungi tenant berdaulat {#visiting-a-sovereign-tenant}

1. Buka **Network Admin > Ultimate Multisite > Sites**.
2. Pilih tenant berdaulat tersebut.
3. Gunakan **Visit (SSO)** jika tersedia alih-alih menyalin kata sandi atau membuat akun admin sementara.

Alur kunjungan (*visit flow*) akan membuat token login jangka pendek untuk tenant tersebut dan mencatat peristiwa SSO dalam jejak audit tenant. Jika tombol gagal, periksa apakah domain tenant mengarah ke instalasi yang diharapkan dan apakah tenant dapat mencapai *endpoint* SSO sisi jaringan.

## Daftar periksa operasi situs jarak jauh (*Remote-site operations checklist*) {#remote-site-operations-checklist}

Sebelum mengubah tenant berdaulat atau jarak jauh, konfirmasikan:

- Domain penyewa mengarah ke host yang memiliki sistem file penyewa.
- Host database penyewa cocok dengan binding host yang dikonfigurasi untuk instalasi tersebut.
- Perintah verifikasi migrasi berhasil untuk penyewa.
- Antrean migrasi asinkron dikosongkan sebelum melakukan perubahan DNS atau kepemilikan.
- Pengguna admin penyewa telah disediakan selama migrasi dan dapat masuk melalui SSO.

## Menghapus tenant kedaulatan (sovereign tenants) {#deleting-sovereign-tenants}

Menghapus tenant kedaulatan bersifat merusak. Pastikan status backup dan ekspor terlebih dahulu, baru kemudian hapus dari layar manajemen situs. Alur *teardown* 1.2.0 akan menghapus kredensial database penyewa sebagai bagian dari pembersihan, tetapi administrator tetap harus memverifikasi bahwa pengguna database tingkat host dan folder telah hilang saat menggunakan panel hosting eksternal.

:::warning
Jangan hapus tenant kedaulatan selagi verifikasi migrasi masih berjalan atau selagi pekerjaan *push* asinkron sedang dalam antrean. Tunggu hingga verifikasi selesai agar proses *teardown* tidak menghapus kredensial yang dibutuhkan oleh pekerjaan yang tertunda.
:::
