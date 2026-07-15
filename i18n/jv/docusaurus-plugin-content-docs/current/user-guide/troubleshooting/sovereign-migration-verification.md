---
title: Verifikasi Migrasi Kedaulatan
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifikasi Migrasi Kedaulatan

Ultimate Multisite: Multi-Tenancy 1.2.0 nggawa perintah verifikasi WP-CLI kanggo migrasi tenant kedaulatan (sovereign). Gunakna perintah iki yen migrasi tenant, kunjungan SSO, utawa instalasi terisolasi ora tumindak kaya sing dikarepake.

## Perintah kang kudu dijalankan {#commands-to-run}

Jalankan verifikasi saka instalasi WordPress ing jaringan:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Gunakake ID situs kanggo tenant sing arep dimigrasikake. Perintah kapisan ngcek yen tenant ora mbutuh data jaringan lawas (legacy). Perintah kapindho ngverifikasi yen pekerjaan sovereign push bisa diproses lan dikosongake (drain).

## Kegagalan umum {#common-failures}

### Hak akses database ora cocog karo host {#database-grants-do-not-match-the-host}

Yen verifikasi nuduh ana kegagalan hak akses utawa writer-user, cek host database sing dikonfigurasi. `localhost`, `127.0.0.1`, lan nama layanan kontainer iku host MySQL grant sing beda. Update binding host tenant utawa hak akses database, banjur jalankan verifikasi maneh.

### Instalasi Bedrock utawa lokal ora bisa nyambung {#bedrock-or-local-installs-cannot-connect}

Instalasi Bedrock lan socket lokal mungkin nuduhake database minangka `localhost` nalika runtime nyambung liwat alamat sing normalisasi (normalized address). Versi 1.2.0 normalisasi string host ing mesin sing padha, nanging override host kustom isih bisa konflik karo hak akses database.

### Antrean push asinkron ora dikosongake (drain) {#async-push-queue-does-not-drain}

Yen `verify-sovereign-push` ora rampung, cek Action Scheduler utawa async runner sing dikonfigurasi. Kosongake pekerjaan sing gagal mung sawise mastiake yen wis aman kanggo dicoba maneh utawa dibuang.

### Jumlah user tenant salah {#tenant-user-count-is-wrong}

Migrasi kudu nyedhiyakake user kanggo tenant kedaulatan (sovereign). Yen install user sing dikarepake ilang, jalankan maneh langkah penyediaan user sadurunge nyoba SSO maneh.

### Kunjungan SSO ditolak {#sso-visit-is-rejected}

Autologin tenant tanpa status (stateless) butuh domain tenant, origin pin, tujuan token, nonce, dan masa berlaku harus cocok. Pastikan URL tenant sudah benar dan coba login sebentar setelah membuat kunjungan SSO.

## Kapan perlu dicoba lagi {#when-to-retry}

Coba verifikasi setelah setiap perubahan infrastruktur. Jangan ganti trafik produksi, hapus data sumber, atau hapus kredensial migrasi sampai semua pengecekan verifikasi berhasil.
