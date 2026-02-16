---
title: Pag-set Up ng Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Pag-set Up ng Stripe Gateway (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay para sa Ultimate Multisite version 2.x.**_

Maaari kang mag-activate ng hanggang apat na paraan ng pagbabayad sa aming payment settings page: Stripe, Stripe Checkout, PayPal at Manual. Sa artikulong ito, makikita natin kung paano mag-integrate sa **Stripe**.

## Pag-enable ng Stripe

Para ma-enable ang Stripe bilang available na payment gateway sa iyong network, pumunta sa **Ultimate Multisite > Settings > Payments** at i-tick ang toggle sa tabi ng **Stripe** o **Stripe Checkout** sa Active Payment Gateways section.

![Pag-enable ng Stripe sa active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Sa paraang ito, may lalabas na espasyo para ilagay ang credit card number habang nagche-checkout.

![Stripe inline credit card field habang nagche-checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Sa paraang ito, mare-redirect ang customer sa isang Stripe Checkout page habang nagche-checkout.

![Stripe Checkout redirect page habang nagche-checkout](/img/config/settings-payment-gateways.png)

Pagkuha ng iyong Stripe API keys

Kapag na-enable na ang Stripe bilang payment gateway, kailangan mong punan ang mga field para sa **Stripe Publishable Key** at **Stripe Secret Key**. Makukuha mo ito sa pamamagitan ng pag-log in sa iyong Stripe account.

_**Paalala:** maaari mong i-activate ang **Sandbox mode** para i-test kung gumagana ang payment method._

![Mga Stripe API key field at sandbox mode toggle](/img/config/settings-payment-gateways.png)

Sa iyong Stripe dashboard, i-click ang **Developers** sa kanang itaas na sulok, at pagkatapos ay **API Keys** sa kaliwang menu.

![Stripe dashboard Developers section na may API Keys](/img/config/settings-payment-gateways.png)

Maaari kang gumamit ng **Test Data** (para i-test kung gumagana ang integration sa iyong production site) o hindi. Para baguhin ito, i-toggle ang **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopyahin ang value mula sa **Publishable key** at **Secret key**, mula sa **Token** column at i-paste ito sa Ultimate Multisite Stripe Gateway fields. Pagkatapos ay i-click ang **Save Changes**.

![Mga Stripe publishable at secret key value](/img/config/settings-payment-gateways.png)

![Pag-paste ng Stripe keys sa Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Pag-set Up ng Stripe Webhook

Nagpapadala ang Stripe ng webhook events na nagno-notify sa Ultimate Multisite tuwing may nangyayaring event sa **iyong stripe account**.

I-click ang **Developers** at pagkatapos ay piliin ang **Webhooks** item sa kaliwang menu. Pagkatapos sa kanang bahagi, i-click ang **Add endpoint**.

![Stripe Webhooks page na may Add endpoint button](/img/config/settings-payment-gateways.png)

Kakailanganin mo ng **Endpoint URL**. Awtomatikong ginagawa ng Ultimate Multisite ang endpoint URL na makikita mo sa ibaba ng **Webhook Listener URL** field sa **Ultimate Multisite Stripe Gateway** section.

![Webhook Listener URL field sa Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopyahin** ang endpoint URL at **i-paste** ito sa Stripe **Endpoint URL** field.

![Pag-paste ng endpoint URL sa Stripe webhook setup](/img/config/settings-payment-gateways.png)

Susunod ay pumili ng **Event**. Sa opsyong ito, kailangan mo lang i-check ang **Select all events** box at i-click ang **Add events**. Pagkatapos nito, i-click ang **Add Endpoint** para i-save ang mga pagbabago.

![Pagpili ng lahat ng events at pagdagdag ng Stripe endpoint](/img/config/settings-payment-gateways.png)

Iyon lang, kumpleto na ang iyong Stripe payment integration!
