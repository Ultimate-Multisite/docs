---
title: Nggatengin Pembayaran Manual
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Ngatur Pembayaran Manual (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Pembayaran manual itu cara buat sampeyan nawakake metode pembayaran liyane yen **Stripe** utawa **PayPal** ora ana kanggo pengguna sampeyan. Iki bisa berupa transfer kawat (wire) utawa bank utawa metode pembayaran liyane sing ana kanggo pengguna lokal sampeyan.

## Cara ngaktifake Pembayaran Manual

Ngatur pembayaran manual kuwi gampang banget. Sampeyan mung perlu ngaktifake nganggo payment gateways lan nulis instruksi rinci babagan kepiye carane pengguna kudu ngirim pembayaran.

Pertama, tindakna menyang **Ultimate Multisite > Settings > Payments**. Ing bawah **Payment Gateways**, onjak tombol **Manual** dadi nyala (toggle). Sampeyan bakal weruh kotak **Payment Instructions** bakal muncul kanggo sampeyan.

Tambahkan informasi sing dibutuhake pelanggan sampeyan kanggo nindakake pembayaran ing kotak iki. Iki bisa alamat rekening bank sampeyan lan email sampeyan supaya pelanggan bisa ngirim konfirmasi pembayaran marang sampeyan, contone.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Iki tampilan pengaturan manual gateway:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Sawise diatur, cukup klik **Save Settings** lan wis rampung. Nalika pengguna daftar ing jaringan sampeyan, dheweke bakal weruh pesan sing ngandharake yen dheweke bakal nampa instruksi saka sampeyan kanggo ngrampungake tuku.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Lan dheweke uga bakal nampa pesan ing halaman **Thank You** sampeyan kanthi instruksi pembayaran sampeyan.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Konfirmasi pembayaran manual

Kanggo ngkonfirmasi pembayaran manual, tindakna menu **Payments** ing sisi kiwa. Ing kono sampeyan bisa ndelok kabeh pembayaran ing jaringan sampeyan lan detailé, kalebu **statusé**. Pembayaran manual mesthi bakal duwe status **Pending** nganti sampeyan ngowahi kanthi manual.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Isi halaman pembayaran kanthi klik **reference code**. Ing halaman iki sampeyan bakal nemokake kabeh detail pembayaran sing lagi Pending, kaya ID referensi, produk, timestamp, lan liyane.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Ing kolom tengen, sampeyan bisa ngowahi status pembayaran kuwi. Ngowah dadi **Completed** lan ngaktifake opsi **Activate Membership** bakal ngaktifake situs pelanggan lan keanggotaane bakal aktif.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
