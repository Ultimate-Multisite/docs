---
title: Verifikasi Migrasi Kedaulatan
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifikasi Migrasi Kedaulatan (Sovereign Migration Verification) {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 menyertakan perintah verifikasi WP-CLI untuk migrasi tenant kedaulatan (*sovereign*). Gunakan perintah ini jika migrasi tenant, kunjungan SSO, atau instalasi terisolasi tidak berperilaku seperti yang diharapkan.

## Perintah yang harus dijalankan {#commands-to-run}

Jalankan verifikasi dari instalasi WordPress jaringan:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Gunakan ID situs untuk tenant yang Anda migrasikan. Perintah pertama memeriksa apakah tenant tersebut tidak lagi bergantung pada data sisi jaringan lama (*legacy*). Perintah kedua memverifikasi bahwa pekerjaan *sovereign push* dapat diproses dan dikosongkan (*drain*).

## Kegagalan Umum {#common-failures}

### Hak akses database tidak cocok dengan host {#database-grants-do-not-match-the-host}

Jika verifikasi melaporkan kegagalan hak akses (*grant*) atau pengguna penulis (*writer-user*), periksa host database yang dikonfigurasi. `localhost`, `127.0.0.1`, dan nama layanan kontainer adalah *host grant* MySQL yang berbeda. Perbarui pengikatan host tenant atau hak akses database, lalu jalankan kembali verifikasi.

### Instalasi Bedrock atau lokal tidak dapat terhubung {#bedrock-or-local-installs-cannot-connect}

Instalasi Bedrock dan *socket* lokal mungkin melaporkan database sebagai `localhost` sementara *runtime* terhubung melalui alamat yang dinormalisasi. Versi 1.2.0 menormalisasi string host mesin yang sama, tetapi penimpaan host kustom masih dapat bertentangan dengan hak akses database.

### Antrean *push* asinkron tidak dikosongkan (*drain*) {#async-push-queue-does-not-drain}

Jika `verify-sovereign-push` tidak selesai, periksa Action Scheduler atau *async runner* yang dikonfigurasi. Kosongkan pekerjaan yang gagal hanya setelah Anda memastikan bahwa pekerjaan tersebut aman untuk dicoba lagi atau dibuang.

### Jumlah pengguna tenant salah {#tenant-user-count-is-wrong}

Migrasi seharusnya menyediakan pengguna untuk tenant kedaulatan (*sovereign*). Jika pengguna instalasi yang diharapkan hilang, jalankan kembali langkah penyediaan pengguna sebelum mencoba SSO lagi.

### Kunjungan SSO ditolak {#sso-visit-is-rejected}

Otentikasi otomatis penyewa (tenant) tanpa status memerlukan domain penyewa, pin asal (origin pin), tujuan token, nonce, dan masa berlaku harus cocok. Pastikan URL tenant sudah benar dan login akan dicoba segera setelah kunjungan SSO dibuat.

## Kapan harus mencoba lagi {#when-to-retry}

Coba verifikasi setelah setiap perubahan infrastruktur. Jangan beralih lalu lintas produksi, menghapus data sumber, atau menghapus kredensial migrasi sampai semua pemeriksaan verifikasi berhasil.
