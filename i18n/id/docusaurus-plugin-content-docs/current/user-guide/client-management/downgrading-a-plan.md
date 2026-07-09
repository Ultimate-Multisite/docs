---
title: Menurunkan Paket
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Menurunkan paket (v2) {#downgrading-a-plan-v2}

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Menurunkan paket atau langganan adalah tindakan umum yang mungkin dilakukan klien Anda jika mereka memiliki anggaran terbatas atau mereka memutuskan bahwa mereka tidak memerlukan banyak sumber daya untuk menjalankan subsite mereka.

## Cara menurunkan paket {#how-to-downgrade-a-plan}

Klien Anda dapat menurunkan paket mereka kapan saja dengan masuk ke dashboard admin subsite mereka dan mengklik **Change** di bawah halaman Account mereka.

![Halaman Account pelanggan dengan kartu Your Membership dan tombol Change](/img/account-page/membership-change-button.png)

Setelah mengklik tombol **Change**, pengguna/klien akan diarahkan ke halaman checkout tempat mereka dapat memilih paket yang ingin mereka ubah untuk langganan mereka.

![Halaman opsi penurunan paket di sisi pelanggan](/img/account-page/downgrade-picker.png)

Dalam contoh ini, kami menurunkan paket dari **Premium** ke **Free**.

Untuk melanjutkan, pengguna hanya perlu mengklik tombol **Complete Checkout**. Ini kemudian akan membawa mereka kembali ke halaman Account yang menampilkan pesan tentang perubahan tertunda untuk membership. Perubahan akan berlaku pada **siklus penagihan berikutnya** pelanggan.

![Halaman Account yang menampilkan banner perubahan membership tertunda](/img/account-page/pending-change.png)

### Apa yang terjadi ketika pengguna menurunkan paket mereka {#what-happens-when-a-user-downgrades-their-plan}

Penting untuk dicatat bahwa menurunkan paket tidak mengubah konfigurasi yang ada di subsite pengguna.

Ini tidak secara otomatis mengubah template site karena mengubah template site akan sepenuhnya menghapus dan mereset subsite. Ini untuk menghindari kehilangan data yang tidak perlu. Jadi ruang disk, theme, plugin, dll. akan tetap utuh kecuali untuk posts.

Kami memahami bahwa kekhawatiran utama Anda adalah batas dan kuota yang Anda tetapkan di bawah setiap paket, tetapi kami harus mempertimbangkan kerusakan yang akan terjadi pada subsite pengguna jika kami menghapus atau mengubah konfigurasi apa pun di dalamnya.

Untuk posts yang melebihi batas yang ditetapkan pada paket, Anda memiliki 3 opsi berbeda: **Keep the posts as it** *,* **Move the posts to trash** *,* atau **Move the posts to draft** *.* Anda dapat mengonfigurasi ini di bawah pengaturan Ultimate Multisite.

![Halaman Network Admin Settings Sites yang menampilkan opsi perilaku post-limit-exceeded](/img/account-page/settings-sites-post-limit.png)

### Apa yang terjadi pada pembayaran {#what-happens-to-the-payment}

Di versi 2.0, ini tidak lagi memerlukan penyesuaian apa pun pada pembayaran dalam hal prorata.

Ini karena sistem akan menunggu membership yang ada untuk **menyelesaikan siklus penagihannya sebelum** paket/membership baru berlaku. Jumlah penagihan baru untuk membership baru akan secara otomatis diterapkan dan ditagihkan pada siklus penagihan berikutnya.
