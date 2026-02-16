---
title: Integrasi Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Mengintegrasikan Ultimate Multisite dengan Zapier

Dalam salah satu artikel sebelum ini, kita telah membincangkan [Webhooks](webhooks.md) dan bagaimana ia boleh digunakan untuk berintegrasi dengan aplikasi pihak ketiga.

Menggunakan webhooks agak rumit kerana ia memerlukan pengetahuan lanjutan dalam pengekodan dan menangkap payload. Menggunakan **Zapier** adalah cara untuk anda mengatasi masalah ini.

Zapier mempunyai integrasi dengan lebih 5000+ aplikasi yang menjadikan komunikasi antara aplikasi berbeza lebih mudah.

Anda boleh mencipta **Triggers** yang akan diaktifkan apabila peristiwa berlaku di rangkaian anda (contohnya akaun dicipta dan mencetuskan event account_create) atau menjana **Actions** di rangkaian anda sebagai tindak balas kepada peristiwa luaran (contohnya mencipta keahlian akaun baharu dalam rangkaian Ultimate Multisite anda).

Ini boleh dilakukan kerana **triggers dan actions Zapier Ultimate Multisite** dikuasakan oleh [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Cara untuk bermula

Pertama, cari Ultimate Multisite dalam senarai aplikasi Zapier. Sebagai alternatif, anda boleh klik [pautan ini](https://zapier.com/apps/wp-ultimo/integrations).

Pergi ke dashboard anda dan tekan butang **+** **Create Zap** di bar sisi kiri untuk menyediakan Zap baharu.

![Dashboard Zapier dengan butang Create Zap](/img/admin/webhooks-list.png)

Anda akan dialihkan ke halaman penciptaan Zap.

Dalam kotak carian, taip "wp ultimo". Klik untuk memilih pilihan versi **Beta**.

![Mencari WP Ultimo dalam senarai aplikasi Zapier](/img/admin/webhooks-list.png)

Selepas memilih aplikasi kami, pilih event yang tersedia: **New Ultimate Multisite Event**.

![Memilih trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Sekarang kita perlu memberikan Zapier akses kepada **rangkaian anda**. Mengklik **Sign in** akan membuka tetingkap baharu yang memerlukan **kelayakan API**.

![Prompt Sign in Zapier untuk kelayakan API](/img/admin/webhooks-list.png)

Pergi ke panel admin rangkaian anda dan navigasi ke **Ultimate Multisite > Settings** > **API & Webhooks** dan cari bahagian API Settings.

Pilih pilihan **Enable API** kerana ia diperlukan untuk sambungan ini berfungsi.

![API Settings dengan pilihan Enable API dalam Ultimate Multisite](/img/admin/webhooks-list.png)

Gunakan ikon **Copy to Clipboard** pada medan API Key dan API Secret dan tampal nilai tersebut pada skrin integrasi.

Pada medan URL, masukkan URL penuh rangkaian anda, termasuk protokol (HTTP atau HTTPS).

![Skrin integrasi Zapier dengan medan API Key, Secret, dan URL](/img/admin/webhooks-list.png)

Klik butang **Yes, Continue** untuk meneruskan ke langkah seterusnya. Jika semuanya berjalan lancar, anda akan disambut dengan akaun baharu yang telah disambungkan! Klik **Continue** untuk mencipta trigger baharu.

## Cara mencipta Trigger baharu

Sekarang akaun anda telah disambungkan, anda boleh melihat event yang tersedia. Mari pilih event **payment_received** untuk tutorial ini.

![Memilih event payment_received dalam trigger Zapier](/img/admin/webhooks-list.png)

Sebaik sahaja event dipilih dan anda klik **continue**, **langkah ujian** akan muncul.

![Langkah ujian Zapier untuk trigger](/img/admin/webhooks-list.png)

Pada peringkat ini, Zapier akan menguji sama ada Zap anda boleh **mengambil payload khusus untuk event tersebut**. Dalam event akan datang yang sama jenisnya, maklumat dengan struktur yang sama akan dihantar.

![Ujian trigger Zapier berjaya diselesaikan dengan payload](/img/admin/webhooks-list.png)

Dalam tutorial kami, ujian telah **berjaya diselesaikan** dan mengembalikan contoh maklumat payload. Contoh maklumat ini akan berguna untuk membimbing kita semasa mencipta actions. Trigger anda kini telah dicipta dan sedia untuk disambungkan ke aplikasi lain.

## Cara mencipta Actions

Actions menggunakan maklumat dari trigger lain untuk mencipta entri baharu dalam rangkaian anda.

Dalam **langkah mencipta action**, anda akan memilih Ultimate Multisite **Beta** dan pilihan **Create Items on Ultimate Multisite**.

![Mencipta action dengan Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Dalam langkah seterusnya, anda sama ada akan mencipta pengesahan anda, sama seperti yang kita lakukan dalam **Cara untuk bermula**, atau memilih pengesahan yang telah dicipta. Dalam tutorial ini, kita akan memilih pengesahan yang sama yang dicipta sebelum ini.

![Memilih pengesahan untuk action Zapier](/img/admin/webhooks-list.png)

### Menyediakan Action

Ini adalah **langkah utama action** dan di sini perkara agak berbeza. Maklumat pertama yang anda akan pilih ialah **Item**. Item adalah **model maklumat** rangkaian anda seperti **Customers, Payments, Sites, Emails** dan lain-lain.

![Memilih jenis Item untuk action Zapier](/img/admin/webhooks-list.png)

Apabila memilih item, borang akan **disusun semula untuk membawa medan yang diperlukan dan pilihan** untuk item yang dipilih.

Contohnya, apabila memilih item **Customer**, medan borang akan membawa semua yang perlu diisi untuk mencipta Customer baharu dalam rangkaian.

![Medan item Customer dalam persediaan action Zapier](/img/admin/webhooks-list.png)

Selepas mengisi semua medan yang ditandakan sebagai **required** dan mengklik continue, skrin terakhir akan menunjukkan medan yang telah diisi dan medan yang tidak diisi.

![Ujian action Zapier menunjukkan medan yang diisi dan tidak diisi](/img/admin/webhooks-list.png)

Sebaik sahaja ujian anda selesai dan berjaya, action anda telah dikonfigurasi. Adalah penting juga untuk menyemak di rangkaian anda sama ada item telah dicipta dengan ujian action anda.
