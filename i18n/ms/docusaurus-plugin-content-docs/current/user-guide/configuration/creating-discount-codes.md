---
title: Mencipta Kod Diskaun
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# Mencipta Kod Diskaun (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Dengan Ultimate Multisite, anda boleh mencipta kod diskaun untuk memberikan pelanggan anda diskaun pada langganan mereka. Dan menciptanya sangat mudah!

## Mencipta dan Mengedit Kod Diskaun

Untuk mencipta atau mengedit kod diskaun, pergi ke **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Di sana anda akan melihat senarai kod diskaun yang telah anda cipta sebelum ini.

Anda boleh klik pada **Add Discount** **Code** untuk mencipta kupon baharu atau anda boleh mengedit yang sedia ada dengan menghala ke atasnya dan klik **Edit**.

![Senarai kod diskaun dengan pilihan tindakan hover](/img/config/discount-codes-list.png)

![Butang Add Discount Code](/img/config/discount-codes-list.png)

Anda akan dibawa ke halaman di mana anda boleh mencipta atau mengedit kod kupon anda. Dalam contoh ini, kita akan mencipta yang baharu.

![Halaman edit kod diskaun](/img/config/discount-codes-list.png)

Mari kita lihat tetapan yang tersedia di sini:

**Enter Discount Code:** Ini hanyalah nama kod diskaun anda. Ini bukan kod yang pelanggan anda perlu gunakan pada borang checkout.

**Description:** Di sini, anda boleh menerangkan secara ringkas tujuan kupon ini.

![Ruangan nama dan penerangan kod diskaun](/img/config/discount-codes-list.png)

**Coupon code:** Di sinilah anda menetapkan kod yang pelanggan anda perlu masukkan semasa checkout.

![Ruangan coupon code](/img/config/discount-codes-list.png)

**Discount:** Di sini, anda boleh menetapkan sama ada **peratusan** atau **jumlah tetap** wang untuk kod diskaun anda.

![Tetapan peratusan atau jumlah tetap diskaun](/img/config/discount-codes-list.png)

**Apply to renewals:** Jika pilihan ini dimatikan, kod diskaun ini hanya akan digunakan untuk **pembayaran pertama** sahaja. Semua pembayaran lain tidak akan mendapat diskaun. Jika pilihan ini dihidupkan, kod diskaun akan sah untuk semua pembayaran akan datang.

**Setup fee discount:** Jika pilihan ini dimatikan, kod kupon **tidak akan memberikan sebarang diskaun untuk yuran persediaan** pesanan. Jika pilihan ini dihidupkan, anda boleh menetapkan diskaun (peratusan atau jumlah tetap) yang kod kupon ini akan berikan untuk yuran persediaan pelan anda.

![Pilihan Apply to renewals dan setup fee discount](/img/config/discount-codes-list.png)

**Active:** Aktifkan atau nyahaktifkan kod kupon ini secara manual.

![Togol aktif untuk kod diskaun](/img/config/discount-codes-list.png)

Di bawah **Advanced Optio** **ns**, kita ada tetapan berikut:

**Limit uses:**

  * **Uses:** Di sini, anda boleh melihat berapa kali kod diskaun telah digunakan.

  * **Max uses:** Ini akan mengehadkan bilangan kali pengguna boleh menggunakan kod diskaun ini. Contohnya, jika anda masukkan 10 di sini, kupon hanya boleh digunakan 10 kali sahaja. Selepas had ini, kod kupon tidak boleh digunakan lagi.

![Tetapan had penggunaan dengan ruangan uses dan max uses](/img/config/discount-codes-list.png)**Start & expiration dates:** Di sini anda mempunyai pilihan untuk menambah tarikh mula dan/atau tarikh tamat tempoh untuk kupon anda.

![Ruangan tarikh mula dan tarikh tamat tempoh](/img/config/discount-codes-list.png)

**Limit products:** Jika anda menghidupkan **Select products**, semua produk anda akan dipaparkan. Anda mempunyai pilihan untuk memilih secara manual (dengan menghidupkan atau mematikan) produk mana yang boleh menerima kod kupon ini. Produk yang dimatikan di sini tidak akan menunjukkan sebarang perubahan jika pelanggan anda cuba menggunakan kod kupon ini untuk mereka.

![Togol pemilihan had produk](/img/config/discount-codes-list.png)

Setelah menetapkan semua pilihan ini, klik pada **Save Discount Code** untuk menyimpan kupon anda dan selesai!

![Butang Save Discount Code](/img/config/discount-codes-list.png)

Kupon kini berada dalam senarai anda dan, dari sana, anda boleh klik untuk **mengedit atau memadam**nya.

![Kod diskaun dalam senarai dengan pilihan edit dan delete](/img/config/discount-codes-list.png)

### 

### Menggunakan Parameter URL:

Jika anda ingin menyesuaikan jadual harga atau membina halaman kod kupon yang menarik untuk laman web anda dan ingin menggunakan kod diskaun pada borang checkout anda secara automatik, anda boleh melakukannya melalui parameter URL.

Pertama, anda perlu mendapatkan pautan kongsi untuk pelan anda. Untuk melakukan ini, pergi ke **Ultimate Multisite > Products** dan pilih satu pelan.

Klik pada butang **Click to Copy Shareable Link**. Ini akan memberikan anda pautan kongsi ke pelan khusus ini. Dalam kes kita, pautan kongsi yang diberikan ialah [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Halaman produk dengan butang pautan kongsi](/img/config/products-list.png)

Untuk menggunakan kod diskaun anda pada pelan khusus ini, cuma tambahkan parameter **?discount_code=XXX** pada URL. Di mana **XXX** adalah kod kupon.

Dalam contoh kita di sini, kita akan menggunakan kod kupon **50OFF** pada produk khusus ini.

URL untuk pelan khusus ini dengan kod diskaun 50OFF yang digunakan akan kelihatan seperti: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
