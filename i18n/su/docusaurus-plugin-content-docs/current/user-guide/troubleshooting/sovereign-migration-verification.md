---
title: Verifikasi Migrasi Kedaulatan
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifikasi Migrasi Kedaulatan (Sovereign Migration Verification) {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 ngandung perintah verifikasi WP-CLI kanggo migrasi tenant kedaulatan (sovereign). Gunakna perintah iki nalika migrasi tenant, kunjungan SSO, utawa instalasi terisolasi ora tumindak kaya sing dikarepake.

## Perintah kang kudu dijalanke {#commands-to-run}

Jalankan verifikasi saka instalasi WordPress ing jaringan:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Gunakake ID situs kanggo tenant sing arep dimigrasikake. Perintah kapisan ngcek yen tenant ora mbutuh data jaringan lawas (legacy). Perintah kapindho ngverifikasi yen pekerjaan sovereign push bisa diproses lan dikosongake (drain).

## Kegagalan umum {#common-failures}

### Hak akses database ora cocog karo host {#database-grants-do-not-match-the-host}

Yen laporan verifikasi nuduh kegagalan hak akses utawa writer-user, cek host database sing dikonfigurasi. `localhost`, `127.0.0.1`, lan nama layanan kontainer iku host MySQL grant sing beda. Update binding host tenant utawa hak akses database, banjur jalankan verifikasi maneh.

### Instalasi Bedrock utawa lokal ora bisa nyambung {#bedrock-or-local-installs-cannot-connect}

Instalasi Bedrock lan socket lokal mungkin nuduh database minangka `localhost` nalika runtime nyambung liwat alamat sing normalisasi (normalized address). Versi 1.2.0 normalisasi string host ing mesin sing padha, nanging override host kustom isih bisa konflik karo hak akses database.

### Antrean push asinkron ora dikosongake (drain) {#async-push-queue-does-not-drain}

Yen `verify-sovereign-push` ora rampung, cek Action Scheduler utawa async runner sing dikonfigurasi. Kosongake pekerjaan sing gagal mung sawise mastiake yen wis aman kanggo dicoba maneh utawa dibuang.

### Jumlah user tenant salah {#tenant-user-count-is-wrong}

Migrasi kudu nyedhiyakake user kanggo tenant sovereign. Yen user instalasi sing dikarepake ilang, jalankan maneh langkah penyediaan user sadurunge nyoba SSO maneh.

### Kunjungan SSO ditolak {#sso-visit-is-rejected}

Autologin tenant anu teu aya statusna (stateless) butuh domain tenant, origin pin, tujuan token, nonce, jeung waktu kedaluwarsa kudu cocog. Pastike URL tenant téh bener jeung login dipénta samentara sanggeus ngagenderake SSO visit.

## Ieu waktosna pikeun nyobaan deui (retry) {#when-to-retry}

Cobaan deui verifikasi sanggeus unggal ganti infrastruktur. Tong ganti trafik produksi, hapus data sumber, atawa eureunkeun kredensial migrasi nepi ka sakabéh pengecekan verifikasi lulus.
