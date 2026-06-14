---
title: Ho setse PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Setuping Le PayPal Gateway (v2)

_**NOTE ZWIKU: Le tsela le liti se a reka Ultimate Multisite version 2.x.**_

O ka u fana up to four methods of payment on our payment settings page: Stripe, Stripe Checkout, PayPal and Manual. In this article, o tla bona how to integrate with **PayPal**.

Like Stripe, PayPal e fana go fetogolo ho tsela le tsela lehle tsa online payments, especially on WordPress websites. This article e tla go ntlha kae hoe go u sebelise PayPal as a payment method available on your network.

A reka hore o na le **PayPal Business account** go bona API credential e ntsha e e hloka ho fetogoloana.

## Go fana ka PayPal ka netefo ya hau

Go fana ka PayPal as a payment method available on your network, u tla fihla ka **Ultimate Multisite > Settings > Payments** tab le u tsamisa bokao (tick the box) e ntsha se se hloka ho PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Go sebelisa guided setup wizard

Ultimate Multisite 2.10.0 e ntshisa guided PayPal setup wizard le setse lehle sa payment gateway settings. Ha u fana ka PayPal, u sebelisa wizard eo ka **Ultimate Multisite > Settings > Payments** go bona hore o batla ho fetogoloana kae le ho bona hore na credentials a nang le ho hloka haholo fa u tsamisa (save).

Wizard eo e fana le dikotla tse pedi tsa setup:

* **Kutlo ya kgethompho (Manual credential entry)**: Use this path when you already have PayPal API credentials, when OAuth setup is not available for your account, or when you prefer to copy credentials from PayPal yourself. Enter the API Username, API Password, and API Signature in the PayPal fields, then save the payment settings.
* **Kutlo ya kgethompho ya OAuth (OAuth connection gate)**: Use this path only when the OAuth option is available and enabled for your install. The wizard shows the OAuth flow behind a feature flag, so networks without the flag continue to use the manual credential entry fields.

If hawe utlwa OAuth option e le teng mo wizard, feta pele kutlo ya kgethompho ya manu below. Gateway e le teng le credentials yeo PayPal Business API jo bo le ba release 2.x tsa Ultimate Multisite.

## Goletse credentials ya PayPal API

Ha o fetile PayPal e le gateway ya tšomo (payment gateway), o tla hloka ho fana ka fields yeo PayPal API **Username**, PayPal API **Password** le PayPal API **Signature**.

O ka utlwa ke pele ho login mo account ya hau ya PayPal [Live](https://www.paypal.com/home) kapa [Sandbox](https://www.sandbox.paypal.com/home).

(Kgetha hore o ka u sebelisa **sandbox mode** ho leba payments le ho bona hore gateway e le teng ka bonako thata. Ke fana ka ho tsamaya section e le teng.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Ho hloka ho hlokomisa API Signature kapa credentials ya Certificate ho account ya hau ya PayPal:

  1. Laela mo [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) ya hau.

  2. Mo section e le **API access**, tsama la **Update**.
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

3. Ho **NVP/SOAP API integration (Classic)**, ule **Manage API credentials** (Dira le fetoga fa-API credentials).
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ha u na le fa-API Signature ka Certificate e fana'a, o tla fana'o a le fa-page e fana'a le fetoga hau.

     * _**Note:** Ha u fana'a ho fana'a hau PayPal account, o tla fana'a le tsela ea ho fana'a ka sefalo sa le fa-screen._

  4. Select _one_ oa tse seng tsa mofuta tse di fetang, u le **Agree and Submit** (Ule a lefa le ho fana'a).

     * **Request API Signature** – Select haholo ho authentication ea API Signature.

     * **Request API Certificate** – Select haholo ho authentication ea API Certificate.

  5. PayPal e fetola fetoga hau ea API ka tsela ena:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** e na le API Username, API Password, le Signature, seo se ne se fana'a ka ho fana'a (does not expire). Lezi fa u fetola, hau ha a tsoalo ka ho fana'a (hidden by default) ho ba le seketso sa lefetso. Ule **Show/Hide** (Ho fana'a/Ho fana'a) u leba ho feta le ho fana'a. Ha u fetola, u le **Done** (Ule a lefa).

     * **API Certificate credentials** e na le API Username, API Password, le Certificate, seo se ne se fana'a ka ho fana'a haholo fa tsela ea sa le fa-tsoalo (expires automatically) ha le fa tsela ea sa le fa-tsoalo (after three years). Ule **Download Certificate** (Ho hloboha Certificate) u leba ho hloboha API Certificate ka desktop ea hau.

Ke fetileng, ho fana'a hau ea PayPal payment e lefetileng!

Ha u na le molao oa ho tseba ka settings ea PayPal, u ka fana'a le [Help Center] ea PayPal (https://www.paypal.com/br/smarthelp/home).
