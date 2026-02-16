---
title: Daftar Titik Akhir API
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Endpoint API Register Ultimate Multisite

Dalam tutorial ini, anda akan belajar cara menggunakan endpoint API /register Ultimate Multisite untuk mencipta keseluruhan proses onboarding bagi pelanggan baharu dalam rangkaian anda dan cara melakukannya dengan Zapier.

Endpoint ini menggunakan kaedah POST dan dipanggil melalui URL _**https://yoursite.com/wp-json/wu/v2/register**_. Dalam panggilan ini, 4 proses akan dilaksanakan dalam rangkaian anda:

  * Pengguna WordPress baharu akan dicipta atau dikenal pasti melalui ID pengguna.

  * Pelanggan baharu dalam Ultimate Multisite akan dicipta atau dikenal pasti melalui ID pelanggan.

  * Laman baharu dalam rangkaian WordPress akan dicipta.

  * Akhir sekali, Keahlian baharu dalam Ultimate Multisite akan dicipta.

Untuk proses ini, anda memerlukan kelayakan API anda. Untuk mendapatkannya, pergi ke panel admin rangkaian anda, navigasi ke **Ultimate Multisite > Settings** > **API & Webhooks,** dan cari bahagian API Settings.

![Bahagian API Settings dalam Ultimate Multisite](/img/config/settings-api.png)  
Pilih **Enable API** dan dapatkan kelayakan API anda.

Sekarang, mari kita terokai endpoint ini dan kemudian cipta tindakan pendaftaran dalam Zapier.

## Parameter body endpoint

Mari kita lihat gambaran keseluruhan maklumat minimum yang perlu dihantar ke endpoint. Di akhir artikel ini, anda akan menemui panggilan lengkap.

### Pelanggan

Ini adalah maklumat yang diperlukan untuk proses mencipta Pengguna dan Pelanggan Ultimate Multisite:

"customer_id" : integer

Anda boleh menghantar ID pelanggan yang telah dicipta dalam rangkaian anda. Jika tidak dihantar, maklumat di bawah akan digunakan untuk mencipta pelanggan baharu dan pengguna WordPress baharu. ID pengguna juga boleh dihantar dengan cara yang sama seperti ID pelanggan.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Keahlian**

Satu-satunya maklumat yang diperlukan dalam objek ini ialah Status Keahlian.

"membership" { "status" : "string", // salah satu daripada "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produk**

Produk diberikan sebagai array dengan 1 atau lebih ID produk daripada rangkaian anda. Ambil perhatian, endpoint ini tidak mencipta produk. Semak dokumentasi Ultimate Multisite untuk memahami dengan lebih baik endpoint penciptaan produk.

**"products" : [1,2],**

### Pembayaran

Sama seperti Keahlian, kita hanya perlukan status sahaja.

**"payment" { "status" : "string", // salah satu daripada "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Laman

Dan untuk melengkapkan body, kita perlukan URL dan Tajuk laman, kedua-duanya dalam objek Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Respons daripada endpoint register akan menjadi array dengan maklumat keahlian yang baru dicipta.

## Mencipta tindakan dalam Zapier

Dengan pengenalan endpoint penciptaan akaun baharu yang lebih mantap ini, anda juga boleh mengakses tindakan baharu dalam Zapier.

Adakah anda tahu cara menggunakan dan menikmati segala yang ditawarkan oleh versi baharu Zapier? Ketahui lebih lanjut di sini. (link?)

### Mencipta tindakan

Untuk menggambarkan dengan lebih baik cara menggunakan endpoint pendaftaran dengan Zapier, mari kita cipta integrasi dengan Google Forms. Setiap kali borang ini diisi dan maklumat disimpan dalam helaian jawapan borang, keahlian baharu akan dicipta dalam rangkaian Ultimate Multisite.

Dalam Google Forms, buat borang dengan medan minimum yang diperlukan untuk mencipta keahlian baharu dalam rangkaian.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Sekarang dalam Zapier, buat Zap baharu dan sambungkan borang yang dicipta dalam Google melalui hamparan di mana data disimpan.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Siap! Borang Google Forms telah disambungkan dengan Zapier dan sedia untuk diintegrasikan dengan rangkaian. Sekarang mari kita beralih kepada Action yang akan terhasil daripada Trigger yang dicetuskan Google Forms setiap kali ia diisi.

Cari aplikasi Ultimate Multisite baharu dan pilihnya. Untuk jenis Zap ini, pilih pilihan Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Selepas langkah pertama ini, pilih akaun yang akan disambungkan dengan Zap ini.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Ini adalah bahagian paling sensitif dalam keseluruhan proses. Kita perlu memadankan medan yang datang daripada Google Forms dengan medan minimum yang diperlukan untuk endpoint register, seperti yang ditunjukkan dalam bahagian sebelumnya artikel ini.

Dalam contoh ini, kita hanya perlu mengkonfigurasi nama pengguna, e-mel, kata laluan, nama dan URL laman web. Selebihnya dibiarkan pra-tentukan supaya semua keahlian yang dihasilkan melalui Google Forms ini mengikut corak produk dan status yang sama.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Dengan maklumat yang telah ditetapkan, teruskan ke ujian akhir. Pada skrin terakhir, anda boleh melihat semua medan yang akan dihantar ke endpoint, maklumat masing-masing dan medan yang akan dihantar kosong.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Uji Zap baharu anda dan ia sepatutnya berjaya diselesaikan. Jika sebarang ralat berlaku, semak semua medan dan pastikan ia dihantar dengan betul. Memandangkan terdapat banyak maklumat, sesetengah perkara boleh terlepas pandang.

### Parameter endpoint lengkap

Berikut adalah panggilan lengkap dan semua kemungkinan medan yang boleh dihantar.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // salah satu daripada "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // salah satu daripada "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
