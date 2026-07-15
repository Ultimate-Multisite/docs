---
title: Pag-set Up ng Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Pag-set Up ng Stripe Gateway (v2)

_**MAHALAGANG PA TANDAAN: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Maaari mong i-activate hanggang apat na paraan ng pagbabayad sa aming payment settings page: Stripe, Stripe Checkout, PayPal at Manual. Sa artikulong ito, makikita natin kung paano mag-integrate gamit ang **Stripe**.

## Pag-e-enable ng Stripe {#enabling-stripe}

Para ma-enable ang Stripe bilang isang available na payment gateway sa network mo, pumunta ka sa **Ultimate Multisite > Settings > Payments** at i-tick (lagyan ng tsek) ang toggle sa tabi ng **Stripe** o **Stripe Checkout** sa Active Payment Gateways section.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Ang paraang ito ay magpapakita ng espasyo kung saan mo ilalagay ang credit card number habang nag-checkout.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ang paraang ito ay magre-redirect sa customer papunta sa Stripe Checkout page habang nag-checkout.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Pagkuha ng iyong Stripe API keys

Kapag na-enable mo na ang Stripe bilang payment gateway, kailangan mong punan ang mga fields para sa **Stripe Publishable Key** at **Stripe Secret Key**. Maaari mo itong makuha sa pamamagitan ng pag-log in sa iyong Stripe account.

_**Tandaan:** maaari kang mag-activate ng **Sandbox mode** para masubukan kung gumagana ang payment method._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Sa iyong Stripe dashboard, i-click ang **Developers** sa kanang itaas na sulok, at pagkatapos ay **API Keys** sa kaliwang menu.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Maaari kang gumamit ng **Test Data** (para masubukan kung gumagana ang integration sa iyong production site) o hindi. Para baguhin ito, i-toggle ang **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopyahin ang value mula sa **Publishable key** at **Secret key**, mula sa column na **Token** at i-paste ito sa mga field ng Ultimate Multisite Stripe Gateway. Pagkatapos ay i-click para **I-save ang mga pagbabago**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Pag-set up ng Stripe Webhook {#setting-up-stripe-webhook}

Nagpapadala ang Stripe ng mga webhook event na nagpapaalam sa Ultimate Multisite tuwing may mangyayaring event sa **iyong stripe account**.

I-click ang **Developers** at pagkatapos ay piliin ang item na **Webhooks** sa kaliwang menu. Pagkatapos ay sa kanang bahagi, i-click ang **Add endpoint** *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Kailangan mo ng isang **Endpoint URL** *. Ang Ultimate Multisite ay awtomatikong gumagawa ng endpoint URL na matatagpuan mo mismo sa ibaba ng field na **Webhook Listener URL** sa seksyon ng **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopyahin** ang endpoint URL at **i-paste** ito sa field na **Endpoint URL** ng Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Susunod ay piliin ang isang **Event** *. Sa ilalim ng opsyong ito, kailangan mo lang i-check ang kahon na **Select all events** at i-click para sa **Add events**. Pagkatapos ay i-click ang **Add Endpoint** para i-save ang mga pagbabago.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Tapos na! Ang iyong Stripe payment integration ay kumpleto na!
