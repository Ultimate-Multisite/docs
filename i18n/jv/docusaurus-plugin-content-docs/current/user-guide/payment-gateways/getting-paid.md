---
title: Dapat Gaji
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Cara Dapat Dibayar (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Ultimate Multisite duwe sistem keanggotaan dan penagihan bawaan. Supaya sistem penagihan kita bisa jalan, kita sudah gabungkan *payment gateway* (gerbang pembayaran) yang paling umum dipakai di *e-commerce*. *Payment gateway* bawaan di Ultimate Multisite itu adalah _Stripe_, _PayPal_, dan Pembayaran Manual (*Manual Payment*). Kamu juga bisa pakai _WooCommerce_, _GoCardless_, dan _Payfast_ untuk menerima pembayaran dengan menginstal add-on masing-masing.

## Pengaturan Dasar

Kamu bisa atur salah satu *payment gateway* ini di bawah pengaturan pembayaran Ultimate Multisite. Kamu bisa menemukannya dengan pergi ke **menu Ultimate Multisite > Settings > Payments.**

![Halaman pengaturan pembayaran di Ultimate Multisite yang menunjukkan panel Pembayaran](/img/config/payments-settings-page.png)

Sebelum kamu menyiapkan *payment gateway*-mu, coba lihat dulu pengaturan pembayaran dasar yang bisa kamu atur:

**Force auto-rene** **w:** Ini akan memastikan bahwa pembayaran akan otomatis berulang di akhir setiap siklus penagihan tergantung pada frekuensi penagihan yang dipilih pengguna.

<!-- Screenshot unavailable: Pengaturan toggle Force Auto-Renew di halaman pengaturan pembayaran -->

Ultimate Multisite v2.13.0 akan memeriksa apakah *gateway* aktif punya kredensial perpanjangan (*renewal credential*) yang bisa dipakai sebelum menyimpan keanggotaan berulang dengan auto-renewal aktif. Kredensial perpanjangan itu bisa berupa langganan *gateway*, perjanjian penagihan, token brankas (*vault token*) yang tersimpan, atau metode pembayaran lain yang bisa dipakai ulang. Kalau *gateway* melaporkan bahwa tidak ada kredensial yang bisa dipakai, Ultimate Multisite akan menyimpan keanggotaannya tapi mematikan auto-renewal dan mencatat status kredensial yang hilang supaya admin atau alur dukungan bisa meminta pelanggan untuk mengotorisasi pembayaran lagi sebelum tanggal perpanjangan.

**Izinkan uji coba tanpa metode pembayaran** **metode:** Dengan opsi ini aktif, klien sampeyan ora perlu nambah informasi finansial nalika proses registrasi. Iki mung bakal dibutuhake sawise masa uji coba kedaluwarsa.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Kirim faktur pas pembayaran dikonfirmasi:** Opsi iki menehi sampeyan pilihan apa arep ngirim faktur utawa ora sawise pembayaran. Cathet, pengguna bakal bisa akses riwayat pembayaran mereka ing dashboard subsite mereka. Opsi iki ora berlaku kanggo Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skema penomoran faktur:** Ing kene, sampeyan bisa milih kode referensi pembayaran utawa skema nomor urut. Yen sampeyan milih nggunakake kode referensi pembayaran kanggo faktur sampeyan, ora perlu ngatur apa-apa. Yen sampeyan milih nggunakake skema nomor urut, sampeyan bakal perlu ngatur **nomor faktur sabanjure** (Nomor iki bakal digunakake minangka nomor faktur kanggo faktur sabanjure sing digawe ing sistem. Iki diitung siji saben faktur anyar digawe. Sampeyan bisa ngowahi lan nyimpeni supaya nomor urut faktur direset menyang nilai tartamtu) lan **awalan nomor faktur**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Ing ngendi gateway:

Sampeyan sampeyan bisa nggatekake (setup) payment gateways ing halaman sing padha ( **Ultimate Multisite > Settings > Payments**). Langsung ing ngisor **active payment gateways**, sampeyan bakal bisa ndelok: _Stripe_, _Stripe_ Checkout, _PayPal_ lan _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Kita duwe artikel khusus kanggo saben payment gateway sing bakal nuntun sampeyan langkah-langkah ngatur (setting up) nganggo iku, sing bisa sampeyan temokake ing link-link ing ngisor iki.

Sampeyan bisa ndelok lan ngedit detail pembayaran:

![Payment edit interface](/img/admin/payment-edit.png)

Iki tampilan lengkap saka halaman edit pembayaran:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Iki uga tampilan lengkap saka pengaturan payment gateways:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Ngatur gateway Stripe**

**Ngatur gateway PayPal**** **

**Ngatur pembayaran manual**

Saiki, yen sampeyan arep nggunakake _WooCommerce_, _GoCardless_ utawa _Payfast_ minangka payment gateway panjenengan, sampeyan bakal perlu **nginstal lan ngatur add-on (add-ons) saka iku**.

### Cara nginstal add-on WooCommerce:

Kita ngerti yen _Stripe_ lan _PayPal_ ora kabeh ana ing sawetara negara sing nggawa wates utawa angelake pengguna Ultimate Multisite kanggo nggunakake plugin kita kanthi efektif. Dadi, kita nggawe add-on kanggo integrasi _WooCommerce_, sing iku plugin e-commerce sing banget populer. Developer saka sak dunya wis nggawe add-on kanggo ngintegrasi payment gateway sing beda karo iku. Kita nganggo iki kanggo nambah (extend) payment gateway sing bisa sampeyan gunakake karo sistem billing Ultimate Multisite.

**PENTING:** Ultimate Multisite: Integrasi WooCommerce butuh WooCommerce di situs utama kamu sudah aktif minimal.

Pertama, silakan buka halaman add-ons. Kamu bisa menemukannya dengan pergi ke **Ultimate Multisite > Settings**. Di sana kamu akan lihat tabel **Add-ons**. Klik pada **Check our Add-ons**.

<!-- Screenshot unavailable: Tabel Add-ons di sidebar Ultimate Multisite Settings dengan tautan Check our Add-ons -->

Setelah mengklik **Check our Add-ons**, kamu akan diarahkan ke halaman add-ons. Di sini kamu bisa menemukan semua add-on Ultimate Multisite. Klik pada add-on **Ultimate Multisite: WooCommerce Integration**.

![Halaman add-ons yang mencantumkan add-on Ultimate Multisite termasuk Integrasi WooCommerce](/img/addons/addons-page.png)

Sebuah jendela akan muncul dengan detail add-on tersebut. Cukup klik **Install Now**.

<!-- Screenshot unavailable: Dialog detail add-on Ultimate Multisite WooCommerce Integration dengan tombol Install Now -->

Setelah instalasi selesai, kamu akan diarahkan ke halaman plugins. Di sini, cukup klik **Network Activate** dan add-on WooCommerce akan aktif di seluruh jaringan kamu.

<!-- Screenshot unavailable: Halaman plugins dengan tautan Network Activate untuk add-on Integrasi WooCommerce -->

Setelah diaktifkan, kalau ternyata plugin WooCommerce masih belum terpasang dan aktif di website kamu, kamu akan mendapat pengingat.

<!-- Screenshot unavailable: Pemberitahuan admin yang mengingatkan administrator untuk menginstal dan mengaktifkan plugin WooCommerce -->

Untuk membaca lebih lanjut tentang add-on Integrasi WooCommerce, **klik di sini**.

### Cara menginstal add-on GoCardless:

Langkah-langkah kanggo instal add-on _GoCardless_ iku meh padha karo add-on _WooCommerce_. Monggo tindakake menyang halaman add-ons lan pilih add-on **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Jendela add-on bakal muncul. Klik **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Sawise instalasi rampung, sampeyan bakal diarahkan menyang halaman plugins. Ing kene, cukup klik **Network Activate** lan add-on _GoCardless_ bakal aktif ing jaringanmu.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Kanggo sinau carane miwiti nganggo gateway _GoCardless_, **waca artikel iki**.

### Cara instal add-on Payfast:

Tindakake menyang halaman add-ons lan pilih add-on **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Jendela add-on bakal muncul. Klik **Install Now.**

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Sawise instalasi rampung, sampeyan bakal diarahkan menyang halaman plugins. Ing kene, cukup klik **Network Activate** lan add-on _Payfast_ bakal aktif ing jaringanmu.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
