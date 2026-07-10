---
title: Alur Pendaftaran
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Alur Pendaftaran (v2) {#the-registration-flow-v2}

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Pengguna dapat mendaftar ke jaringan Anda dengan berbagai cara. Mereka dapat menggunakan formulir pendaftaran Anda atau tautan yang dapat dibagikan ke paket yang sudah dipilih sebelumnya. Di sini kami akan menunjukkan bagaimana pelanggan Anda dapat mendaftar di jaringan Anda menggunakan jalur yang tersedia dan apa yang terjadi setelah mereka mendaftar di jaringan Anda.

## Menggunakan Formulir Pendaftaran: {#using-the-registration-form}

Ini adalah proses pendaftaran standar. Anda membuat halaman pendaftaran dengan **formulir pembayaran** dan di sinilah pelanggan Anda akan mendaftar di jaringan Anda serta berlangganan sebuah paket. Anda dapat memiliki beberapa halaman pendaftaran, masing-masing dengan formulir pendaftaran yang berbeda jika Anda mau.

Halaman default untuk pendaftaran adalah [_**yourdomain.com/register**_](http://yourdomain.com/register), tetapi Anda dapat mengubahnya kapan saja di **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Setelah pengguna membuka halaman pendaftaran Anda (biasanya dengan mengeklik tombol **Masuk** atau **Beli sekarang**), mereka akan melihat formulir pendaftaran Anda di sana.

![Formulir pendaftaran yang ditampilkan di halaman pendaftaran](/img/frontend/registration-form.png)

Berikut adalah contoh formulir pembayaran seperti yang muncul di frontend:

![Formulir pendaftaran pembayaran frontend](/img/config/checkout-frontend-registration.png)

Yang perlu mereka lakukan hanyalah mengisi semua bidang wajib - email, nama pengguna, kata sandi, dll... - dan membayar paket tersebut atau mengonfirmasi alamat email mereka jika mereka mendaftar untuk paket gratis atau paket berbayar dengan masa percobaan tanpa informasi pembayaran.

Di halaman "Terima kasih", mereka akan melihat pesan yang memberi tahu apakah mereka perlu mengonfirmasi alamat email mereka atau apakah website mereka sudah diaktifkan dan mereka dapat mulai menggunakannya.

![Halaman Terima Kasih setelah pendaftaran](/img/frontend/registration-thank-you.png)

Jika konfirmasi alamat email diperlukan, mereka harus membuka kotak masuk email mereka dan mengeklik tautan verifikasi. Website mereka tidak akan diaktifkan jika alamat email mereka tidak diverifikasi.

Jika mereka telah mendaftar pada paket berbayar atau verifikasi email tidak wajib di jaringan Anda, website mereka akan langsung diaktifkan setelah pembayaran dan mereka akan ditampilkan tautan untuk masuk ke dashboard mereka.

![Situs diaktifkan dengan tautan untuk masuk ke dashboard](/img/frontend/site-activated.png)

## Menggunakan Tautan yang Dapat Dibagikan: {#using-a-shareable-link}

Proses pendaftaran menggunakan tautan yang dapat dibagikan pada dasarnya sama dengan formulir pendaftaran, satu-satunya perbedaan adalah bahwa dengan menggunakan tautan yang dapat dibagikan, pelanggan Anda dapat memiliki produk atau templat website yang sudah dipilih sebelumnya pada formulir pembayaran (lihat bagian Memilih produk dan templat terlebih dahulu melalui parameter URL) atau mungkin kode kupon yang ditambahkan (lihat bagian Menggunakan Parameter URL).

Proses pendaftarannya akan sama: mereka perlu mengisi nama, nama pengguna, alamat email, nama dan judul website, dll... tetapi paket atau templat situs sudah dipilih sebelumnya untuk mereka.

### Mendaftar Menggunakan Pembayaran Manual: {#registering-using-manual-payments}

Jika Anda tidak ingin menggunakan PayPal, Stripe, atau gateway pembayaran lain yang ditawarkan oleh Ultimate Multisite atau integrasi add-on-nya, Anda dapat menggunakan pembayaran manual untuk pelanggan Anda. Dengan cara ini, Anda dapat membuat faktur untuk mereka bayar melalui pemroses pembayaran pilihan Anda setelah mereka mendaftar di jaringan Anda.

Proses pendaftarannya akan persis sama seperti di atas, tetapi di halaman pendaftaran pelanggan Anda akan melihat pesan yang menyatakan bahwa mereka akan menerima email dengan instruksi lebih lanjut untuk menyelesaikan pembayaran.

![Pesan pembayaran manual saat pendaftaran](/img/frontend/registration-manual-notice.png)

Dan setelah pendaftaran selesai, mereka akan melihat instruksi pembayaran yang Anda tetapkan (dan juga menerimanya di email mereka).

![Instruksi pembayaran yang ditampilkan setelah pendaftaran](/img/frontend/registration-payment-instructions.png)

Instruksi pembayaran dapat diubah di **Ultimate Multisite > Settings > Payments** setelah mengaktifkan opsi pembayaran **Manual**:

![Toggle pembayaran manual dengan bidang instruksi pembayaran](/img/config/manual-gateway-settings.png)

Setelah pelanggan Anda menyelesaikan pembayaran manual dan mengirimkan konfirmasi kepada Anda, Anda perlu **mengonfirmasi pembayaran secara manual** untuk mengaktifkan keanggotaan dan website pelanggan.

Untuk melakukannya, buka **Ultimate Multisite > Payments** dan temukan pembayaran pelanggan. Statusnya seharusnya masih menunjukkan **Pending**.

![Daftar pembayaran dengan pembayaran manual yang tertunda](/img/admin/payments-list.png)

Klik nomor pembayaran dan Anda akan dapat mengubah statusnya menjadi **Completed**.

![Halaman detail pembayaran](/img/admin/payment-edit.png)

![Mengubah status pembayaran menjadi Completed](/img/admin/payment-status-completed.png)

Setelah mengubah statusnya menjadi **Completed** , Anda akan melihat pesan **Activate membership**. Aktifkan opsi ini **on** untuk mengaktifkan keanggotaan dan website yang terkait dengan pelanggan ini. Lalu, klik **Save Payment**.

![Toggle Activate membership dan tombol Save Payment](/img/admin/payment-activate-membership.png)

Pelanggan Anda sekarang seharusnya dapat mengakses dashboard dan semua fitur yang mereka langgani.
