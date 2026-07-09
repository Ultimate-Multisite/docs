---
title: Pengesahan Migrasi Kedaulatan
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Pengesahan Migrasi Kedaulatan (Sovereign Migration Verification) {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 kini menyertakan arahan pengesahan WP-CLI untuk migrasi tetapan kedaulatan (sovereign tenant). Gunakan arahan ini apabila migrasi tetapan, lawatan SSO, atau pemasangan terasing tidak berfungsi seperti yang dijangkakan.

## Arahan yang perlu dijalankan {#commands-to-run}

Jalankan pengesahan daripada pemasangan WordPress rangkaian:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Gunakan ID tetapan (site ID) untuk tetapan yang anda migrasi. Arahan pertama menyemak bahawa tetapan tersebut tidak lagi bergantung pada data sisi rangkaian lama (legacy). Arahan kedua mengesahkan bahawa kerja 'sovereign push' boleh diproses dan dikosongkan (drain).

## Kegagalan biasa {#common-failures}

### Kelulusan pangkalan data tidak sepadan dengan hos (host) {#database-grants-do-not-match-the-host}

Jika pengesahan melaporkan kegagalan kelulusan atau pengguna penulis (writer-user), semak hos pangkalan data yang ditetapkan. `localhost`, `127.0.0.1`, dan nama perkhidmatan kontena adalah hos MySQL grant yang berbeza. Kemas kini pengikatan hos tetapan atau kelulusan pangkalan data anda, kemudian jalankan semula pengesahan.

### Pemasangan Bedrock atau tempatan (local) tidak dapat menyambung {#bedrock-or-local-installs-cannot-connect}

Pemasangan Bedrock dan soket tempatan mungkin melaporkan pangkalan data sebagai `localhost` sedangkan runtime menyambung melalui alamat yang dinormalisasikan. Versi 1.2.0 menormalkan rentetan hos mesin yang sama, tetapi lebihan hos tersuai masih boleh bertembung dengan kelulusan pangkalan data.

### Barisan 'async push' tidak dikosongkan (drain) {#async-push-queue-does-not-drain}

Jika `verify-sovereign-push` tidak selesai, semak Action Scheduler atau runner async yang ditetapkan. Kosongkan kerja yang gagal hanya selepas mengesahkan bahawa ia selamat untuk dicuba semula atau dibuang.

### Bilangan pengguna tetapan adalah salah {#tenant-user-count-is-wrong}

Migrasi sepatutnya menyediakan pengguna untuk tetapan kedaulatan tersebut. Jika pengguna pemasangan yang dijangkakan hilang, jalankan semula langkah penyediaan pengguna sebelum mencuba SSO semula.

### Lawatan SSO ditolak {#sso-visit-is-rejected}

Untuk log masuk automatik tetamu tanpa keadaan (stateless tenant), domain tetamu, pin asal (origin pin), tujuan token, nonce, dan tarikh tamat mesti sepadan. Sahkan URL tetamu adalah betul dan percubaan log masuk akan dibuat tidak lama selepas menjana lawatan SSO tersebut.

## Bila perlu cuba semula {#when-to-retry}

Cuba semakan semula selepas setiap perubahan infrastruktur. Jangan tukar trafik pengeluaran (production traffic), padam data sumber, atau alih kredensial migrasi sehingga semua semakan telah lulus.
