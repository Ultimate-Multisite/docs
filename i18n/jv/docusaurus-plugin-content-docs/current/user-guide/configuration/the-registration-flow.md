---
title: Alur Registrasi
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Alur Registrasi (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Pengguna bisa mendaftar ke jaringan Anda dengan beberapa cara. Mereka bisa menggunakan formulir pendaftaran Anda atau tautan yang bisa dibagikan untuk paket yang sudah dipilih sebelumnya. Di sini kami akan tunjukkan bagaimana pelanggan Anda bisa mendaftar di jaringan Anda menggunakan jalur yang tersedia dan apa yang terjadi setelah mereka mendaftar di jaringan Anda.

## Menggunakan Formulir Pendaftaran:

Ini adalah proses pendaftaran standar. Anda membuat halaman pendaftaran dengan **checkout form** (formulir pembayaran) dan ini akan menjadi tempat pelanggan Anda pergi untuk mendaftar di jaringan Anda dan berlangganan paket. Anda bisa punya banyak halaman pendaftaran, masing-masing dengan formulir pendaftaran yang berbeda jika Anda mau.

Halaman default untuk pendaftaran adalah [_**yourdomain.com/register**_](http://yourdomain.com/register), tapi Anda bisa mengubah ini kapan saja di **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Setelah pengguna sampai di halaman pendaftaran Anda (biasanya dengan mengklik tombol **Sign in** atau **Buy now**), mereka akan melihat formulir pendaftaran Anda di sana.

![Formulir pendaftaran ditampilkan di halaman pendaftaran](/img/frontend/registration-form.png)

Ini contoh formulir checkout yang tampil di bagian depan (frontend):

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Yang mereka harus lakukan hanyalah mengisi semua kolom wajib - email, username, password, dll... - dan membayar untuk paket atau mengonfirmasi alamat email mereka jika mereka mendaftar untuk paket gratis atau paket berbayar dengan masa percobaan tanpa informasi pembayaran.

Di halaman "Terima kasih" (Thank you), mereka akan melihat pesan yang memberi tahu apakah mereka perlu mengonfirmasi alamat email mereka atau apakah situs web mereka sudah aktif dan mereka bisa mulai menggunakannya.

![Halaman Terima Kasih setelah registrasi](/img/frontend/registration-thank-you.png)

Yen email alamat perlu dikonfirmasi, mereka harus masuk ke kotak masuk email mereka dan klik tautan verifikasi. Situs web mereka tidak akan aktif kalau alamat emailnya belum diverifikasi.

Kalau mereka sudah daftar di paket berbayar atau verifikasi email tidak wajib di jaringan Anda, situs web mereka akan langsung aktif setelah pembayaran selesai dan mereka akan ditunjukkan tautan untuk *sign in* ke *dashboard* mereka.

![Situs aktif dengan tautan untuk sign in ke dashboard](/img/frontend/site-activated.png)

## Menggunakan Tautan yang Bisa Dibagikan (*Shareable Link*):

Proses mendaftar menggunakan tautan yang bisa dibagikan pada dasarnya sama seperti formulir pendaftaran, bedanya cuma kalau pakai tautan yang bisa dibagikan, pelanggan Anda bisa memilih produk atau *website template* di form pembayaran (lihat bagian Pre-selecting products and templates via URL parameters) atau mungkin ada kode kupon yang ditambahkan (lihat bagian Using URL Parameters).

Proses daftarnya akan sama: mereka perlu mengisi nama, *username*, alamat email, nama situs web dan judul, dll... tapi paket atau *site template*-nya sudah dipilih sebelumnya untuk mereka.

### Mendaftar Menggunakan Pembayaran Manual (*Manual Payments*):

Kalau Anda tidak mau pakai PayPal, Stripe atau gerbang pembayaran lain yang ditawarkan oleh Ultimate Multisite atau integrasi tambahannya, Anda bisa menggunakan pembayaran manual untuk pelanggan Anda. Dengan cara ini, Anda bisa membuat faktur (*invoice*) untuk mereka bayar ke *payment processor* pilihan Anda setelah mereka mendaftar di jaringan Anda.

Proses daftarnya akan persis sama seperti di atas, tapi di halaman pendaftaran pelanggan Anda akan melihat pesan yang menyatakan bahwa mereka akan menerima email dengan instruksi lebih lanjut untuk menyelesaikan pembayaran.

![Pesan pembayaran manual saat registrasi](/img/frontend/registration-manual-notice.png)

Lan sawise registrasi wis rampung, wong bakal weruh instruksi pembayaran sing wis sampeyan set (lan uga bakal nampa email saka dheweke).

![Instruksi pembayaran ditunjuka setelah registrasi](/img/frontend/registration-payment-instructions.png)

Instruksi pembayaran bisa diubah nang **Ultimate Multisite > Settings > Payments** sawise ngaktifake opsi pembayaran **Manual**:

![Tombol toggle pembayaran manual karo kolom instruksi pembayaran](/img/config/manual-gateway-settings.png)

Sawise pelanggan sampeyan rampung mbayar secara manual lan ngirim konfirmasi marang sampeyan, sampeyan kudu **konfirmasi pembayaran secara manual** kanggo ngaktifake keanggotaan pelanggan lan website.

Kanggo nindakake iki, tindakna menyang **Ultimate Multisite > Payments** lan goleki pembayaran pelanggan kasebut. Statusé isih bakal nuduh **Pending**.

![Daftar pembayaran karo pembayaran manual tertunda](/img/admin/payments-list.png)

Klik nomor pembayaran kasebut lan sampeyan bakal bisa ngubah statusé dadi **Completed**.

![Halaman detail pembayaran](/img/admin/payment-edit.png)

![Mengubah status pembayaran dadi Completed](/img/admin/payment-status-completed.png)

Sawise ngowahi statusé dadi **Completed**, sampeyan bakal weruh pesan **Activate membership**. Toggle opsi iki dadi **on** kanggo ngaktifake keanggotaan lan website sing terkait karo pelanggan kasebut. Banjur, klik kanggo **Save Payment**.

![Tombol toggle activate membership lan Save Payment](/img/admin/payment-activate-membership.png)

Pelanggan sampeyan saiki bakal bisa akses dashboard lan kabeh fitur sing wis diwenehi langganan.
