---
title: Integrasi Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Mengintegrasikan Ultimate Multisite dengan Zapier {#integrating-ultimate-multisite-with-zapier}

Dalam salah satu artikel, kami membincangkan [Webhooks](webhooks.md) dan cara ia boleh digunakan untuk berintegrasi dengan aplikasi pihak ke-3.

Menggunakan webhooks agak rumit kerana ia memerlukan pengetahuan lanjutan dalam pengekodan dan menangkap payload. Menggunakan **Zapier** ialah satu cara untuk anda mengatasi perkara itu.

Zapier mempunyai integrasi dengan lebih 5000+ app yang menjadikan komunikasi antara aplikasi yang berbeza lebih mudah.

Anda boleh mencipta **Triggers** yang akan dicetuskan apabila peristiwa berlaku pada network anda (contohnya Account dicipta dan mencetuskan peristiwa account_create) atau menjana **Actions** pada network anda sebagai reaksi kepada peristiwa luaran (contohnya mencipta account membership baharu dalam network Ultimate Multisite anda).

Ini boleh dilakukan kerana **triggers Ultimate Multisite Zapier** dan actions dikuasakan oleh [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Cara bermula {#how-to-start}

Mula-mula, cari Ultimate Multisite dalam senarai app Zapier. Sebagai alternatif, anda boleh klik [pautan ini](https://zapier.com/apps/wp-ultimo/integrations).

Pergi ke Dashboard anda dan tekan butang **+** **Create Zap** pada sidebar kiri untuk menyediakan Zap baharu.

![Dashboard Zapier dengan butang Create Zap](/img/admin/webhooks-list.png)

Anda akan dialihkan ke halaman penciptaan Zap.

Dalam kotak carian taip "wp ultimo". Klik untuk memilih pilihan versi **Beta**.

![Mencari WP Ultimo dalam senarai app Zapier](/img/admin/webhooks-list.png)

Selepas memilih app kami, pilih peristiwa yang tersedia: **New Ultimate Multisite Event**.

![Memilih trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Sekarang kita perlu memberi Zapier akses kepada **network anda**. Mengklik **Sign in** akan membuka tetingkap baharu yang memerlukan **kelayakan API**.

![Prompt Sign in Zapier untuk kelayakan API](/img/admin/webhooks-list.png)

Pergi ke panel admin network anda dan navigasi ke **Ultimate Multisite > Settings** > **API & Webhooks** dan cari bahagian API Settings.

Pilih pilihan **Enable API** kerana ia diperlukan untuk sambungan ini berfungsi.

![Tetapan API and Webhooks dengan pilihan API Settings dan Enable API](/img/admin/settings-api-webhooks.png)

Gunakan ikon **Copy to Clipboard** pada medan API Key dan API Secret dan tampal nilai tersebut pada skrin integrasi.

Pada medan URL, masukkan URL penuh network anda, termasuk protokol (HTTP atau HTTPS).

![Skrin integrasi Zapier dengan medan API Key, Secret, dan URL](/img/admin/webhooks-list.png)

Klik butang **Yes, Continue** untuk bergerak ke langkah seterusnya. Jika semuanya berjalan lancar, anda sepatutnya disambut oleh account bersambung baharu anda! Klik **Continue** untuk mencipta trigger baharu.

## Cara mencipta Trigger baharu {#how-to-create-a-new-trigger}

Sekarang setelah Account anda disambungkan, anda boleh melihat peristiwa yang tersedia. Mari pilih peristiwa **payment_received** untuk tutorial ini.

![Memilih peristiwa payment_received dalam trigger Zapier](/img/admin/webhooks-list.png)

Setelah peristiwa dipilih dan anda klik **continue** , satu **test step** akan muncul.

![Test step Zapier untuk trigger](/img/admin/webhooks-list.png)

Pada peringkat ini, Zapier akan menguji sama ada Zap anda boleh **mengambil payload khusus untuk peristiwa itu**. Dalam peristiwa akan datang daripada jenis yang sama, maklumat dengan struktur yang sama ini akan dihantar.

![Ujian trigger Zapier selesai dengan berjaya bersama payload](/img/admin/webhooks-list.png)

Dalam tutorial kami, ujian telah **completed successfully** dan mengembalikan maklumat contoh payload. Maklumat contoh ini akan berguna untuk membimbing kami semasa mencipta actions. Trigger anda kini telah dicipta dan sedia untuk disambungkan kepada aplikasi lain.

## Cara mencipta Actions {#how-to-create-actions}

Actions menggunakan maklumat daripada triggers lain untuk mencipta entri baharu dalam network anda.

Dalam **langkah mencipta action**, anda akan memilih Ultimate Multisite **Beta** dan pilihan **Create Items on Ultimate Multisite**.

![Mencipta action dengan Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Dalam langkah seterusnya, anda sama ada akan mencipta pengesahan anda, seperti yang kami lakukan dalam **Cara bermula** , atau memilih pengesahan yang telah dicipta. Dalam tutorial ini, kami akan memilih pengesahan yang sama yang telah dicipta sebelum ini.

![Memilih pengesahan untuk action Zapier](/img/admin/webhooks-list.png)

### Menyediakan Action {#setting-up-the-action}

Ini ialah **langkah utama action** dan di sini keadaannya sedikit berbeza. Maklumat pertama yang akan anda pilih ialah **Item**. Item ialah **model maklumat** network anda seperti **Customers, Payments, Sites, Emails** dan lain-lain.

![Memilih jenis Item untuk action Zapier](/img/admin/webhooks-list.png)

Apabila memilih item, borang akan **disusun semula untuk membawa medan wajib dan pilihan** bagi item yang dipilih.

Contohnya, apabila memilih item **Customer** , medan borang akan membawa semua perkara yang diperlukan untuk diisi bagi mencipta Customer baharu dalam network.

![Medan item Customer dalam persediaan action Zapier](/img/admin/webhooks-list.png)

Selepas mengisi semua medan yang ditandakan sebagai **required** dan mengklik continue, skrin terakhir akan menunjukkan kepada anda medan yang telah diisi dan medan yang dibiarkan kosong.

![Ujian action Zapier menunjukkan medan yang diisi dan tidak diisi](/img/admin/webhooks-list.png)

Sebaik sahaja ujian anda selesai dan berjaya, action anda telah dikonfigurasikan. Ia juga penting untuk menyemak pada network anda sama ada item telah dicipta dengan ujian action anda.
