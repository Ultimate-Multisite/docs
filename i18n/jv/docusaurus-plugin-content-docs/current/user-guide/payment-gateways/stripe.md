---
title: Ngatur Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Ngatur Gateway Stripe (v2)

_**CATATAN PENTING: Artikel iki merujuk pada Ultimate Multisite versi 2.x.**_

Sampeyan bisa ngaktifake nganti papat cara pembayaran ing halaman pengaturan pembayaran kita: Stripe, Stripe Checkout, PayPal lan Manual. Ing artikel iki, kita bakal deleng kepiye carane nggabungake karo **Stripe**.

## Ngaktifake Stripe

Kanggo ngaktifake Stripe minangka gateway pembayaran sing bisa digunakake ing jaringan sampeyan, tindakna menyang **Ultimate Multisite > Settings > Payments** lan centang toggle ing sebelah **Stripe** utawa **Stripe Checkout** ing bagian Active Payment Gateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Cara iki bakal nuduhake papan kanggo mlebu nomer kartu kredit nalika proses checkout.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Cara iki bakal ngarahake pelanggan menyang halaman Stripe Checkout nalika proses checkout.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Nggolek kunci API Stripe sampeyan

Sawise Stripe aktif minangka gateway pembayaran, sampeyan perlu ngisi kolom kanggo **Stripe Publishable Key** lan **Stripe Secret Key**. Sampeyan bisa nggoleki iki kanthi mlebu akun Stripe sampeyan.

_**Catatan:** sampeyan bisa ngaktifake **Sandbox mode** kanggo nyoba yen cara pembayaran iku wis lumaku._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Ing dashboard Stripe sampeyan, klik **Developers** ing pojok tengene, lan banjur **API Keys** ing menu kiwa.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Sampe data bisa sampeyan nganggo **Test Data** (kanggo nguji yen integrasi wis lumayu nang situs produksi sampeyan utawa ora). Kanggo ngowahi iki, ganti toggle **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Salin nilai saka **Publishable key** lan **Secret key**, saka kolom **Token** banjur tempel nang field Stripe Gateway ing Ultimate Multisite. Banjur klik kanggo **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Ngatur Stripe Webhook

Stripe ngirim webhook event sing ngewene kabar marang Ultimate Multisite saben ana kedadeyan nang **akun stripe sampeyan**.

Klik **Developers** banjur pilih item **Webhooks** ing menu kiwa. Banjur ing sisi tengen klik **Add endpoint** *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Sampeyan bakal butuh **Endpoint URL** *. Ultimate Multisite otomatis nggawe Endpoint URL sing bisa sampeyan temokake langsung ngisor field **Webhook Listener URL** ing bagian **Ultimate Multisite Stripe Gateway**_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Salin** endpoint URL lan **tempel** nang field **Endpoint URL** Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Lajeng, pilih **Event** *. Ing pilihan iki, sampeyan mung perlu ngecek kotak **Select all events** banjur klik kanggo **Add events**. Sawise iku klik **Add Endpoint** kanggo ngamankan perubahan.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Nah, wis rampung wis integrasi pembayaran Stripe-mu!
