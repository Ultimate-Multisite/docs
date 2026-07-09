---
title: Ngatur Pembayaran Manual
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Ngatur Pembayaran Manual (v2) {#setting-up-manual-payments-v2}

_**CATETHAN WIGATI: Artikel iki ngrujuk marang Ultimate Multisite versi 2.x.**_

Pembayaran manual iku cara supaya sampeyan bisa nawakake cara pembayaran liyane yen **Stripe** utawa **PayPal** ora kasedhiya kanggo pangguna sampeyan. Iki bisa awujud transfer kawat utawa transfer bank utawa cara pembayaran liyane sing kasedhiya sacara lokal kanggo pangguna sampeyan.

## Carane ngaktifake Pembayaran Manual {#how-to-enable-manual-payments}

Ngatur pembayaran manual iku gampang banget. Sampeyan mung perlu ngaktifake ing sangisore gateway pembayaran lan nglebokake pandhuan rinci babagan carane pangguna kudu ngirim pembayaran.

Pisanan, bukak **Ultimate Multisite > Setelan > Pembayaran**. Ing ngisor **Gateway Pembayaran** , aktifake **Manual**. Sampeyan bakal weruh manawa kothak **Pandhuan Pembayaran** bakal katon kanggo sampeyan.

Tambahake menyang kothak iki informasi sing dibutuhake pelanggan kanggo nggawe pembayaran. Contone, bisa rincian akun bank lan email sampeyan supaya pelanggan bisa ngirim konfirmasi pembayaran marang sampeyan.

![Tombol gateway pembayaran manual karo area teks Pandhuan Pembayaran](/img/config/manual-gateway-expanded.png)

Iki antarmuka setelan gateway manual:

![Setelan gateway manual](/img/config/manual-gateway-settings.png)

Sawise wis diatur, mung klik **Simpen Setelan** lan wis rampung. Nalika pangguna ndhaptar menyang jaringan sampeyan, dheweke bakal weruh pesen sing ngandhani yen dheweke bakal nampa pandhuan saka sampeyan kanggo ngrampungake tuku.

![Pesen konfirmasi pendaftaran sing ngandhani pangguna yen dheweke bakal nampa pandhuan pembayaran](/img/frontend/registration-manual-notice.png)

Lan dheweke uga bakal nampa pesen ing kaca **Matur Nuwun** sampeyan karo pandhuan pembayaran sampeyan.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Ngonfirmasi pembayaran manual {#confirming-manual-payments}

Kanggo ngonfirmasi pembayaran manual, bukak menu **Pembayaran** ing bilah kiwa. Ing kana sampeyan bisa ndeleng kabeh pembayaran ing jaringan sampeyan lan rinciane, kalebu **status**-e. Pembayaran manual mesthi bakal duwe status **Ngenteni** nganti sampeyan ngganti kanthi manual.

![Dhaptar pembayaran sing nuduhake pembayaran manual sing ngenteni](/img/admin/payments-list.png)

Mlebu menyang kaca pembayaran kanthi ngeklik **kode referensi**. Ing kaca iki sampeyan duwe kabeh rincian pembayaran sing isih ngenteni, kayata ID referensi, produk, cap wektu lan liya-liyane.

![Kaca rincian pembayaran sing nuduhake kode referensi, produk, lan total](/img/admin/payment-edit.png)

Ing kolom tengen, sampeyan bisa ngowahi status pembayaran. Ngganti dadi **Rampung** lan **ngaktifake opsi Aktifake Keanggotaan** bakal ngaktifake situs pelanggan sampeyan lan keanggotaan dheweke bakal aktif.

![Kaca sunting pembayaran karo Status disetel dadi Rampung lan tombol Aktifake Keanggotaan](/img/admin/payment-activate-membership.png)
