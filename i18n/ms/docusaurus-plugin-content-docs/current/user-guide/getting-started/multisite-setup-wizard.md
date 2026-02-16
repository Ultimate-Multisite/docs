---
title: Wizard Persediaan Multisite
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Wizard Persediaan Multisite

Ultimate Multisite dilengkapi dengan wizard terbina dalam yang menukar pemasangan WordPress standard kepada rangkaian WordPress Multisite secara automatik. Ini menghapuskan keperluan untuk mengedit `wp-config.php` secara manual atau menjalankan arahan pangkalan data.

:::tip
Jika pemasangan WordPress anda sudah beroperasi sebagai rangkaian Multisite, anda boleh langkau langkah ini sepenuhnya. Wizard ini hanya muncul apabila Multisite belum diaktifkan.
:::

## Bilakah Wizard Ini Muncul?

Apabila anda mengaktifkan Ultimate Multisite pada pemasangan WordPress standard (bukan Multisite), plugin akan mengesan bahawa Multisite tidak diaktifkan dan secara automatik mengalihkan anda ke Wizard Persediaan Multisite dan bukannya wizard persediaan biasa.

Anda juga boleh mengaksesnya secara terus di **WP Admin > Ultimate Multisite > Multisite Setup**.

## Prasyarat

Sebelum menjalankan wizard, pastikan:

- Anda mempunyai **akses pentadbir** ke pemasangan WordPress anda
- Fail `wp-config.php` pelayan anda **boleh ditulis** oleh pelayan web
- Anda mempunyai **sandaran terkini** fail dan pangkalan data anda

:::warning
Wizard ini mengubah suai fail `wp-config.php` anda dan mencipta jadual pangkalan data baharu. Sentiasa buat sandaran sebelum meneruskan.
:::

## Langkah 1: Selamat Datang

Skrin pertama menerangkan apa itu WordPress Multisite dan apa yang akan dilakukan oleh wizard:

- Mengaktifkan ciri Multisite dalam konfigurasi WordPress anda
- Mencipta jadual pangkalan data rangkaian yang diperlukan
- Menambah pemalar multisite yang diperlukan ke `wp-config.php`
- Mengaktifkan Ultimate Multisite secara rangkaian di seluruh network

![Wizard Persediaan Multisite - Langkah selamat datang](/img/installation/multisite-wizard/wizard-welcome.png)

Klik **Continue** untuk meneruskan.

## Langkah 2: Konfigurasi Rangkaian

Langkah ini meminta anda untuk mengkonfigurasi tetapan rangkaian anda.

### Struktur Laman

Pilih bagaimana laman rangkaian anda akan disusun:

- **Sub-domain** (Disyorkan) — Laman mendapat subdomain tersendiri, contohnya `site1.yourdomain.com`
- **Sub-direktori** — Laman dicipta sebagai laluan, contohnya `yourdomain.com/site1`

:::note
Jika anda memilih sub-domain, anda perlu mengkonfigurasi **wildcard DNS** dan **sijil SSL wildcard** untuk domain anda. Kebanyakan hos WordPress terurus mengendalikan ini secara automatik. Lihat [Ultimate Multisite 101](./ultimate-multisite-101) untuk perbandingan terperinci.
:::

### Tajuk Rangkaian

Masukkan nama untuk rangkaian anda. Ini ditetapkan secara lalai kepada tajuk laman semasa anda dengan "Network" ditambah di hujung. Anda boleh mengubahnya kemudian dari tetapan rangkaian.

### E-mel Pentadbir Rangkaian

Alamat e-mel yang digunakan untuk pemberitahuan pentadbiran rangkaian. Ini ditetapkan secara lalai kepada alamat e-mel pengguna semasa.

![Wizard Persediaan Multisite - Konfigurasi Rangkaian](/img/installation/multisite-wizard/wizard-network-configuration.png)

Selepas mengisi ruangan, klik **Continue** untuk meneruskan.

## Langkah 3: Pemasangan

Klik butang **Install** untuk memulakan. Wizard melaksanakan lima langkah automatik secara berurutan, setiap satu menunjukkan kemajuannya secara masa nyata:

![Wizard Persediaan Multisite - Pemasangan menunggu](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Langkah | Penerangan |
|---------|------------|
| **Enable Multisite** | Menambah pemalar `WP_ALLOW_MULTISITE` ke `wp-config.php` |
| **Create Network** | Mencipta jadual pangkalan data multisite (`wp_site`, `wp_sitemeta`, `wp_blogs`, dll.) dan mengisinya dengan konfigurasi rangkaian anda |
| **Update Configuration** | Menambah pemalar multisite akhir ke `wp-config.php` (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, dll.) |
| **Fix Cookies** | Memastikan URL laman adalah betul dalam metadata rangkaian untuk mengelakkan masalah pengesahan selepas pengaktifan |
| **Network Activate Plugin** | Mengaktifkan Ultimate Multisite secara rangkaian supaya ia berjalan di seluruh network |

Setiap langkah memaparkan salah satu status berikut:

- **Pending** — Menunggu untuk diproses
- **Installing...** — Sedang berjalan
- **Success!** — Berjaya diselesaikan
- **Mesej ralat** — Ralat telah berlaku (mesej akan menerangkan isu tersebut)

Sebaik sahaja semua langkah berjaya diselesaikan, anda akan melihat status hijau "Success!" untuk setiap item:

![Wizard Persediaan Multisite - Pemasangan selesai](/img/installation/multisite-wizard/wizard-installation-complete.png)

Wizard kemudian akan meneruskan secara automatik ke skrin penyelesaian.

## Langkah 4: Selesai

Sebaik sahaja pemasangan selesai, anda akan melihat mesej kejayaan yang mengesahkan bahawa WordPress Multisite telah diaktifkan.

![Wizard Persediaan Multisite - Persediaan Selesai](/img/installation/multisite-wizard/wizard-complete.png)

Anda kini boleh meneruskan dengan wizard persediaan Ultimate Multisite untuk mengkonfigurasi platform WaaS anda (butiran syarikat, kandungan lalai, gateway pembayaran, dll.).

:::note
Selepas pemasangan multisite selesai, pelayar anda akan dialihkan melalui pentadbir rangkaian yang baru diaktifkan. Anda mungkin perlu log masuk semula kerana kuki pengesahan dikemas kini untuk persekitaran multisite.
:::

## Persediaan Manual Sebagai Alternatif

Jika wizard tidak dapat menulis ke fail `wp-config.php` anda (disebabkan kebenaran fail atau sekatan pelayan), ia akan memaparkan kod tepat yang perlu anda tambah secara manual:

1. **Pemalar wp-config.php** yang perlu ditambah di atas baris `/* That's all, stop editing! */`
2. **Peraturan penulisan semula .htaccess** yang sesuai untuk struktur laman pilihan anda (subdomain atau subdirektori)

Selepas membuat perubahan manual, muat semula halaman dan wizard akan mengesan bahawa multisite kini aktif.

## Penyelesaian Masalah

### Wizard menyatakan wp-config.php tidak boleh ditulis

Proses pelayan web anda memerlukan kebenaran menulis ke fail `wp-config.php`. Anda boleh sama ada:

- Menukar kebenaran fail buat sementara waktu kepada `644` atau `666`
- Menggunakan arahan persediaan manual alternatif yang disediakan oleh wizard
- Meminta bantuan daripada penyedia hosting anda

### Laman tidak boleh diakses selepas persediaan (subdomain)

Jika anda memilih struktur subdomain, anda perlu mengkonfigurasi **wildcard DNS** untuk domain anda. Tambah rekod DNS:

```
Type: A (or CNAME)
Host: *
Value: [IP pelayan anda]
```

Semak dengan penyedia hosting anda jika anda tidak pasti cara mengkonfigurasi ini.

### Masalah pengesahan selepas persediaan

Jika anda dilog keluar atau mengalami ralat kuki selepas persediaan multisite:

1. Kosongkan kuki pelayar anda untuk laman tersebut
2. Log masuk semula di `yourdomain.com/wp-login.php`
3. Jika masalah berterusan, semak bahawa `wp-config.php` anda tidak mempunyai `COOKIE_DOMAIN` ditetapkan kepada `false` — ini adalah isu yang diketahui pada pemasangan multisite subdomain

### Satu langkah gagal semasa pemasangan

Jika salah satu langkah pemasangan menunjukkan ralat:

1. Catat mesej ralat yang dipaparkan
2. Kembali ke langkah konfigurasi dan cuba lagi
3. Jika ralat berterusan, semak log ralat PHP pelayan anda untuk butiran lanjut
4. Langkah-langkah yang telah selesai akan dilangkau pada percubaan seterusnya (pemasang adalah idempoten)
