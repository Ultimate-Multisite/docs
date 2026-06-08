---
title: Eksport & Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksport & Import

Ultimate Multisite 2.9.0 menambah alat **Eksport & Import** untuk tapak tunggal di bawah **Tools > Export & Import**. Gunakan alat ini apabila anda perlu membungkus satu tapak WordPress sebagai fail ZIP, memulihkan fail ZIP tersebut, atau memindahkan tapak antara pemasangan WordPress Ultimate Multisite dan tapak tunggal yang serasi.

## Keizinan yang Diperlukan

Anda mesti log masuk sebagai pentadbir yang boleh mengakses menu **Tools** WordPress pada tapak yang dieksport atau diimport. Pada rangkaian multisite, gunakan akaun pentadbir rangkaian apabila mengeksport atau mengimport subsite daripada alat Ultimate Multisite pada peringkat rangkaian.

Muat turun ZIP eksport disajikan melalui titik akhir muat turun yang memerlukan pengesahan, jadi pastikan sesi pentadbir kekal aktif sehingga muat turun selesai dan jangan kongsikan URL muat turun yang dijana secara awam.

## Mengeksport tapak ke ZIP

1. Di pentadbir WordPress untuk tapak yang anda ingin salin, pergi ke **Tools > Export & Import**.
2. Buka kawasan eksport dan pilih tapak yang anda ingin bungkus.
3. Pilih kandungan pilihan untuk dimasukkan, seperti muat naik, plugin, dan tema, apabila pilihan tersebut tersedia.
4. Mulakan eksport dan tunggu proses selesai. Tapak yang besar mungkin memerlukan masa untuk selesai di latar belakang sebelum ZIP sedia.
5. Muat turun ZIP yang telah siap daripada senarai eksport.

Simpan ZIP di lokasi yang selamat. Ia mungkin mengandungi kandungan tapak, tetapan, fail media, dan aset kod yang dipilih.

## Apa yang termasuk dalam eksport

ZIP eksport boleh merangkumi:

- Kandungan pangkalan data dan konfigurasi tapak yang dipilih.
- Fail media yang dimuat naik apabila muat naik dimasukkan.
- Plugin dan tema apabila pilihan tersebut dipilih.
- Metadata import yang digunakan oleh alat Export & Import untuk membina semula tapak pada pemasangan sasaran.

Saiz ZIP yang tepat bergantung pada jumlah media, plugin dan tema yang dipilih, dan saiz jadual pangkalan data tapak.

## Mengimport tapak dari ZIP

1. Pergi ke **Tools > Export & Import** pada tapak WordPress destinasi.
2. Buka kawasan import dan muat naik ZIP yang dicipta oleh alat Export & Import.
3. Masukkan URL pengganti jika tapak itu perlu menggunakan alamat baharu, atau biarkan medan kosong untuk mengekalkan URL asal.
4. Pilih sama ada untuk memadam ZIP yang dimuat naik selepas import selesai.
5. Klik **Begin Import**.
6. Pantau import yang tertangguh sehingga ia selesai. Gunakan **Cancel Import** hanya jika anda perlu menghentikan proses sebelum selesai.
7. Semak tapak yang diimport sebelum membenarkan trafik biasa atau akses pelanggan.

Pada pemasangan WordPress tapak tunggal, mengimport ZIP akan menggantikan tapak semasa dengan tapak yang diimport. Sediakan sandaran penuh tapak sasaran sebelum anda mula, dan elakkan memulakan pelbagai import untuk tapak yang sama pada masa yang sama.

## Batasan dan nota keserasian

- Direktori muat naik atau perpustakaan media yang sangat besar boleh menghasilkan fail ZIP yang besar. Sahkan had muat naik PHP, had pelaksanaan, ruang cakera, memori, dan tetapan masa tamat pelayan sebelum mengeksport atau mengimport tapak yang besar.
- Perpustakaan media yang sangat besar mungkin perlu dipindahkan semasa jendela penyelenggaraan trafik rendah.
- Pemasangan WordPress sasaran harus menjalankan versi WordPress, PHP, Ultimate Multisite, plugin, dan tema yang serasi.
- Import tapak tunggal akan menggantikan tapak sasaran. Ia bukan alat gabungan (merge tool).
- Pemindahan dari multisite ke tapak tunggal dan dari tapak tunggal ke multisite hanya disokong apabila persekitaran sasaran boleh menjalankan plugin, tema, URL, dan komponen Ultimate Multisite yang diperlukan daripada tapak yang dieksport.
- Kekalkan ZIP itu peribadi. Ia mungkin mengandungi kandungan pangkalan data, fail yang dimuat naik, dan butiran konfigurasi daripada tapak yang dieksport.

Untuk aliran kerja eksport peringkat rangkaian yang lebih lama, lihat [Site Export](/user-guide/administration/site-export).
