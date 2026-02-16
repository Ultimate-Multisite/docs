---
title: Menurunkan Paket
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Menurunkan paket (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Menurunkan paket atau langganan adalah tindakan yang umum dilakukan klien Anda jika mereka memiliki anggaran terbatas atau merasa tidak membutuhkan banyak resource untuk menjalankan subsite mereka.

## Cara menurunkan paket

Klien Anda dapat menurunkan paket kapan saja dengan masuk ke dashboard admin subsite mereka dan mengklik **Change** di halaman akun mereka.

![Halaman akun dengan tombol Change di bawah membership](/img/admin/memberships-list.png)

Setelah mengklik tombol **Change**, pengguna/klien akan diarahkan ke halaman checkout di mana mereka dapat memilih paket yang ingin mereka gunakan sebagai pengganti langganan saat ini.

![Halaman checkout menampilkan pilihan paket untuk downgrade](/img/admin/memberships-list.png)

Dalam contoh ini, kita menurunkan paket dari **Premium** ke **Free**.

Untuk melanjutkan, pengguna cukup mengklik tombol **Complete Checkout**. Setelah itu, mereka akan kembali ke halaman akun yang menampilkan pesan tentang perubahan yang tertunda untuk membership mereka. Perubahan akan berlaku pada **siklus penagihan berikutnya**.

![Halaman akun menampilkan pesan perubahan membership yang tertunda](/img/admin/memberships-list.png)

### Apa yang terjadi ketika pengguna menurunkan paket mereka

Penting untuk diketahui bahwa menurunkan paket tidak mengubah konfigurasi yang sudah ada di subsite pengguna.

Sistem tidak secara otomatis mengubah template situs karena mengubah template situs akan menghapus dan mereset subsite sepenuhnya. Ini dilakukan untuk menghindari kehilangan data yang tidak perlu. Jadi ruang disk, tema, plugin, dan lainnya akan tetap utuh kecuali untuk post.

Kami memahami bahwa kekhawatiran utama Anda adalah batasan dan kuota yang Anda tetapkan di setiap paket, tetapi kami harus mempertimbangkan dampak yang akan terjadi pada subsite pengguna jika kami menghapus atau mengubah konfigurasinya.

Untuk post yang melebihi batas yang ditetapkan pada paket, Anda memiliki 3 pilihan berbeda: **Keep the posts as it** *,* **Move the posts to trash** *,* atau **Move the posts to draft** *.* Anda dapat mengonfigurasi ini di pengaturan Ultimate Multisite.

![Opsi batas post terlampaui di pengaturan Ultimate Multisite](/img/config/settings-sites.png)

### Apa yang terjadi dengan pembayaran

Di versi 2.0, sistem tidak lagi memerlukan penyesuaian pembayaran dalam hal proration.

Ini karena sistem akan menunggu membership yang ada untuk **menyelesaikan siklus penagihannya** sebelum paket/membership baru berlaku. Jumlah tagihan baru untuk membership baru akan otomatis diterapkan dan ditagihkan pada siklus penagihan berikutnya.
