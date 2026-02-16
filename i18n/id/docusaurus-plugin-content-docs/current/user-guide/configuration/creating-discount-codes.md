---
title: Membuat Kode Diskon
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# Membuat Kode Diskon (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Dengan Ultimate Multisite, Anda bisa membuat kode diskon untuk memberikan potongan harga kepada klien pada langganan mereka. Dan cara membuatnya sangat mudah!

## Membuat dan Mengedit Kode Diskon

Untuk membuat atau mengedit kode diskon, buka **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Di sana Anda akan melihat daftar kode diskon yang sudah pernah dibuat.

Anda bisa mengklik **Add Discount** **Code** untuk membuat kupon baru, atau mengedit yang sudah ada dengan mengarahkan kursor ke atasnya lalu mengklik **Edit**.

![Daftar kode diskon dengan aksi hover](/img/config/discount-codes-list.png)

![Tombol Add Discount Code](/img/config/discount-codes-list.png)

Anda akan diarahkan ke halaman untuk membuat atau mengedit kode kupon. Pada contoh ini, kita akan membuat yang baru.

![Halaman edit kode diskon](/img/config/discount-codes-list.png)

Mari kita lihat pengaturan yang tersedia di sini:

**Enter Discount Code:** Ini hanyalah nama dari kode diskon Anda. Ini bukan kode yang perlu digunakan pelanggan di formulir checkout.

**Description:** Di sini, Anda bisa menjelaskan secara singkat tujuan kupon ini.

![Kolom nama dan deskripsi kode diskon](/img/config/discount-codes-list.png)

**Coupon code:** Di sinilah Anda menentukan kode yang harus dimasukkan pelanggan saat checkout.

![Kolom kode kupon](/img/config/discount-codes-list.png)

**Discount:** Di sini, Anda bisa mengatur **persentase** atau **jumlah tetap** uang untuk kode diskon Anda.

![Pengaturan persentase atau jumlah tetap diskon](/img/config/discount-codes-list.png)

**Apply to renewals:** Jika opsi ini dinonaktifkan, kode diskon hanya akan diterapkan pada **pembayaran pertama**. Semua pembayaran berikutnya tidak akan mendapat diskon. Jika opsi ini diaktifkan, kode diskon akan berlaku untuk semua pembayaran di masa mendatang.

**Setup fee discount:** Jika opsi ini dinonaktifkan, kode kupon **tidak akan memberikan diskon untuk biaya setup** dari pesanan. Jika opsi ini diaktifkan, Anda bisa mengatur diskon (persentase atau jumlah tetap) yang akan diterapkan kode kupon ini pada biaya setup dari paket Anda.

![Opsi apply to renewals dan setup fee discount](/img/config/discount-codes-list.png)

**Active:** Aktifkan atau nonaktifkan kode kupon ini secara manual.

![Toggle aktif untuk kode diskon](/img/config/discount-codes-list.png)

Di bagian **Advanced Optio** **ns**, kita memiliki pengaturan berikut:

**Limit uses:**

  * **Uses:** Di sini, Anda bisa melihat berapa kali kode diskon sudah digunakan.

  * **Max uses:** Ini akan membatasi berapa kali pengguna bisa menggunakan kode diskon ini. Misalnya, jika Anda memasukkan angka 10 di sini, kupon hanya bisa digunakan 10 kali. Setelah batas ini tercapai, kode kupon tidak bisa digunakan lagi.

![Pengaturan limit uses dengan kolom uses dan max uses](/img/config/discount-codes-list.png)**Start & expiration dates:** Di sini Anda bisa menambahkan tanggal mulai dan/atau tanggal kedaluwarsa untuk kupon Anda.

![Kolom tanggal mulai dan kedaluwarsa](/img/config/discount-codes-list.png)

**Limit products:** Jika Anda mengaktifkan **Select products**, semua produk Anda akan ditampilkan. Anda bisa memilih secara manual (dengan mengaktifkan atau menonaktifkan) produk mana yang bisa menerima kode kupon ini. Produk yang dinonaktifkan di sini tidak akan menunjukkan perubahan apa pun jika pelanggan mencoba menggunakan kode kupon ini pada produk tersebut.

![Toggle pemilihan limit products](/img/config/discount-codes-list.png)

Setelah mengatur semua opsi ini, klik **Save Discount Code** untuk menyimpan kupon Anda dan selesai!

![Tombol Save Discount Code](/img/config/discount-codes-list.png)

Kupon sekarang sudah ada di daftar Anda dan dari sana, Anda bisa mengklik untuk **mengedit atau menghapusnya**.

![Kode diskon dalam daftar dengan opsi edit dan delete](/img/config/discount-codes-list.png)

### 

### Menggunakan Parameter URL:

Jika Anda ingin menyesuaikan tabel harga atau membuat halaman kode kupon yang menarik untuk website Anda dan ingin menerapkan kode diskon ke formulir checkout secara otomatis, Anda bisa melakukannya melalui parameter URL.

Pertama, Anda perlu mendapatkan tautan yang bisa dibagikan untuk paket Anda. Untuk melakukan ini, buka **Ultimate Multisite > Products** dan pilih sebuah paket.

Klik tombol **Click to Copy Shareable Link**. Ini akan memberikan Anda tautan yang bisa dibagikan untuk paket spesifik ini. Dalam contoh kita, tautan yang diberikan adalah [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Halaman produk dengan tombol shareable link](/img/config/products-list.png)

Untuk menerapkan kode diskon Anda ke paket spesifik ini, cukup tambahkan parameter **?discount_code=XXX** ke URL. Di mana **XXX** adalah kode kupon.

Dalam contoh kita di sini, kita akan menerapkan kode kupon **50OFF** ke produk spesifik ini.

URL untuk paket spesifik ini dengan kode diskon 50OFF yang diterapkan akan terlihat seperti: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
