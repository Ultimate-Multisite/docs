---
title: Daftar Endpoint API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint Register API Ultimate Multisite

Di tutorial ieu, anjeun bakal diajar kumaha ngagunake endpoint register API Ultimate Multisite pikeun nyiptake sakabé proses onboarding kanggo pelanggan anyar dina jaringan anjeun jeung kumaha cara ngerakake éta ku Zapier.

Endpoint ieu ngagunake method POST jeung dipanggil ku URL _**https://yoursite.com/wp-json/wu/v2/register**_. Dina pangganggilan ieu, aya 4 proses anu bakal dilakukeun di jaringan anjeun:

  * User WordPress anyar atawa identifikasiana ngaliantar user ID bakal diciptake.

  * Pelanggan anyar dina Ultimate Multisite atawa identifikasiana ngaliantar customer ID bakal diciptake.

  * Situs anyar dina jaringan WordPress bakal diciptake.

  * Ahirna, Membership anyar dina Ultimate Multisite bakal diciptake.

Kanggo proses ieu, anjeun butuh API credentials anjeun. Pikeun ngahasilkeunana, ka panel admin jaringan anjeun, nyaéta navigasi ka **Ultimate Multisite > Settings** > **API & Webhooks**, jeung cari bagian API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Ieu mangrupake pandangan lengkap halaman pengaturan API:

![API settings full page](/img/config/settings-api-full.png)

Pilih **Enable API** jeung dapatkeun API credentials anjeun.

Ayeuna, hayu urang jelajahi endpoint ieu sarta ngabentuk aksi registrasi dina Zapier.

## Parameter body endpoint

Hayu urang tingali gambaran umum ngeunaan informasi minimum anu kudu dikirim ka endpoint. Di ahir artikel ieu, anjeun bakal manggihan pangganggilan lengkapna.

### Customer

Ieu mangrupake informasi anu penting pikeun proses nyiptake User jeung Pelanggan Ultimate Multisite:

"customer_id" : integer

Ieu tiasa ngirim ID pelanggan anu dipikawanoh dina jaringan anjeun. Upami teu dikirim, informasi di handap ieu bakal dipaké pikeun nyieun pelanggan anyar jeung user WordPress anyar. User ID ogé bisa dikirim sacara sarua jeung ID pelanggan.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Keanggotaan (Membership)**

Satu-satunya informasi anu urang butuh di jero objek ieu nyaéta Status Keanggotaan.

"membership" { "status" : "string", // salah sahiji tina "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produk (Products)**

Produk dipasihkeun array anu ngandung 1 atawa leuwih ID produk ti jaringan anjeun. Hati-hati, endpoint ieu teu nyieun produk. Cek dokumentasi Ultimate Multisite pikeun ngarti leuwih jelas ngeunaan endpoint pembuatan produk.

**"products" : [1,2],**

### Pembayaran (Payment)

Saperti jeung Keanggotaan, urang ngan ukur butuh statusna.

**"payment" { "status" : "string", // salah sahiji tina "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Situs (Site)

Jeung pikeun nutupna badan, urang butuh URL jeung Judul situs dina objek Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Panonjat balik tina endpoint register bakal jadi array anu eusina informasi keanggotaan anu geus dipikawanoh.

## Nyieun aksi di Zapier

Dina kalayan diperkenalkeun endpoint pembuatan akun anyar jeung leuwih kuat ieu, anjeun ogé bakal bisa ngagunakeun aksi anyar dina Zapier.

Geus apal kumaha cara maké jeung nikmati sagala hal anu ditawarke ku versi Zapier anu anyar? Pelajari di dieu. (link?)

### Nyieun aksi

Supaya leuwih jelas kumaha cara ngagunake registration endpoint jeung Zapier, urang jieun integrasi jeung Google Forms. Sakali form ieu diisi sareng informasina disimpen dina lembar jawaban form éta, anggota anyar bakal diciptake dina jaringan Ultimate Multisite.

Di Google Forms, jieun form kalayan input anu paling minimal kanggo ngadamel anggota anyar dina jaringan.

<!-- Screenshot teu aya: Form Google Forms kalayan input pikeun ngadamel anggota anyar -->

Ayeuna di Zapier, jieun Zap anyar sareng sambungkeun form nu diciptake dina Google ngaliwatan spreadsheet di mana data éta disimpen.

<!-- Screenshot teu aya: Konfigurasi pemicu Zapier nyambung ka spreadsheet Google Forms -->

Selesai! Form Google Forms tos sambung jeung Zapier sareng siap kanggo diintegrasi jeung jaringan. Ayeuna urang lanjut kana Action anu bakal jadi hasil tina Trigger nu dipicu ku Google Forms unggal kali diisi.

Tukang lokasi aplikasi Ultimate Multisite anu anyar sareng pilih éta. Pikeun jenis Zap sapertos kieu, pilih opsi Register.

<!-- Screenshot teu aya: Pemilihan action Zapier nunjukkeun aplikasi Ultimate Multisite kalayan opsi Register -->

Sanggeus langkah kahiji ieu, pilih akun anu bakal disambung jeung Zap ieu.<!-- Screenshot teu aya: Langkah sambung akun Zapier pikeun Ultimate Multisite -->

Ieu bagian anu paling sensitif tina sakabéh prosesna. Urang kedah nyambungkeun input anu datang ti Google Forms sareng input minimal anu dipiharep kanggo endpoint register, sapertos anu ditunjuke dina bagian samémosna tina artikel ieu.

Dina conto ieu, urang ngan ukur kedah ngatur username, email, password, nami (name), sareng URL situs web. Sisana tos ditentukan sadaya supados sakabéh keanggotaan anu dicaritakeun ku Google Forms patuh kana pola produk jeung status anu sarua.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Mun informasi geusah diatur, ayeuna lanjut ka tes pamungkas. Di layar pamungkas éta anjeun bisa ningali sadaya field anu bakal dikirim ka endpointna, inpormasi masing-masing, sarta field mana anu bakal dikirim kosong.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Tes Zap anyar anjeun, sareng éta kedah rampung kalayan hadé. Upami aya error, cek sadaya field sareng upami éta keur dikirim bener. Sabab inpormasi téh loba pisan, aya hal-hal anu bisa teu kapendak.

### Parameter endpoint pamurna

Ieu mangrupake panggilan pamurna sareng sadaya kemungkinan field anu bisa dikirim.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // salah sahiji tina "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // salah sahiji tina "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
