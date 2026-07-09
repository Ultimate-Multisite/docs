---
title: Nampa Bayaran
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Nampa Bayaran (v2)

_**CATETAN PENTING: Artikel iki ngrujuk marang Ultimate Multisite versi 2.x.**_

Ultimate Multisite nduwèni sistem keanggotaan lan tagihan sing wis kabangun. Supaya sistem tagihan kita bisa mlaku, kita wis nggabungake gateway pembayaran sing paling umum dienggo ing e-commerce. Gateway pembayaran bawaan ing Ultimate Multisite yaiku _Stripe_ , _PayPal_ , lan Pembayaran Manual. Sampeyan uga bisa migunakaké _WooCommerce_ , _GoCardless_ lan _Payfast_ kanggo nampa pembayaran kanthi nginstal add-oné dhewe-dhewe.

## Setelan Dhasar

Sampeyan bisa ngonfigurasi gateway pembayaran apa wae iki ing setelan pembayaran Ultimate Multisite. Sampeyan bisa nemokaké kanthi mlebu menyang **menu Ultimate Multisite > Settings > Payments.**

![Kaca setelan Payments ing Ultimate Multisite sing nuduhaké panel Payments](/img/config/payments-settings-page.png)

Sadurungé sampeyan nyetel gateway pembayaran, mangga delengen setelan pembayaran dhasar sing bisa sampeyan konfigurasi:

**Peksa nganyara** **ke otomatis:** Iki bakal mesthekaké manawa pembayaran bakal bola-bali kanthi otomatis ing pungkasan saben siklus tagihan gumantung marang frekuensi tagihan sing dipilih panganggo.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 mriksa apa gateway aktif nduwèni kredensial pembaruan sing bisa dienggo maneh sadurungé nyimpen keanggotaan berulang kanthi auto-renewal diaktifaké. Kredensial pembaruan bisa awujud langganan gateway, perjanjian tagihan, token vault sing disimpen, utawa cara pembayaran sing padha lan bisa dienggo maneh. Yen gateway nglaporaké manawa ora ana kredensial sing bisa dienggo, Ultimate Multisite nyimpen keanggotaan nanging matèni auto-renewal lan nyathet kahanan kredensial sing ilang supaya administrator utawa alur dhukungan bisa njaluk pelanggan menehi wewenang maneh kanggo pembayaran sadurungé tanggal pembaruan.

Iki nyegah keanggotaan katon kaya bakal auto-renew nalika gateway mung bisa narik pembayaran sapisan. Add-on gateway kudu mesthekaké manawa checkout berulang nyimpen kredensial sing bisa dienggo maneh, utamané nalika gateway ndhukung mode pembayaran tangkapan sapisan lan vault/langganan.

**Idini trial tanpa cara pembayaran:** Kanthi pilihan iki diaktifaké, klien sampeyan ora kudu nambah informasi finansial apa wae nalika proses registrasi. Iki mung bakal dibutuhake sawisé periode trial rampung.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Kirim invoice nalika konfirmasi pembayaran:** Iki menehi sampeyan pilihan arep ngirim invoice utawa ora sawisé pembayaran. Elinga manawa panganggo bakal nduwèni akses menyang riwayat pembayarané ing dashboard subsitusé. Pilihan iki ora ditrapaké kanggo Gateway Manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skema panomoran invoice:** Ing kéné, sampeyan bisa milih kode referensi pembayaran utawa skema nomer berurutan. Yen sampeyan milih migunakaké kode referensi pembayaran kanggo invoice, sampeyan ora perlu ngonfigurasi apa-apa. Yen sampeyan milih migunakaké skema nomer berurutan, sampeyan kudu ngonfigurasi **nomer invoice sabanjuré** (Nomer iki bakal dienggo minangka nomer invoice kanggo invoice sabanjuré sing digawe ing sistem. Nomer iki ditambah siji saben invoice anyar digawe. Sampeyan bisa ngganti lan nyimpen kanggo ngreset nomer berurutan invoice menyang nilai tartamtu) lan **prefiks nomer invoice.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Panggonan kanggo nemokaké gateway:

Sampeyan bisa nyetel gateway pembayaran ing kaca sing padha ( **Ultimate Multisite > Settings > Payments**). Persis ing sangisoré **active payment gateways** , sampeyan bakal bisa ndeleng: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ lan _Manual_.

![Bagéan Active Payment Gateways sing nampilaké Stripe, Stripe Checkout, PayPal lan Manual](/img/config/payments-active-gateways.png)

Kita nduwèni artikel khusus kanggo saben gateway pembayaran sing bakal nuntun sampeyan liwat langkah-langkah nyetelé, sing bisa sampeyan temokaké ing pranala ing ngisor iki.

Sampeyan bisa ndeleng lan nyunting rincian pembayaran:

![Antarmuka sunting pembayaran](/img/admin/payment-edit.png)

Iki tampilan lengkap kaca sunting pembayaran:

![Antarmuka lengkap sunting pembayaran](/img/admin/payment-edit-full.png)

Iki uga tampilan lengkap setelan gateway pembayaran:

![Kaca lengkap setelan gateway pembayaran](/img/config/settings-payments-gateways-full.png)

**Nyetel gateway Stripe**

**Nyetel gateway PayPal**** **

**Nyetel pembayaran manual**

Saiki, yen sampeyan pengin migunakaké _WooCommerce_ , _GoCardless_ utawa _Payfast_ minangka gateway pembayaran, sampeyan kudu **nginstal lan ngonfigurasi add-oné**.

### Cara nginstal add-on WooCommerce:

Kita ngerti manawa _Stripe_ lan _PayPal_ ora kasedhiya ing sawetara negara, sing mbatesi utawa ngalangi panganggo Ultimate Multisite saka migunakaké plugin kita kanthi efektif. Mula kita nggawe add-on kanggo nggabungake _WooCommerce,_ yaiku plugin e-commerce sing misuwur banget. Para developer ing saindenging donya nggawe add-on kanggo nggabungake macem-macem gateway pembayaran menyang plugin kasebut. Kita njupuk kauntungan saka iki kanggo ngembangaké gateway pembayaran sing bisa sampeyan gunakaké karo sistem tagihan Ultimate Multisite.

_**PENTING:** Ultimate Multisite: WooCommerce Integration mbutuhake WooCommerce diaktifaké paling ora ing situs utama sampeyan._

Kaping pisan, mangga mlebu menyang kaca add-on. Sampeyan bisa nemokaké kanthi mlebu menyang **Ultimate Multisite > Settings**. Sampeyan kuduné ndeleng tabel **Add-ons**. Klik **Priksa Add-ons kita**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Sawisé ngeklik **Priksa Add-ons kita** , sampeyan bakal dialihaké menyang kaca add-on. Ing kéné sampeyan bisa nemokaké kabèh add-on Ultimate Multisite. Klik add-on **Ultimate Multisite: WooCommerce Integration**.

![Kaca add-on sing nampilaké add-on Ultimate Multisite kalebu WooCommerce Integration](/img/addons/addons-page.png)

Jendhela bakal muncul kanthi rincian tambahan. Cukup klik **Pasang Saiki**.

<!-- Tangkapan layar ora kasedhiya: dialog rincian tambahan Ultimate Multisite WooCommerce Integration kanthi tombol Pasang Saiki -->

Sawise instalasi rampung, sampeyan bakal dialihake menyang kaca plugin. Ing kene, cukup klik **Aktifake Jaringan** lan tambahan WooCommerce bakal diaktifake ing jaringan sampeyan.

<!-- Tangkapan layar ora kasedhiya: kaca Plugin kanthi pranala Aktifake Jaringan kanggo tambahan WooCommerce Integration -->

Sawise diaktifake, yen sampeyan isih durung masang lan ngaktifake plugin WooCommerce ing situs web sampeyan, sampeyan bakal nampa pangeling.

<!-- Tangkapan layar ora kasedhiya: kabar admin sing ngelingake administrator supaya masang lan ngaktifake plugin WooCommerce -->

Kanggo maca luwih akeh babagan tambahan WooCommerce Integration, **klik ing kene**.

### Cara masang tambahan GoCardless:

Langkah-langkah kanggo masang tambahan _GoCardless_ meh padha karo tambahan _WooCommerce_. Mangga menyang kaca tambahan lan pilih tambahan **Ultimate Multisite: GoCardless Gateway**.

<!-- Tangkapan layar ora kasedhiya: kaca tambahan kanthi tambahan Ultimate Multisite GoCardless Gateway disorot -->

Jendhela tambahan bakal muncul. Klik **Pasang Saiki**.

<!-- Tangkapan layar ora kasedhiya: dialog rincian tambahan Ultimate Multisite GoCardless Gateway kanthi tombol Pasang Saiki -->

Sawise instalasi rampung, sampeyan bakal dialihake menyang kaca plugin. Ing kene, cukup klik **Aktifake Jaringan** lan tambahan _GoCardless_ bakal diaktifake ing jaringan sampeyan.

<!-- Tangkapan layar ora kasedhiya: kaca Plugin kanthi pranala Aktifake Jaringan kanggo tambahan GoCardless Gateway -->

Kanggo sinau carane miwiti nganggo gateway _GoCardless_, **waca artikel iki**.

### Cara masang tambahan Payfast:

Menyang kaca tambahan lan pilih tambahan **Ultimate Multisite: Payfast Gateway**.

<!-- Tangkapan layar ora kasedhiya: kaca tambahan kanthi tambahan Ultimate Multisite Payfast Gateway disorot -->

Jendhela tambahan bakal muncul. Klik **Pasang Saiki.**

<!-- Tangkapan layar ora kasedhiya: dialog rincian tambahan Ultimate Multisite Payfast Gateway kanthi tombol Pasang Saiki -->

Sawise instalasi rampung, sampeyan bakal dialihake menyang kaca plugin. Ing kene, cukup klik **Aktifake Jaringan** lan tambahan _Payfast_ bakal diaktifake ing jaringan sampeyan.

<!-- Tangkapan layar ora kasedhiya: kaca Plugin kanthi pranala Aktifake Jaringan kanggo tambahan Payfast Gateway -->
