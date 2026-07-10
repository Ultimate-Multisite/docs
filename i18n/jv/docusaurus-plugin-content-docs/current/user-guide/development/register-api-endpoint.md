---
title: Daftar Endpoint API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint Register API Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

Ing tutorial iki, sampeyan bakal sinau kepiye carane nggunakake endpoint register API Ultimate Multisite kanggo nggawe proses onboarding lengkap kanggo pelanggan anyar ing jaringan sampeyan lan kepiye nindakake kuwi nganggo Zapier.

Endpoint iki nggunakake metode POST lan dipanggil nganggo URL _**https://yoursite.com/wp-json/wu/v2/register**_. Ing panggilan iki, ana 4 proses sing bakal dieksekusi ing jaringan sampeyan:

  * User WordPress anyar utawa identifikasi liwat user ID-ne bakal digawe.

  * Pelanggan anyar ing Ultimate Multisite utawa identifikasi liwat customer ID-ne bakal digawe.

  * Situs anyar ing jaringan WordPress bakal digawe.

  * Ing pungkasan, Membership anyar ing Ultimate Multisite bakal digawe.

Kanggo proses iki, sampeyan bakal butuh API credentials sampeyan. Kanggo nggoleke iku, tindakake panel admin jaringan sampeyan, navigasi menyang **Ultimate Multisite > Settings** > **API & Webhooks**, lan goleki bagian API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Iki tampilan lengkap saka halaman pengaturan API:

![API settings full page](/img/config/settings-api-full.png)

Pilih **Enable API** lan duweni API credentials sampeyan.

Saiki, ayo kita eksplorasi endpoint lan banjur nggawe aksi registrasi ing Zapier.

## Parameter body endpoint {#endpoint-body-parameters}

Ayo deleng gambaran umum informasi minimum sing kudu kita kirim menyang endpoint. Ing akhir artikel iki, sampeyan bakal nemokake panggilan lengkapé.

### Customer {#customer}

Iki informasi sing dibutuhake kanggo proses nggawe User lan Pelanggan Ultimate Multisite:

"customer_id" : integer

Mungkinkah ngirim ID pelanggan sing wis digawe ing jaringan sampeyan. Yen ora dikirim, informasi ing ngisor iki bakal digunakake kanggo nggawe pelanggan anyar lan user WordPress anyar. User ID uga bisa dikirim kanthi cara sing padha karo ID pelanggan.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Siji-sijine informasi sing kita butuh ing objek iki yaiku Status Keanggotaan (Membership Status).

"membership" { "status" : "string", // salah siji saka "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Produk bakal diparingi array kanthi 1 utawa luwih ID produk saka jaringan sampeyan. Waspada, endpoint iki ora nggawe produk. Cek dokumentasi Ultimate Multisite kanggo mangerteni luwih apik babagan endpoint pembuatan produk.

**"products" : [1,2],**

### Payment {#payment}

Kaya karo Membership, kita mung butuh statusé.

**"payment" { "status" : "string", // salah siji saka "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

Lan kanggo nutup isi iki, kita butuh URL lan Judul situs ing objek Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Wangsulan saka endpoint register bakal dadi array kanthi informasi keanggotaan sing wis digawe anyar.

## Nggawe aksi ing Zapier {#creating-an-action-in-zapier}

Kanthi kedadeyan endpoint pembuatan akun anyar lan luwih kuwat iki, sampeyan uga bisa ngakses aksi anyar ing Zapier.

Sampeyan ngerti cara nggunakake lan ngrasakake kabeh sing ditawari versi anyar Zapier? Pelajari luwih akeh ing kene. (link?)

### Nggawe aksi {#creating-an-action}

Supaya lu bisa ngerti cara nggunakake registration endpoint karo Zapier, ayo kita bikin integrasi nganggo Google Forms. Setiap kali form iki diisi lan informasine disimpen ing lembar jawaban form, anggota anyar bakal digawe ing jaringan Ultimate Multisite.

Ing Google Forms, gawe form sing mung butuh field paling minimal kanggo nggawe anggota anyar ing jaringan.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Saiki ing Zapier, gawe Zap anyar lan sambungake form sing wis digawe ing Google liwat spreadsheet sing disimpen data kasebut.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Wis rampung! Form Google Forms wis disambung karo Zapier lan siap diintegrasi karo jaringan. Saiki ayo lanjut menyang Action sing bakal dadi akibat saka Trigger sing dipicu saben form diisi.

Tangkep aplikasi Ultimate Multisite anyar lan pilih aplikasi kasebut. Kanggo jenis Zap kaya ngene iki, pilih opsi Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Sawise langkah pertama iki, pilih akun sing bakal disambungake karo Zap iki.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Iki bagian paling sensitif saka kabeh proses iki. Kita kudu nyamain field sing asale saka Google Forms karo field minimal sing dibutuhake kanggo endpoint register, kaya sing wis ditunjuka ing bagian sadurunge saka artikel iki.

Ing conto iki, kita mung perlu ngatur username, email, password, nama, lan URL situs web. Sisane wis ditentokake supaya kabeh keanggotaan sing digawe saka Google Forms iki manut pola produk lan status sing padha.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Sa kabeh informasi wis diatur, lanjut menyang tes pungkasan. Ing layar paling akhir sampeyan bisa ndelok kabeh field sing bakal dikirim menyang endpoint, informasi saben field, lan field-field sing bakal dikirim kosong.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Tes Zap anyar sampeyan lan kudu rampung kanthi sukses. Yen ana error, cek kabeh field lan yen wis dikirim bener durung. Amarga akeh banget informasine, ana bab-bab sing bisa ilang ora ketok.

### Parameter endpoint lengkap {#complete-endpoint-parameters}

Iki conto panggilan lengkap lan kabeh kemungkinan field sing bisa dikirim.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // salah siji saka "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // salah siji saka "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
