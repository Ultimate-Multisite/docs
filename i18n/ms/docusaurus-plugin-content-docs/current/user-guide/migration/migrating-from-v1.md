---
title: Migrasi dari V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrasi dari V1

## Ultimate Multisite telah beralih daripada keluaran versi 1.x kepada keluaran versi 2.x.

Ultimate Multisite versi 2.0 dan ke atas merupakan penulisan semula sepenuhnya kod sumber, bermakna sangat sedikit persamaan antara versi lama dan versi baharu. Oleh sebab itu, apabila menaik taraf dari 1.x ke 2.x, data anda perlu dipindahkan ke format yang boleh difahami oleh versi baharu.

Nasib baik, Ultimate Multisite 2.0+ **dilengkapi dengan alat pemindahan** yang terbina dalam teras dan mampu mengesan data daripada versi lama serta menukarkannya kepada format baharu. Pemindahan ini berlaku semasa **Wizard Persediaan** versi 2.0+.

Pelajaran ini menerangkan cara alat pemindahan berfungsi, apa yang perlu dilakukan jika berlaku kegagalan, dan cara menyelesaikan masalah yang mungkin timbul semasa proses ini.

_**PENTING: Sebelum anda mula menaik taraf dari versi 1.x ke versi 2.0, sila pastikan anda membuat salinan sandaran pangkalan data laman anda**_

## Langkah pertama

Langkah pertama ialah memuat turun fail .zip plugin dan memasang versi 2.0 pada dashboard pentadbir rangkaian anda.

Selepas anda [memasang dan mengaktifkan versi 2.0](../getting-started/installing-ultimate-multisite.md), sistem akan mengesan secara automatik bahawa Multisite anda sedang berjalan pada versi lama dan anda akan melihat mesej ini di bahagian atas halaman plugin.

_**NOTA:** Jika anda mempunyai Ultimate Multisite 1.x dipasang pada Multisite anda, anda akan diberi pilihan untuk menggantikan plugin dengan versi yang baru dimuat turun. Sila klik **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Halaman seterusnya akan memberitahu anda tentang add-on lama yang telah dipasang bersama versi 1.x. Ia akan mengandungi arahan sama ada versi yang anda gunakan serasi dengan versi 2.0 atau jika anda perlu memasang versi add-on yang ditingkatkan selepas pemindahan.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Setelah anda bersedia untuk meneruskan, anda boleh klik butang yang tertulis **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Ia kemudian akan membawa anda ke halaman wizard pemasangan dengan beberapa mesej selamat datang. Anda hanya perlu klik **Get Started** untuk ke halaman seterusnya.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Selepas mengklik **Get Started**, anda akan dialihkan ke Semakan Pra-pemasangan_._ Ini akan menunjukkan Maklumat Sistem dan pemasangan WordPress anda serta memberitahu sama ada ia memenuhi **keperluan Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Langkah seterusnya ialah memasukkan kunci lesen Ultimate Multisite anda dan mengaktifkan plugin. Ini akan memastikan semua ciri, termasuk add-on, tersedia di laman anda.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Selepas memasukkan kunci anda, klik **Agree & Activate**.

Selepas pengaktifan lesen, anda boleh memulakan pemasangan sebenar dengan mengklik **Install** pada halaman seterusnya. Ini akan mencipta fail dan pangkalan data yang diperlukan secara automatik untuk versi 2.0 berfungsi.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Sekarang, pemindahan

Alat pemindahan mempunyai ciri keselamatan terbina yang akan menyemak keseluruhan multisite anda untuk memastikan semua data Ultimate Multisite anda boleh dipindahkan tanpa sebarang masalah. Klik butang **Run Check** untuk memulakan proses.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Selepas menjalankan semakan, terdapat dua kemungkinan: hasilnya boleh jadi **dengan** ralat atau **tanpa ralat**.

### Dengan Ralat

Sekiranya anda mendapat mesej ralat, anda perlu menghubungi pasukan sokongan kami supaya mereka dapat membantu anda membetulkan ralat tersebut. Pastikan anda **menyediakan log ralat** apabila membuat tiket. Anda boleh memuat turun log atau anda boleh klik pautan yang tertulis hubungi pasukan sokongan kami. Ia akan membuka widget bantuan di sebelah kanan halaman anda dengan ruangan yang telah diisi untuk anda termasuk log ralat di bawah penerangan.

_**Memandangkan sistem menemui ralat, anda tidak akan dapat meneruskan pemindahan ke versi 2.0. Anda boleh kembali ke versi 1.x untuk terus menjalankan rangkaian anda sehingga ralat dibetulkan.**_

### Tanpa Ralat

Jika sistem tidak menemui sebarang ralat, anda akan melihat mesej berjaya dan butang **Migrate** di bahagian bawah yang membolehkan anda meneruskan pemindahan. Di halaman ini, anda akan diingatkan untuk membuat salinan sandaran pangkalan data anda sebelum meneruskan, yang amat kami syorkan. Tekan **Migrate** jika anda sudah mempunyai salinan sandaran.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

Dan itu sahaja yang diperlukan!

Anda boleh terus menjalankan persediaan Wizard untuk mengemas kini logo dan perkara lain pada rangkaian anda atau mula meneroka menu Ultimate Multisite versi 2.0 dan antara muka baharunya. Teruskan dan nikmati pengalaman anda.
