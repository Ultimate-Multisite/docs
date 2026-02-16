---
title: Daftarkan Endpoint API
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Endpoint API Register di Ultimate Multisite

Dalam tutorial ini, Anda akan mempelajari cara menggunakan endpoint API /register di Ultimate Multisite untuk membuat seluruh proses onboarding pelanggan baru di jaringan Anda, serta cara melakukannya dengan Zapier.

Endpoint ini menggunakan metode POST dan dipanggil melalui URL _**https://situsanda.com/wp-json/wu/v2/register**_. Dalam pemanggilan ini, 4 proses akan dijalankan di dalam jaringan Anda:

  * Pengguna WordPress baru akan dibuat, atau pengguna yang sudah ada akan diidentifikasi melalui user ID.

  * Customer baru di Ultimate Multisite akan dibuat, atau customer yang sudah ada akan diidentifikasi melalui customer ID.

  * Situs baru di jaringan WordPress akan dibuat.

  * Terakhir, Membership baru di Ultimate Multisite akan dibuat.

Untuk proses ini, Anda memerlukan kredensial API. Untuk mendapatkannya, buka panel admin jaringan Anda, navigasikan ke **Ultimate Multisite > Settings** > **API & Webhooks,** dan cari bagian API Settings.

![Bagian API Settings di Ultimate Multisite](/img/config/settings-api.png)  
Pilih **Enable API** dan dapatkan kredensial API Anda.

Sekarang, mari kita jelajahi endpoint ini dan kemudian membuat action registrasi di Zapier.

## Parameter body endpoint

Mari kita lihat gambaran umum informasi minimum yang perlu kita kirim ke endpoint. Di akhir artikel ini, Anda akan menemukan contoh pemanggilan lengkapnya.

### Customer

Berikut adalah informasi yang diperlukan untuk proses pembuatan User dan Customer di Ultimate Multisite:

"customer_id" : integer

Anda dapat mengirimkan customer ID yang sudah dibuat di jaringan Anda. Jika tidak dikirimkan, informasi di bawah ini akan digunakan untuk membuat customer baru dan pengguna WordPress baru. User ID juga dapat dikirimkan dengan cara yang sama seperti customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

Satu-satunya informasi yang kita perlukan di dalam objek ini adalah Status Membership.

"membership" { "status" : "string", // salah satu dari "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

Products diberikan dalam bentuk array dengan 1 atau lebih product ID dari jaringan Anda. Perlu diingat, endpoint ini tidak membuat produk. Lihat dokumentasi Ultimate Multisite untuk memahami lebih lanjut tentang endpoint pembuatan produk.

**"products" : [1,2],**

### Payment

Sama seperti Membership, kita hanya memerlukan status.

**"payment" { "status" : "string", // salah satu dari "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

Dan untuk melengkapi body, kita memerlukan URL dan Title situs, keduanya di dalam objek Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Respons dari endpoint register akan berupa array dengan informasi membership yang baru dibuat.

## Membuat action di Zapier

Dengan hadirnya endpoint pembuatan akun baru yang lebih lengkap ini, Anda juga dapat mengakses action baru di Zapier.

Apakah Anda tahu cara menggunakan dan memanfaatkan semua fitur yang ditawarkan versi baru Zapier? Pelajari lebih lanjut di sini. (link?)

### Membuat action

Untuk mengilustrasikan cara menggunakan endpoint registrasi dengan Zapier, mari kita buat integrasi dengan Google Forms. Setiap kali formulir ini diisi dan informasinya disimpan di spreadsheet jawaban formulir, membership baru akan dibuat di jaringan Ultimate Multisite.

Di Google Forms, buat formulir dengan field minimum yang diperlukan untuk membuat membership baru di jaringan.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Sekarang di Zapier, buat Zap baru dan hubungkan formulir yang sudah dibuat di Google melalui spreadsheet tempat data disimpan.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Selesai! Formulir Google Forms sudah terhubung dengan Zapier dan siap diintegrasikan dengan jaringan. Sekarang mari kita lanjut ke Action yang akan dihasilkan dari Trigger yang dipicu Google Forms setiap kali formulir diisi.

Cari aplikasi Ultimate Multisite yang baru dan pilih. Untuk jenis Zap ini, pilih opsi Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Setelah langkah pertama ini, pilih akun yang akan dihubungkan dengan Zap ini.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Ini adalah bagian paling krusial dari seluruh proses. Kita perlu mencocokkan field yang berasal dari Google Forms dengan field minimum yang diperlukan untuk endpoint register, seperti yang ditunjukkan di bagian sebelumnya dalam artikel ini.

Dalam contoh ini, kita hanya perlu mengonfigurasi username, email, password, nama, dan URL website. Sisanya dibiarkan dengan nilai default sehingga semua membership yang dibuat melalui Google Forms ini mengikuti pola produk dan status yang sama.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Setelah informasi diatur, lanjutkan ke pengujian akhir. Di layar terakhir, Anda dapat melihat semua field yang akan dikirim ke endpoint, informasi masing-masing, dan field yang akan dikirim kosong.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Uji Zap baru Anda dan seharusnya berhasil. Jika terjadi error, periksa semua field dan pastikan semuanya dikirim dengan benar. Karena ada banyak informasi, beberapa hal bisa terlewatkan.

### Parameter endpoint lengkap

Berikut adalah pemanggilan lengkap dan semua kemungkinan field yang dapat dikirim.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // salah satu dari "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // salah satu dari "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
