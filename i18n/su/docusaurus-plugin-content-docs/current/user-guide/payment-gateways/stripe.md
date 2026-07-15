---
title: Ngatur Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Ngatur Gerbang Pembayaran Stripe (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Anjeun bisa ngaktifkeun nepi ka opat cara pembayaran dina halaman pengaturan pembayaran urang: Stripe, Stripe Checkout, PayPal, jeung Manual. Dina artikel ieu, urang bakal tingali kumaha carana ngintegrasi jeung **Stripe**.

## Ngaktifkeun Stripe {#enabling-stripe}

Supaya Stripe jadi gerbang pembayaran anu bisa dipaké di jaringan anjeun, nyaéta ka **Ultimate Multisite > Settings > Payments** terus centang tombol (toggle) di sisi **Stripe** atawa **Stripe Checkout** dina bagian Active Payment Gateways.

![Ngaktifkeun Stripe dina active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Cara ieu bakal nunjukkeun tempat pikeun nyisipkeun nomer kartu kredit nalika proses checkout.

![Bidang kartu kredit inline Stripe nalika checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Cara ieu bakal ngarujuk (redirect) pelanggan ka halaman Stripe Checkout nalika proses checkout.

![Halaman redirect Stripe Checkout nalika checkout](/img/config/settings-payment-gateways.png)

Ngahasilkeun kunci API Stripe anjeun

Sakali Stripe geus diaktifkeun salaku gerbang pembayaran, anjeun kudu ngisi kolom pikeun **Stripe Publishable Key** jeung **Stripe Secret Key**. Anjeun bisa meunang éta ku cara *login* ka akun Stripe anjeun.

_**Catatan:** anjeun bisa ngaktifkeun **Sandbox mode** pikeun nguji upami metode pembayaran geus lumangsung.**_

![Bidang kunci API Stripe jeung toggle sandbox mode](/img/config/settings-payment-gateways.png)

Dina dashboard Stripe anjeun, klik **Developers** di pojok kanan atas, terus pilih **API Keys** dina menu kiwaruh (left menu).

![Bagian Developers dashboard Stripe jeung API Keys](/img/config/settings-payment-gateways.png)

Anjeun ti bisa milih ngagunake **Test Data** (pikeun nguji lamun integrasi geus jalan di situs produksi anjeun) atawa teu nganggo. Pikeun ngarobah éta, ganti toggle **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Salin nilai ti **Publishable key** jeung **Secret key**, ti kolom **Token** terus tempelkeun dina kolom Stripe Gateway di Ultimate Multisite. Terus klik pikeun **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Ngatur Stripe Webhook {#setting-up-stripe-webhook}

Stripe ngirimkeun webhook event anu ngabéjaan Ultimate Multisite nalika aya kajadian dina **akun stripe anjeun**.

Klik **Developers** terus pilih item **Webhooks** di menu kiwaruh. Terus di sisi kanan klik **Add endpoint** *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Anjeun butuh **Endpoint URL** *. Ultimate Multisite bakal ngajadikeun Endpoint URL otomatis anu bisa anjeun manggihan di handapna kolom **Webhook Listener URL** dina bagian **Ultimate Multisite Stripe Gateway**_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Salin** endpoint URL éta terus **tempelkeun** dina kolom **Endpoint URL** di Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Terusna, pilih **Event** *. Di handap pilihan ieu, anjeun ngan ukur kedah mencét kotak **Select all events** terus klik pikeun **Add events**. Sanggeus éta klik **Add Endpoint** pikeun nyimpen rorobohna.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Ieu, integrasi pembayaran Stripe anjeun geus rampung!
