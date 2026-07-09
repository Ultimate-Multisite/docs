---
title: Membuat Kode Diskon
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Membuat Kode Diskon (v2) {#creating-discount-codes-v2}

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Dengan Ultimate Multisite Anda dapat membuat kode diskon untuk memberikan diskon kepada klien Anda pada langganan mereka. Dan membuatnya mudah!

## Membuat dan Mengedit Kode Diskon {#creating-and-editing-discount-codes}

Untuk membuat atau mengedit kode diskon, buka **Ultimate Multisite > Discount Codes**.

![Daftar kode diskon — status kosong sebelum ada kode](/img/config/discount-codes-empty.png)

Di sana Anda akan memiliki daftar kode diskon yang sudah Anda buat.

Anda dapat mengklik **Add Discount** **Code** untuk membuat kupon baru atau Anda dapat mengedit yang sudah Anda miliki dengan mengarahkan kursor ke atasnya dan mengklik **Edit**.

![Daftar kode diskon dengan tindakan saat kursor diarahkan yang menampilkan tautan Edit dan Delete](/img/config/discount-codes-list-hover.png)

![Tombol Add Discount Code di header halaman](/img/config/discount-codes-add-button.png)

Anda akan diarahkan ke halaman tempat Anda akan membuat atau mengedit kode kupon Anda. Pada contoh ini kita akan membuat yang baru.

![Halaman edit kode diskon dengan semua bagian terlihat](/img/config/discount-code-edit.png)

Mari kita lihat pengaturan yang tersedia di sini:

**Enter Discount Code:** Ini hanyalah nama kode diskon Anda. Ini bukan kode yang perlu digunakan pelanggan Anda pada formulir checkout.

**Description:** Di sini, Anda dapat menjelaskan secara singkat untuk apa kupon ini.

![Kolom nama dan deskripsi kode diskon di bagian atas halaman edit](/img/config/discount-code-description.png)

Anda juga dapat melihat kode diskon sebagai aktif atau tidak aktif:

![Status aktif kode diskon](/img/config/discount-code-active.png)

**Coupon code:** Di sinilah Anda menentukan kode yang perlu dimasukkan pelanggan Anda selama checkout.

![Kolom kode kupon tempat pelanggan memasukkan kode saat checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Di sini, Anda dapat mengatur **persentase** atau **jumlah tetap** uang untuk kode diskon Anda.

![Pengaturan jumlah diskon dengan dropdown persentase atau jumlah tetap](/img/config/discount-code-amount.png)

**Apply to renewals:** Jika opsi ini dinonaktifkan, kode diskon ini hanya akan diterapkan pada **pembayaran pertama**. Semua pembayaran lainnya tidak akan mendapatkan diskon. Jika opsi ini diaktifkan, kode diskon akan berlaku untuk semua pembayaran mendatang.

**Setup fee discount:** Jika opsi ini dinonaktifkan, kode kupon **tidak akan memberikan diskon apa pun untuk biaya setup** pesanan. Jika opsi ini diaktifkan, Anda dapat mengatur diskon (persentase atau jumlah tetap) yang akan diterapkan kode kupon ini pada biaya setup plan Anda.

![Opsi toggle Apply to renewals dan setup fee discount](/img/config/discount-code-renewals.png)

**Active:** Aktifkan atau nonaktifkan kode kupon ini secara manual.

![Toggle Active untuk mengaktifkan atau menonaktifkan kode diskon secara manual](/img/config/discount-code-active.png)

Di bawah **Advanced Options**, kami memiliki pengaturan berikut:

![Opsi lanjutan kode diskon](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Di sini, Anda dapat melihat berapa kali kode diskon digunakan.

  * **Max uses:** Ini akan membatasi jumlah kali pengguna dapat menggunakan kode diskon ini. Misalnya, jika Anda memasukkan 10 di sini, kupon hanya dapat digunakan 10 kali. Setelah batas ini, kode kupon tidak dapat digunakan lagi.

![Pengaturan batas penggunaan dengan jumlah penggunaan saat ini dan kolom penggunaan maksimum](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Di sini Anda akan memiliki opsi untuk menambahkan tanggal mulai dan/atau tanggal kedaluwarsa ke kupon Anda.

![Kolom tanggal mulai dan kedaluwarsa untuk menjadwalkan kode diskon](/img/config/discount-code-dates.png)

**Limit products:** Jika Anda mengaktifkan **Select products**, semua produk Anda akan ditampilkan kepada Anda. Anda akan memiliki opsi untuk memilih secara manual (dengan mengaktifkan atau menonaktifkan) produk mana yang dapat menerima kode kupon ini. Produk yang dinonaktifkan di sini tidak akan menampilkan perubahan apa pun jika pelanggan Anda mencoba menggunakan kode kupon ini pada produk tersebut.

![Bagian batas produk dengan sakelar toggle per produk](/img/config/discount-code-limit-products.png)

Setelah mengatur semua opsi ini, klik **Save Discount Code** untuk menyimpan kupon Anda dan selesai!

![Tombol Save Discount Code di bagian bawah halaman edit](/img/config/discount-code-save.png)

Kupon sekarang ada di daftar Anda dan, dari sana, Anda dapat mengklik untuk **mengedit atau menghapus** kupon tersebut.

![Baris kode diskon dalam daftar dengan tindakan Edit dan Delete saat kursor diarahkan](/img/config/discount-codes-list-hover.png)

###

### Menggunakan Parameter URL: {#using-url-parameters}

Jika Anda ingin menyesuaikan tabel harga Anda atau membangun halaman kode kupon yang bagus untuk situs web Anda dan ingin menerapkan kode diskon ke formulir checkout Anda secara otomatis, Anda dapat melakukannya melalui parameter URL.

Pertama, Anda perlu mendapatkan tautan yang dapat dibagikan untuk plan Anda. Untuk melakukan ini, buka **Ultimate Multisite > Products** dan pilih plan.

Klik tombol **Click to Copy Shareable Link**. Ini akan memberi Anda tautan yang dapat dibagikan ke plan spesifik ini. Dalam kasus kami, tautan yang dapat dibagikan yang diberikan adalah [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Halaman produk dengan tombol tautan yang dapat dibagikan](/img/config/products-list.png)

Untuk menerapkan kode diskon Anda ke plan spesifik ini, cukup tambahkan parameter **?discount_code=XXX** ke URL. Di mana **XXX** adalah kode kupon.

Dalam contoh kami di sini, kami akan menerapkan kode kupon **50OFF** ke produk spesifik ini.

URL untuk plan spesifik ini dan dengan kode diskon 50OFF diterapkan akan terlihat seperti: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
