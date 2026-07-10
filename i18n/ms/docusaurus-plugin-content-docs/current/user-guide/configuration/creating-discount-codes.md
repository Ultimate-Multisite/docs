---
title: Mencipta Kod Diskaun
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Mencipta Kod Diskaun (v2) {#creating-discount-codes-v2}

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Dengan Ultimate Multisite, anda boleh mencipta kod diskaun untuk memberikan pelanggan anda diskaun pada langganan mereka. Dan menciptanya mudah!

## Mencipta dan Mengedit Kod Diskaun {#creating-and-editing-discount-codes}

Untuk mencipta atau mengedit kod diskaun, pergi ke **Ultimate Multisite > Discount Codes**.

![Senarai kod diskaun — keadaan kosong sebelum sebarang kod wujud](/img/config/discount-codes-empty.png)

Di sana anda akan mempunyai senarai kod diskaun yang telah anda cipta.

Anda boleh klik pada **Add Discount** **Code** untuk mencipta kupon baharu atau anda boleh mengedit kupon yang anda ada dengan menuding padanya dan klik **Edit**.

![Senarai kod diskaun dengan tindakan tuding yang menunjukkan pautan Edit dan Delete](/img/config/discount-codes-list-hover.png)

![Butang Add Discount Code dalam pengepala halaman](/img/config/discount-codes-add-button.png)

Anda akan dialihkan ke halaman tempat anda akan mencipta atau mengedit kod kupon anda. Dalam contoh ini, kami akan mencipta yang baharu.

![Halaman edit kod diskaun dengan semua seksyen kelihatan](/img/config/discount-code-edit.png)

Mari kita lihat tetapan yang tersedia di sini:

**Enter Discount Code:** Ini hanyalah nama kod diskaun anda. Ini bukan kod yang pelanggan anda perlu gunakan pada borang pembayaran.

**Description:** Di sini, anda boleh menerangkan secara ringkas tujuan kupon ini.

![Medan nama dan perihalan kod diskaun di bahagian atas halaman edit](/img/config/discount-code-description.png)

Anda juga boleh melihat kod diskaun sebagai aktif atau tidak aktif:

![Status aktif kod diskaun](/img/config/discount-code-active.png)

**Coupon code:** Di sinilah anda mentakrifkan kod yang pelanggan anda perlu masukkan semasa pembayaran.

![Medan kod kupon tempat pelanggan memasukkan kod semasa pembayaran](/img/config/discount-code-coupon-field.png)

**Discount:** Di sini, anda boleh menetapkan sama ada **peratusan** atau **jumlah tetap** wang untuk kod diskaun anda.

![Tetapan jumlah diskaun dengan dropdown peratusan atau jumlah tetap](/img/config/discount-code-amount.png)

**Apply to renewals:** Jika pilihan ini dimatikan, kod diskaun ini hanya akan digunakan pada **pembayaran pertama**. Semua pembayaran lain tidak akan mempunyai diskaun. Jika pilihan ini dihidupkan, kod diskaun akan sah untuk semua pembayaran akan datang.

**Setup fee discount:** Jika pilihan ini dimatikan, kod kupon **tidak akan memberikan sebarang diskaun untuk yuran persediaan** pesanan. Jika pilihan ini dihidupkan, anda boleh menetapkan diskaun (peratusan atau jumlah tetap) yang kod kupon ini akan gunakan pada yuran persediaan pelan anda.

![Pilihan toggle Apply to renewals dan setup fee discount](/img/config/discount-code-renewals.png)

**Active:** Aktifkan atau nyahaktifkan kod kupon ini secara manual.

![Toggle Active untuk mendayakan atau melumpuhkan kod diskaun secara manual](/img/config/discount-code-active.png)

Di bawah **Advanced Options**, kami mempunyai tetapan berikut:

![Pilihan lanjutan kod diskaun](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Di sini, anda boleh melihat berapa kali kod diskaun telah digunakan.

  * **Max uses:** Ini akan mengehadkan bilangan kali pengguna boleh menggunakan kod diskaun ini. Sebagai contoh, jika anda meletakkan 10 di sini, kupon hanya boleh digunakan 10 kali. Selepas had ini, kod kupon tidak boleh digunakan lagi.

![Tetapan had penggunaan dengan kiraan penggunaan semasa dan medan penggunaan maksimum](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Di sini anda akan mempunyai pilihan untuk menambah tarikh mula dan/atau tarikh luput pada kupon anda.

![Medan tarikh mula dan tarikh luput untuk menjadualkan kod diskaun](/img/config/discount-code-dates.png)

**Limit products:** Jika anda menghidupkan **Select products**, semua produk anda akan ditunjukkan kepada anda. Anda akan mempunyai pilihan untuk memilih secara manual (dengan menghidupkan atau mematikan) produk mana yang boleh menerima kod kupon ini. Produk yang dimatikan di sini tidak akan menunjukkan sebarang perubahan jika pelanggan anda cuba menggunakan kod kupon ini padanya.

![Seksyen had produk dengan suis toggle bagi setiap produk](/img/config/discount-code-limit-products.png)

Selepas menyediakan semua pilihan ini, klik pada **Save Discount Code** untuk menyimpan kupon anda dan selesai!

![Butang Save Discount Code di bahagian bawah halaman edit](/img/config/discount-code-save.png)

Kupon kini berada dalam senarai anda dan, dari situ, anda boleh klik untuk **mengedit atau memadam** kupon tersebut.

![Baris kod diskaun dalam senarai dengan tindakan tuding Edit dan Delete](/img/config/discount-codes-list-hover.png)

###

### Menggunakan Parameter URL: {#using-url-parameters}

Jika anda mahu menyesuaikan jadual harga anda atau membina halaman kod kupon yang menarik untuk laman web anda dan mahu menggunakan kod diskaun pada borang pembayaran anda secara automatik, anda boleh melakukannya melalui parameter URL.

Pertama, anda perlu mendapatkan pautan yang boleh dikongsi untuk pelan anda. Untuk melakukan ini, pergi ke **Ultimate Multisite > Products** dan pilih pelan.

Klik pada butang **Click to Copy Shareable Link**. Ini akan memberikan anda pautan yang boleh dikongsi untuk pelan khusus ini. Dalam kes kami, pautan yang boleh dikongsi yang diberikan ialah [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Halaman produk dengan butang pautan yang boleh dikongsi](/img/config/products-list.png)

Untuk menggunakan kod diskaun anda pada pelan khusus ini, cuma tambah parameter **?discount_code=XXX** pada URL. Di mana **XXX** ialah kod kupon.

Dalam contoh kami di sini, kami akan menggunakan kod kupon **50OFF** pada produk khusus ini.

URL untuk pelan khusus ini dan dengan kod diskaun 50OFF digunakan akan kelihatan seperti: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
