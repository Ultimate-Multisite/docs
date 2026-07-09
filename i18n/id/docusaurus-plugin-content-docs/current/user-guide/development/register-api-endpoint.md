---
title: Daftarkan Endpoint API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint Ultimate Multisite Register API {#the-ultimate-multisite-register-api-endpoint}

Dalam tutorial ini, Anda akan mempelajari cara menggunakan endpoint Ultimate Multisite /register API untuk membuat seluruh proses onboarding bagi pelanggan baru di jaringan Anda dan cara melakukannya dengan Zapier.

Endpoint menggunakan metode POST dan dipanggil melalui URL _**https://yoursite.com/wp-json/wu/v2/register**_. Dalam pemanggilan ini, 4 proses akan dijalankan di dalam jaringan Anda:

  * Pengguna WordPress baru atau identifikasinya melalui ID pengguna akan dibuat.

  * Customer baru di Ultimate Multisite atau identifikasinya melalui ID pelanggan akan dibuat.

  * Situs baru di jaringan WordPress akan dibuat.

  * Pada akhirnya, Membership baru di Ultimate Multisite akan dibuat.

Untuk proses ini, Anda akan memerlukan kredensial API Anda. Untuk mendapatkannya, buka panel admin jaringan Anda, navigasikan ke **Ultimate Multisite > Settings** > **API & Webhooks,** dan cari bagian API Settings.

![Bagian API Settings di Ultimate Multisite](/img/config/settings-api.png)

Berikut tampilan penuh halaman pengaturan API:

![Halaman penuh pengaturan API](/img/config/settings-api-full.png)

Pilih **Enable API** dan dapatkan kredensial API Anda.

Sekarang, mari jelajahi endpoint tersebut lalu buat tindakan pendaftaran di Zapier.

## Parameter body endpoint {#endpoint-body-parameters}

Mari lihat gambaran umum informasi minimum yang perlu kita kirim ke endpoint. Di akhir artikel ini, Anda akan menemukan pemanggilan lengkapnya.

### Customer {#customer}

Ini adalah informasi yang diperlukan untuk proses pembuatan User dan Ultimate Multisite Customer:

"customer_id" : integer

Anda dapat mengirim ID pelanggan yang dibuat di jaringan Anda. Jika tidak dikirimkan, informasi di bawah ini akan digunakan untuk membuat pelanggan baru dan pengguna WordPress baru. ID pengguna juga dapat dikirim dengan cara yang sama seperti ID pelanggan.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Satu-satunya informasi yang kita perlukan di dalam objek ini adalah Membership Status.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produk** {#products}

Produk diberikan sebagai array dengan 1 atau lebih ID produk dari jaringan Anda. Perhatikan, endpoint ini tidak membuat produk. Periksa dokumentasi Ultimate Multisite untuk lebih memahami endpoint pembuatan produk.

**"products" : [1,2],**

### Pembayaran {#payment}

Seperti pada Membership, kita hanya memerlukan status.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Situs {#site}

Dan untuk menutup body, kita memerlukan URL dan Judul situs, keduanya di dalam objek Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Pengembalian dari endpoint register akan berupa array dengan informasi membership yang baru dibuat.

## Membuat tindakan di Zapier {#creating-an-action-in-zapier}

Dengan diperkenalkannya endpoint pembuatan Account yang baru dan lebih tangguh ini, Anda juga akan mengakses tindakan baru di Zapier.

Apakah Anda tahu cara menggunakan dan menikmati semua yang ditawarkan versi baru Zapier? Pelajari lebih lanjut di sini. (tautan?)

### Membuat tindakan {#creating-an-action}

Untuk mengilustrasikan dengan lebih baik cara menggunakan endpoint pendaftaran dengan Zapier, mari buat integrasi dengan Google Forms. Setiap kali formulir ini diisi dan informasinya disimpan di lembar jawaban formulir, membership baru akan dibuat di jaringan Ultimate Multisite.

Di Google Forms, buat formulir dengan field minimum yang diperlukan untuk membuat membership baru di jaringan.

<!-- Tangkapan layar tidak tersedia: formulir Google Forms dengan field untuk membuat membership baru -->

Sekarang di Zapier, buat Zap baru dan hubungkan formulir yang dibuat di Google melalui spreadsheet tempat data disimpan.

<!-- Tangkapan layar tidak tersedia: konfigurasi trigger Zapier yang terhubung ke spreadsheet Google Forms -->

Selesai! Formulir Google Forms terhubung dengan Zapier dan siap diintegrasikan dengan jaringan. Sekarang mari lanjutkan ke Action yang akan dihasilkan dari Trigger yang dipicu Google Forms setiap kali formulir diisi.

Temukan aplikasi Ultimate Multisite yang baru dan pilih. Untuk jenis Zap ini pilih opsi Register.

<!-- Tangkapan layar tidak tersedia: pemilihan tindakan Zapier yang menampilkan aplikasi Ultimate Multisite dengan opsi Register -->

Setelah langkah pertama ini, pilih Account yang akan terhubung dengan Zap ini.<!-- Tangkapan layar tidak tersedia: langkah koneksi Account Zapier untuk Ultimate Multisite -->

Ini adalah bagian paling sensitif dari seluruh proses. Kita perlu mencocokkan field yang berasal dari Google Forms dengan field minimum yang diperlukan untuk endpoint register, seperti yang ditunjukkan pada bagian sebelumnya dari artikel ini.

Dalam contoh ini, kita hanya perlu mengonfigurasi username, email, password, nama, dan URL situs web. Sisanya dibiarkan sudah ditentukan sebelumnya sehingga semua membership yang dihasilkan dari Google Forms ini mengikuti pola produk dan status yang sama.

<!-- Tangkapan layar tidak tersedia: pemetaan field Zapier antara Google Forms dan endpoint register Ultimate Multisite -->

Dengan informasi yang sudah disiapkan, lanjutkan ke pengujian akhir. Pada layar terakhir Anda dapat melihat semua field yang akan dikirim ke endpoint, informasi masing-masing, dan field yang akan dikirim kosong.<!-- Tangkapan layar tidak tersedia: layar pengujian Zapier yang menampilkan semua field yang akan dikirim ke endpoint register -->

Uji Zap baru Anda dan seharusnya selesai dengan sukses. Jika terjadi kesalahan, periksa semua field dan apakah field tersebut dikirim dengan benar. Karena ada banyak informasi, beberapa hal bisa terlewat.

### Parameter endpoint lengkap {#complete-endpoint-parameters}

Berikut adalah pemanggilan lengkap dan semua kemungkinan field yang dapat dikirim.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
