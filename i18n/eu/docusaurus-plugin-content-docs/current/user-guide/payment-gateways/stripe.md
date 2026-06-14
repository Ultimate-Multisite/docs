---
title: Stripe-a konpondu
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway-aren kon konpona (v2)

_**IMPORTANTE NOTA: Hau artikulu Ultimate Multisite bersyon 2.x-era referentzia da.**_

Payment-aren kontua dört metodo erabilizue ditu: Stripe, Stripe Checkout, PayPal eta Manual. Hau honetan, **Stripe**arekin nola integratzen da ikusten dugu.

## Stripe-aren aktiboa egitea

Stripe-aren network-an erabilera gisa aktiboa egiteko, **Ultimate Multisite > Settings > Payments** funtziara jarraitu eta Active Payment Gateways (Aktibo Payment Gateway-ak) sezazioan **Stripe** edo **Stripe Checkout** iraupenean dagoen toggle-aren ikusi.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Hau metodoarekin checkout-aren ondorioz, barne cartea numerua sartzeko leku izango da.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Hau metodoarekin checkout-aren ondorioz, klientia Stripe Checkout lapera irekituko da.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

### Stripe API key-ak hartzea

Stripe-aren payment gateway gisa aktiboa egindatzen dela, **Stripe Publishable Key** eta **Stripe Secret Key** iraupenean ematen behar duzu. Haua Stripe kontuan logiindu dakitu dezakezu.

_**Nota:** Payment methoda jakin jakin nahi duz testatzeko **Sandbox mode** aktiboa egiteko.**_

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Stripe dashboardan, atzeko hakuriko (top-right corner) "Developers"-i klikatu, eta menuko (left menu) "API Keys"-ri.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Mogu er **Test Data** (da ir probaria, zerbitzen da integrazioa zure prodokzio situailean funtzionatzen duen) edo ez duzu. Hau aldatzeko, **Viewing test data** toggia txikiatu behar duzu.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** eta **Secret key** zehatza bat kopiatu, **Token** kolona mendiak eta Ultimate Multisite Stripe Gateway lekuakara hartu ditu. Horrek ondoren klik egin behar duzu **Save Changes** (Aldakuntzak saldatu).

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook-a konpondu

Stripe-ak webhook events bidaltzen du, zeinbait **zure stripe kontua** ondorioztatuenean Ultimate Multisite-i.

**Developers** (Gizarte-ak) klik egin eta menuko eskaera-eko lekuan **Webhooks** (Webhook-ak) aukerarekin aukeratu behar duzu. Horrek aurrera, handi-ekean **Add endpoint** (Endpoint leku bat gehitu) klik egin behar duzu *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

**Endpoint URL** (Lehen lekuaren URLa) behar duzu *.* Ultimate Multisite-ak endpoint URL-a automatikoki sortzen du, eta hori **Ultimate Multisite Stripe Gateway** seksioaren ondoreko **Webhook Listener URL** lekuaren hemen aurkitu daitezke.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL-a **kopiatu** eta Stripe-ren **Endpoint URL** lekuan **pasti** behar duzu.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Aurrera, **Event** (Gertaera) aukeratu behar daitezke *.* Horrek aukera-eko lekuan, **Select all events** (Meisten guztia aukeratu) boxa txikiatu eta **Add events** (Gertaera gehitu) klik egin behar duzu. Horren ondoren, aldatzak saldatzeko **Add Endpoint** (Endpoint leku bat gehitu) klik egin behar duzu.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Zer da, Stripe-aren labengailua amaitu da!
