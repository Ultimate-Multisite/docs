---
title: Mendapat Bayaran
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Narima Uang (v2)

_**CATATAN PENTING: Artikel ieu merujuk kana Ultimate Multisite versi 2.x.**_

Ultimate Multisite geus aya sistem keanggotaan je pembayaran anu aya di dalamnya. Supaya sistem pembayaran urang bisa jalan, kami geus ngintegrasi gerbang pembayaran (payment gateway) anu paling umum dipaké dina e-commerce. Gerbang pembayaran *default* dina Ultimate Multisite nyaéta _Stripe_, _PayPal_, jeung Pembayaran Manual. Anjeun ogé bisa maké _WooCommerce_, _GoCardless_, jeung _Payfast_ pikeun nampa pembayaran ku cara nginstal add-on masing-masing.

## Pengaturan Dasar

Anjeun bisa ngatur sabaraha gerbang pembayaran anu aya di luhur dina pengaturan pembayaran Ultimate Multisite. Anjeun bisa manggihan éta ku cara indit ka **Ultimate Multisite menu > Settings > Payments.**

![Halaman pengaturan pembayaran dina Ultimate Multisite nunjukkeun panel Pembayaran](/img/config/payments-settings-page.png)

Saméméh anjeun ngatur gerbang pembayaran, punten tingali sababaraha pengaturan pembayaran dasar anu bisa anjeun atur:

**Force auto-rene** **w:** Ieu bakal mastiake yén pembayaran bakal otomatis ulang di akhir unggal siklus tagihan gumantung kana frekuensi tagihan anu dipilih ku pengguna.

<!-- Screenshot unavailable: Pengaturan toggle Force Auto-Renew dina halaman pengaturan Pembayaran -->

Ultimate Multisite v2.13.0 nguji yén gerbang pembayaran aktif miboga kredensial panunjangan (renewal credential) anu bisa dipaké deui saméméh nyimpen keanggotaan berulang kalawan auto-renewal diaktifkeun. Kredensial panunjangan téh bisa jadi langganan gerbang pembayaran, perjanjian tagihan, token vault anu disimpen, atawa cara bayar anu bisa dipaké deui anu sarua. Lamun gerbang pembayaran ngabobat yén teu aya kredensial anu bisa dipaké, Ultimate Multisite bakal nyimpen keanggotaan tapi matike auto-renewal sarta nyatet kaayaan kredensial nu kurang éta supados admin atawa alur dukungan bisa nanya ka pelanggan pikeun ngaluarke otorisasi pembayaran deui saméméh tanggal panunjangan.

Ieu ngalangannana ngajaga hiji anggota teu katingali auto-renew lamun gerbang (gateway) ngan ukur bisa ngumpulkeun pembayaran tunggal. Add-on gerbang kedah mastikeun yén checkout berulang (recurring checkout) nyimpen kredensial anu bisa dipaké deui, utamina nalika gerbang mendukung mode pembayaran sekali bayar (one-time capture) jeung mode pembayaran yang disimpan/langganan (vaulted/subscription payment modes).

**Izinkeun uji coba tanpa metode pembayaran** **metode:** Kalawan pilihan ieu diaktifkeun, klien anjeun teu kudu nambahan informasi finansial nalika proses registrasi. Ieu ngan ukur dipikawanoh sakali periode uji coba réngsé.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Kirim faktur dina konfirmasi pembayaran:** Ieu ngahajake pilihan upami anjeun hayang ngirim faktur atawa teu hayang salian ti pembayaran. Perhatosanana, pengguna bakal bisa ngakses riwayat pembayaran maranéhna di dashboard subsite maranéhna. Pilihan ieu teu berlaku pikeun Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skema penomoran faktur:** Di dieu, anjeun bisa milih kode referensi pembayaran atawa skema nomer anu berurutan (sequential number scheme). Upami anjeun milih ngagunakeun kode referensi pembayaran pikeun faktur anjeun, anjeun teu perlu ngatur nanaon. Upami anjeun milih ngagunakeun skema nomer berurutan, anjeun bakal kedah ngatur **nomor faktur salajengna** (Nomor ieu bakal dipaké minangka nomor faktur pikeun faktur salajengna anu digenerate ku sistem. Nombor ieu diitung sésa hiji nalika faktur anyar ditangtukeun. Anjeun bisa ngarobah jeung nyimpenana kanggo ngatur deui nomer urutan faktur ka nilai anu sipatna) sarta **prefix nomor faktur**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Di mana tempat nempo gateway:

Anjeun bisa atur payment gateway di halaman anu sarua ( **Ultimate Multisite > Settings > Payments**). Di handapna **active payment gateways**, anjeun bakal ningali: _Stripe_, _Stripe_ _Checkout_, _PayPal_ jeung _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Kami geus nyiapkeun artikel khusus pikeun unggal payment gateway anu bakal ngajelaskeun langkah-langkahna dina ngatur éta, anjeun bisa manggihan di tautan di handap ieu.

Anjeun bisa ningali jeung ngedit detail pembayaran:

![Payment edit interface](/img/admin/payment-edit.png)

Ieu pandangan lengkap tina halaman ngedit pembayaran:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ieu ogé pandangan lengkap tina pengaturan payment gateway:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Ngatur Stripe gateway**

**Ngatur PayPal gateway**** **

**Ngatur pembayaran manual**

Ayeuna, lamun anjeun hayang nganggo _WooCommerce_, _GoCardless_ atawa _Payfast_ salaku payment gateway anjeun, anjeun kudu **nginstal jeung ngatur add-onna**.

### Kumaha cara nginstal add-on WooCommerce:

Kami ngarti yén _Stripe_ jeung _PayPal_ teu aya di sababaraha daérah anu ngabatasina atawa ngahalangan panyalawuran Ultimate Multisite pikeun nganggo plugin urang sacara efektif. Ku kituna kami nyiptake add-on pikeun ngintegrasi _WooCommerce_, anu mangrupa plugin e-commerce anu kacida dipikaresepna. Para developer di sababaraha tempat geus nyiptake add-on pikeun ngintegrasi payment gateway nu béda ka éta. Kami nganggo éta pikeun nambahan payment gateway anu anjeun bisa dipaké jeung sistem billing Ultimate Multisite.

_**PENTING:** Ultimate Multisite: Integrasi WooCommerce butuh WooCommerce diaktifkan minimal di situs utama Anda._

Pertama, silakan buka halaman add-ons. Anda bisa menemukannya dengan pergi ke **Ultimate Multisite > Settings**. Anda akan melihat tabel **Add-ons**. Klik pada **Check our Add-ons**.

<!-- Screenshot unavailable: Tabel Add-ons di sidebar Pengaturan Ultimate Multisite dengan tautan Check our Add-ons -->

Setelah mengklik **Check our Add-ons**, Anda akan diarahkan ke halaman add-ons. Di sini Anda bisa menemukan semua add-on Ultimate Multisite. Klik pada add-on **Ultimate Multisite: WooCommerce Integration**.

![Halaman add-ons yang mencantumkan add-on Ultimate Multisite termasuk Integrasi WooCommerce](/img/addons/addons-page.png)

Sebuah jendela akan muncul dengan detail add-on tersebut. Cukup klik **Install Now**.

<!-- Screenshot unavailable: Dialog detail add-on Ultimate Multisite WooCommerce Integration dengan tombol Install Now -->

Setelah instalasi selesai, Anda akan diarahkan ke halaman plugins. Di sini, cukup klik **Network Activate** dan add-on WooCommerce akan diaktifkan di jaringan Anda.

<!-- Screenshot unavailable: Halaman plugins dengan tautan Network Activate untuk add-on Integrasi WooCommerce -->

Setelah mengaktifkannya, jika plugin WooCommerce masih belum terpasang dan aktif di situs web Anda, Anda akan menerima pengingat.

<!-- Screenshot unavailable: Pemberitahuan admin yang mengingatkan administrator untuk menginstal dan mengaktifkan plugin WooCommerce -->

Untuk membaca lebih lanjut tentang add-on Integrasi WooCommerce, **klik di sini**.

### Cara menginstal add-on GoCardless:

Langkah-langkahna pikeun ngalaksanakeun instalasi _add-on_ _GoCardless_ téh sami pisan jeung _add-on_ _WooCommerce_. Mangga ka halaman add-ons sareng pilih **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Screenshot unavailable: Halaman add-ons kalayan Ultimate Multisite GoCardless Gateway add-on dipamerkeun -->

Jendela add-on bakal muncul. Klik **Install Now**.

<!-- Screenshot unavailable: Dialog detail Ultimate Multisite GoCardless Gateway add-on kalayan tombol Install Now -->

Sanggeus instalasi réngsé, anjeun bakal diarahkeun ka halaman plugins. Di dinya, cukup klik **Network Activate** sareng _add-on_ _GoCardless_ bakal diaktifkeun dina jaringan anjeun.

<!-- Screenshot unavailable: Halaman plugins kalayan tautan Network Activate pikeun GoCardless Gateway add-on -->

Kanggo diajar kumaha ngamimitian nganggo _GoCardless_ gateway, **bacalah artikel ieu**.

### Kumaha cara instalasi _add-on_ Payfast:

Ka halaman add-ons sareng pilih **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Halaman add-ons kalayan Ultimate Multisite Payfast Gateway add-on dipamerkeun -->

Jendela add-on bakal muncul. Klik **Install Now**.

<!-- Screenshot unavailable: Dialog detail Ultimate Multisite Payfast Gateway add-on kalayan tombol Install Now -->

Sanggeus instalasi réngsé, anjeun bakal diarahkeun ka halaman plugins. Di dinya, cukup klik **Network Activate** sareng _add-on_ _Payfast_ bakal diaktifkeun dina jaringan anjeun.

<!-- Screenshot unavailable: Halaman plugins kalayan tautan Network Activate pikeun Payfast Gateway add-on -->
