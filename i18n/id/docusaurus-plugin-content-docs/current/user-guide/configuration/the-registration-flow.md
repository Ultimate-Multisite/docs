---
title: Alur Pendaftaran
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# Alur Pendaftaran (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Pengguna dapat mendaftar ke jaringan Anda dengan berbagai cara. Mereka bisa menggunakan formulir pendaftaran Anda atau tautan yang bisa dibagikan ke paket yang sudah dipilih sebelumnya. Di sini kami akan menunjukkan bagaimana pelanggan Anda dapat mendaftar di jaringan Anda menggunakan jalur yang tersedia dan apa yang terjadi setelah mereka mendaftar di jaringan Anda.

## Menggunakan Formulir Pendaftaran:

Ini adalah proses pendaftaran standar. Anda membuat halaman pendaftaran dengan **formulir checkout** dan di sinilah pelanggan Anda akan pergi untuk mendaftar di jaringan Anda dan berlangganan paket. Anda dapat memiliki beberapa halaman pendaftaran, masing-masing dengan formulir pendaftaran yang berbeda jika Anda mau.

Halaman default untuk pendaftaran adalah [_**domainanda.com/register**_](http://yourdomain.com/register), tetapi Anda dapat mengubahnya kapan saja di **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Setelah pengguna sampai di halaman pendaftaran Anda (biasanya dengan mengklik tombol **Sign in** atau **Beli sekarang**), mereka akan melihat formulir pendaftaran Anda di sana.

![Formulir pendaftaran ditampilkan di halaman pendaftaran](/img/config/checkout-forms-list.png)

Yang perlu mereka lakukan hanyalah mengisi semua kolom wajib - email, username, password, dll... - dan membayar paket tersebut atau mengonfirmasi alamat email mereka jika mereka mendaftar untuk paket gratis atau paket berbayar dengan periode trial tanpa informasi pembayaran.

Di halaman "Terima Kasih", mereka akan melihat pesan yang memberitahu apakah mereka perlu mengonfirmasi alamat email mereka atau apakah situs web mereka sudah diaktifkan dan mereka bisa mulai menggunakannya.

![Halaman Terima Kasih setelah pendaftaran](/img/config/checkout-form-editor.png)

Jika konfirmasi alamat email diperlukan, mereka perlu membuka kotak masuk email mereka dan mengklik tautan verifikasi. Situs web mereka tidak akan diaktifkan jika alamat email mereka tidak terverifikasi.

Jika mereka mendaftar pada paket berbayar atau verifikasi email tidak wajib di jaringan Anda, situs web mereka akan diaktifkan langsung setelah checkout dan mereka akan ditampilkan tautan untuk masuk ke dashboard mereka.

![Situs diaktifkan dengan tautan untuk masuk ke dashboard](/img/config/checkout-form-editor.png)

## Menggunakan Tautan yang Dapat Dibagikan:

Proses pendaftaran menggunakan tautan yang dapat dibagikan pada dasarnya sama dengan formulir pendaftaran, satu-satunya perbedaan adalah dengan menggunakan tautan yang dapat dibagikan, pelanggan Anda dapat memiliki produk atau template situs web yang sudah dipilih sebelumnya di formulir checkout (lihat bagian Pre-selecting products and templates via URL parameters) atau mungkin kode kupon yang sudah ditambahkan (lihat bagian Using URL Parameters).

Proses pendaftarannya akan sama: mereka perlu mengisi nama, username, alamat email, nama dan judul situs web, dll... tetapi paket atau template situs sudah dipilih sebelumnya untuk mereka.

### Mendaftar Menggunakan Pembayaran Manual:

Jika Anda tidak ingin menggunakan PayPal, Stripe atau gateway pembayaran lain yang ditawarkan oleh Ultimate Multisite atau integrasi add-on-nya, Anda dapat menggunakan pembayaran manual untuk pelanggan Anda. Dengan cara ini, Anda dapat membuat invoice untuk mereka bayar di pemroses pembayaran pilihan Anda setelah mereka mendaftar di jaringan Anda.

Proses pendaftarannya akan persis sama seperti di atas, tetapi di halaman pendaftaran pelanggan Anda akan melihat pesan yang menyatakan bahwa mereka akan menerima email dengan instruksi lebih lanjut untuk menyelesaikan pembayaran.

![Pesan pembayaran manual saat pendaftaran](/img/config/settings-payment-gateways.png)

Dan setelah pendaftaran selesai, mereka akan melihat instruksi pembayaran yang Anda tetapkan (dan juga menerimanya di email mereka).

![Instruksi pembayaran ditampilkan setelah pendaftaran](/img/config/settings-payment-gateways.png)

Instruksi pembayaran dapat diubah di **Ultimate Multisite > Settings > Payments** setelah mengaktifkan opsi pembayaran **Manual**:

![Toggle pembayaran manual dengan kolom instruksi pembayaran](/img/config/settings-payment-gateways.png)

Setelah pelanggan Anda menyelesaikan pembayaran manual dan mengirimkan konfirmasi kepada Anda, Anda perlu **mengonfirmasi pembayaran secara manual** untuk mengaktifkan keanggotaan dan situs web pelanggan.

Untuk melakukan ini, buka **Ultimate Multisite > Payments** dan temukan pembayaran pelanggan tersebut. Status seharusnya masih menunjukkan **Pending**.

![Daftar pembayaran dengan pembayaran manual pending](/img/admin/payments-list.png)

Klik pada nomor pembayaran dan Anda akan dapat mengubah statusnya menjadi **Completed**.

![Halaman detail pembayaran](/img/admin/payments-list.png)

![Mengubah status pembayaran menjadi Completed](/img/admin/payments-list.png)

Setelah mengubah statusnya menjadi **Completed**, Anda akan melihat pesan **Activate membership**. Aktifkan opsi ini untuk mengaktifkan keanggotaan dan situs web yang terkait dengan pelanggan ini. Kemudian, klik **Save Payment**.

![Toggle Activate membership dan tombol Save Payment](/img/admin/payments-list.png)

Pelanggan Anda sekarang seharusnya dapat mengakses dashboard dan semua fitur yang mereka langganan.
