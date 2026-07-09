---
title: Daftarkan Titik Akhir API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Titik akhir API Register Ultimate Multisite

Dalam tutorial ini, anda akan mempelajari cara menggunakan titik akhir API /register Ultimate Multisite untuk mencipta keseluruhan proses onboarding bagi pelanggan baharu dalam rangkaian anda dan cara melakukannya dengan Zapier.

Titik akhir ini menggunakan kaedah POST dan dipanggil melalui URL _**https://yoursite.com/wp-json/wu/v2/register**_. Dalam panggilan ini, 4 proses akan dilaksanakan dalam rangkaian anda:

  * Pengguna WordPress baharu atau pengenalannya melalui ID pengguna akan dicipta.

  * Pelanggan baharu dalam Ultimate Multisite atau pengenalannya melalui ID pelanggan akan dicipta.

  * Laman baharu pada rangkaian WordPress akan dicipta.

  * Pada akhirnya, Membership baharu dalam Ultimate Multisite akan dicipta.

Untuk proses ini, anda memerlukan kelayakan API anda. Untuk mendapatkannya, pergi ke panel pentadbir rangkaian anda, navigasi ke **Ultimate Multisite > Settings** > **API & Webhooks,** dan cari bahagian API Settings.

![Bahagian API Settings dalam Ultimate Multisite](/img/config/settings-api.png)

Berikut ialah paparan penuh halaman tetapan API:

![Halaman penuh tetapan API](/img/config/settings-api-full.png)

Pilih **Enable API** dan dapatkan kelayakan API anda.

Sekarang, mari kita terokai titik akhir ini dan kemudian cipta tindakan pendaftaran dalam Zapier.

## Parameter badan titik akhir

Mari kita lihat gambaran keseluruhan maklumat minimum yang perlu kita hantar ke titik akhir. Di akhir artikel ini, anda akan menemui panggilan penuh.

### Pelanggan

Ini ialah maklumat yang diperlukan untuk proses mencipta User dan Ultimate Multisite Customer:

"customer_id" : integer

Anda boleh menghantar ID pelanggan yang dicipta dalam rangkaian anda. Jika tidak dihantar, maklumat di bawah akan digunakan untuk mencipta pelanggan baharu dan pengguna WordPress baharu. ID pengguna juga boleh dihantar dengan cara yang sama seperti ID pelanggan.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

Satu-satunya maklumat yang kita perlukan di dalam objek ini ialah Status Membership.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produk**

Produk diberikan sebagai array dengan 1 atau lebih ID produk daripada rangkaian anda. Berhati-hati, titik akhir ini tidak mencipta produk. Semak dokumentasi Ultimate Multisite untuk memahami titik akhir penciptaan produk dengan lebih baik.

**"products" : [1,2],**

### Pembayaran

Seperti Membership, kita hanya memerlukan status.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Laman

Dan untuk menutup badan, kita memerlukan URL dan Tajuk laman, kedua-duanya di dalam objek Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Pulangan titik akhir register akan berupa array dengan maklumat membership yang baru dicipta.

## Mencipta tindakan dalam Zapier

Dengan pengenalan titik akhir penciptaan Account baharu yang lebih kukuh ini, anda juga akan mengakses tindakan baharu dalam Zapier.

Adakah anda tahu cara menggunakan dan menikmati semua yang ditawarkan oleh versi baharu Zapier? Ketahui lebih lanjut di sini. (pautan?)

### Mencipta tindakan

Untuk menggambarkan dengan lebih baik cara menggunakan titik akhir pendaftaran dengan Zapier, mari kita cipta integrasi dengan Google Forms. Setiap kali borang ini diisi dan maklumat disimpan dalam helaian jawapan borang, membership baharu akan dicipta dalam rangkaian Ultimate Multisite.

Dalam Google Forms, buat borang dengan medan minimum yang diperlukan untuk mencipta membership baharu dalam rangkaian.

<!-- Tangkapan skrin tidak tersedia: Borang Google Forms dengan medan untuk mencipta membership baharu -->

Sekarang dalam Zapier, buat Zap baharu dan sambungkan borang yang dicipta dalam Google melalui hamparan tempat data disimpan.

<!-- Tangkapan skrin tidak tersedia: Konfigurasi pencetus Zapier yang menyambung ke hamparan Google Forms -->

Selesai! Borang Google Forms telah disambungkan dengan Zapier dan sedia untuk diintegrasikan dengan rangkaian. Sekarang mari kita teruskan ke Action yang akan terhasil daripada Trigger yang dicetuskan oleh Google Forms setiap kali ia diisi.

Cari aplikasi Ultimate Multisite baharu dan pilihnya. Untuk jenis Zap ini, pilih pilihan Register.

<!-- Tangkapan skrin tidak tersedia: Pemilihan tindakan Zapier yang menunjukkan aplikasi Ultimate Multisite dengan pilihan Register -->

Selepas langkah pertama ini, pilih account yang akan disambungkan dengan Zap ini.<!-- Tangkapan skrin tidak tersedia: Langkah sambungan account Zapier untuk Ultimate Multisite -->

Ini ialah bahagian paling sensitif dalam keseluruhan proses. Kita perlu memadankan medan yang datang daripada Google Forms dengan medan minimum yang diperlukan untuk titik akhir register, seperti yang ditunjukkan dalam bahagian sebelumnya artikel ini.

Dalam contoh ini, kita hanya perlu mengkonfigurasi nama pengguna, e-mel, kata laluan, nama dan URL laman web. Selebihnya dibiarkan dipratentukan supaya semua membership yang dijana pada Google Forms ini mengikuti corak produk dan status yang sama.

<!-- Tangkapan skrin tidak tersedia: Pemetaan medan Zapier antara Google Forms dan titik akhir register Ultimate Multisite -->

Dengan maklumat yang disediakan, teruskan ke ujian akhir. Pada skrin terakhir, anda boleh melihat semua medan yang akan dihantar ke titik akhir, maklumat masing-masing dan medan yang akan dihantar kosong.<!-- Tangkapan skrin tidak tersedia: Skrin ujian Zapier yang menunjukkan semua medan untuk dihantar ke titik akhir register -->

Uji Zap baharu anda dan ia sepatutnya selesai dengan jayanya. Jika sebarang ralat berlaku, semak semua medan dan sama ada ia dihantar dengan betul. Memandangkan terdapat banyak maklumat, sesetengah perkara boleh terlepas pandang.

### Parameter titik akhir lengkap

Berikut ialah panggilan lengkap dan semua kemungkinan medan yang boleh dihantar.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
