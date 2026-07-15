---
title: Alur Registrasi
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Alur Registrasi (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Pengguna bisa mendaftar ke jaringan Anda dengan cara yang berbeda. Mereka bisa pakai formulir registrasi Anda atau tautan yang bisa dibagikan untuk paket yang sudah dipilih sebelumnya. Di sini kami akan tunjukkan bagaimana pelanggan Anda bisa daftar di jaringan Anda menggunakan jalur yang tersedia dan apa yang terjadi setelah mereka mendaftar di jaringan Anda.

## Menggunakan Formulir Registrasi: {#using-the-registration-form}

Ini adalah proses registrasi standar. Anda membuat halaman registrasi dengan **checkout form** (formulir pembayaran) dan ini tempat pelanggan Anda akan pergi untuk mendaftar di jaringan Anda dan berlangganan paket. Anda bisa punya banyak halaman registrasi, masing-masing dengan formulir registrasi yang berbeda kalau mau.

Halaman default untuk registrasi adalah [_**yourdomain.com/register**_](http://yourdomain.com/register), tapi Anda bisa ganti ini kapan saja di **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Setelah pengguna sampai di halaman registrasi Anda (biasanya dengan mengklik tombol **Sign in** atau **Buy now**), mereka akan melihat formulir registrasi Anda di sana.

![Formulir registrasi ditampilkan di halaman registrasi](/img/frontend/registration-form.png)

Ini contoh formulir checkout yang tampil di bagian depan (frontend):

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Yang mereka harus lakukan hanyalah mengisi semua kolom wajib - email, username, password, dll... - dan bayar untuk paketnya atau konfirmasi alamat email mereka jika mereka mendaftar untuk paket gratis atau paket berbayar dengan masa percobaan tanpa informasi pembayaran.

Di halaman "Terima kasih" (Thank you), mereka akan melihat pesan yang memberitahu apakah mereka perlu mengonfirmasi alamat email atau apakah situs web mereka sudah aktif dan bisa langsung mulai menggunakannya.

![Halaman Terima Kasih setelah Registrasi](/img/frontend/registration-thank-you.png)

Lamun konfirmasi alamat email dipersulkan, maranéhna kudu ka kotak masuk emailna terus klik tautan verifikasi. Website maranéhna moal aktif lamun alamat emailna teu diverifikasi.

Lamun maranéhna geus registrasi dina paket berbayar atawa verifikasi email teu wajib di jaringan anjeun, website maranéhna bakal langsung aktif sanggeus checkout jeung bakal ditunjuke tautan pikeun login ka dashboard maranéhna.

![Website aktif kalayan tautan pikeun login ka dashboard](/img/frontend/site-activated.png)

## Ngagunake Tautan Shareable (Shareable Link): {#using-a-shareable-link}

Proses registrasi ngagunake tautan shareable téh intina sarua jeung formulir registrasi, ngan béda nyaéta ngagunake tautan shareable, pelanggan anjeun bisa milih produk atawa template website saméméh dina formulir checkout (refer ka bagian Pre-selecting products and templates via URL parameters) atawa mungkin nambahan kode kupon (refer ka bagian Using URL Parameters).

Proses registrasina bakal sarua: maranéhna kudu ngisian nami, username, alamat email, nama website jeung judul, jsb... tapi paket atawa template situs geus dipilih saméméh pikeun maranéhna.

### Registrasi Ngagunake Pembayaran Manual (Manual Payments): {#registering-using-manual-payments}

Lamun anjeun teu hayang ngagunake PayPal, Stripe atawa gerbang pembayaran séjén anu ditawarke ku Ultimate Multisite atawa integrasi add-onna, anjeun bisa ngagunake pembayaran manual pikeun pelanggan anjeun. Cara ieu, anjeun bisa ngajadikeun invoice keur maranéhna bayar ka processor pembayaran pilihan anjeun sanggeus maranéhna registrasi dina jaringan anjeun.

Proses registrasina bakal persis sarua saperti di luhur, tapi dina halaman registrasi pelanggan anjeun bakal ningali pesan yén maranéhna bakal meunang email kalayan instruksi salajengna pikeun ngalengkepan pembayaran.

![Pesan pembayaran manual saat registrasi](/img/frontend/registration-manual-notice.png)

Terus, setelah registrasi selesai, mereka akan lihat instruksi pembayaran yang sudah Anda atur (dan juga akan terima lewat email).

![Instruksi pembayaran ditampilkan setelah registrasi](/img/frontend/registration-payment-instructions.png)

Instruksi pembayaran bisa diubah di **Ultimate Multisite > Settings > Payments** setelah mengaktifkan opsi pembayaran **Manual**:

![Tombol toggle pembayaran manual dengan kolom instruksi pembayaran](/img/config/manual-gateway-settings.png)

Setelah pelanggan Anda menyelesaikan pembayaran manual dan mengirimkan konfirmasinya, Anda perlu **mengonfirmasi pembayaran secara manual** untuk mengaktifkan keanggotaan pelanggan dan situs webnya.

Untuk melakukan ini, buka **Ultimate Multisite > Payments** dan cari pembayaran pelanggan tersebut. Statusnya seharusnya masih menunjukkan **Pending**.

![Daftar pembayaran dengan pembayaran manual tertunda](/img/admin/payments-list.png)

Klik nomor pembayarannya, dan Anda bisa mengubah statusnya menjadi **Completed** (Selesai).

![Halaman detail pembayaran](/img/admin/payment-edit.png)

![Mengubah status pembayaran menjadi Completed](/img/admin/payment-status-completed.png)

Setelah statusnya diubah menjadi **Completed**, Anda akan melihat pesan **Activate membership** (Aktifkan keanggotaan). Geser opsi ini **on** (aktif) untuk mengaktifkan keanggotaan dan situs web yang terkait dengan pelanggan tersebut. Kemudian, klik untuk **Save Payment** (Simpan Pembayaran).

![Tombol toggle aktivasi keanggotaan dan Save Payment](/img/admin/payment-activate-membership.png)

Pelanggan Anda sekarang seharusnya bisa mengakses dashboard dan semua fitur yang mereka langgani.
