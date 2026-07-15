---
title: Kusanidi PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Kuweka Lango la PayPal (v2)

_**TAARIFA MUHIMU: Makala hii inarejelea Ultimate Multisite toleo 2.x.**_

Unaweza kuwezesha hadi mbinu nne za malipo kwenye ukurasa wetu wa mipangilio ya malipo: Stripe, Stripe Checkout, PayPal na Manual. Katika makala hii, tutaona jinsi ya kuunganisha na **PayPal**.

Kama ilivyo kwa Stripe, PayPal hutumika sana kwa malipo ya mtandaoni, hasa kwenye tovuti za WordPress. Makala hii itakuongoza jinsi ya kutumia PayPal kama mbinu ya malipo inayopatikana kwenye mtandao wako.

Kumbuka kwamba unahitaji kuwa na **Account ya Biashara ya PayPal** ili kupata kitambulisho cha API kinachohitajika kwa muunganisho huu.

## Kuwezesha PayPal kwenye mtandao wako {#enabling-paypal-on-your-network}

Ili kuwezesha PayPal kama mbinu ya malipo inayopatikana kwenye mtandao wako, nenda kwenye kichupo cha **Ultimate Multisite > Settings > Payments** na uteue kisanduku kilicho karibu na PayPal.

![Kuwezesha PayPal katika malango amilifu ya malipo](/img/config/settings-payment-gateways.png)

## Kutumia mchawi wa usanidi unaoongozwa {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 inaongeza mchawi wa usanidi wa PayPal unaoongozwa kwenye mipangilio ya lango la malipo. Baada ya kuwezesha PayPal, tumia mchawi kwenye **Ultimate Multisite > Settings > Payments** kuchagua jinsi unavyotaka kuunganisha lango na kuthibitisha vitambulisho gani bado vinahitajika kabla ya kuhifadhi.

Mchawi unaunga mkono njia mbili za usanidi:

* **Uingizaji wa vitambulisho kwa mkono**: Tumia njia hii wakati tayari una vitambulisho vya API vya PayPal, wakati usanidi wa OAuth haupatikani kwa Account yako, au unapopendelea kunakili vitambulisho kutoka PayPal mwenyewe. Ingiza API Username, API Password, na API Signature katika sehemu za PayPal, kisha uhifadhi mipangilio ya malipo.
* **Lango la muunganisho wa OAuth**: Tumia njia hii tu wakati chaguo la OAuth linapatikana na limewezeshwa kwa usakinishaji wako. Mchawi unaonyesha mtiririko wa OAuth nyuma ya alama ya kipengele, kwa hivyo mitandao isiyo na alama hiyo inaendelea kutumia sehemu za uingizaji wa vitambulisho kwa mkono.

Ikiwa huoni chaguo la OAuth katika mchawi, kamilisha mtiririko wa uingizaji wa vitambulisho kwa mkono hapa chini. Lango linafanya kazi na vitambulisho vilevile vya API vya PayPal Business kama matoleo ya awali ya Ultimate Multisite 2.x.

## Kupata vitambulisho vya API vya PayPal {#getting-the-paypal-api-credentials}

Mara PayPal itakapowezeshwa kama lango la malipo, utahitaji kujaza sehemu za PayPal API **Username** , PayPal API **Password** na PayPal API **Signature**.

Unaweza kupata hivi kwa kuingia kwenye Account yako ya PayPal [Live](https://www.paypal.com/home) au [Sandbox](https://www.sandbox.paypal.com/home).

(Kumbuka kwamba unaweza kutumia **hali ya sandbox** kujaribu malipo na kuona kama lango limesanidiwa ipasavyo. Washa tu sehemu husika.)

![Sehemu za vitambulisho vya API vya PayPal na swichi ya hali ya sandbox](/img/config/settings-payment-gateways.png)

Ili kuomba vitambulisho vya API Signature au Certificate kwa Account yako ya PayPal:

  1. Nenda kwenye [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) yako.

  2. Katika sehemu ya **API access**, bofya **Update**.
![PayPal Account Settings yenye sehemu ya API access](/img/config/settings-payment-gateways.png)

  3. Chini ya **NVP/SOAP API integration (Classic)** , bofya **Manage API credentials**.
![Muunganisho wa PayPal NVP/SOAP API Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ikiwa tayari umezalisha API Signature au Certificate, utaelekezwa kwenye ukurasa ambapo unaweza kupata vitambulisho vyako.

     * _**Kumbuka:** Ukiombwa kuthibitisha Account yako ya PayPal, basi fuata maelekezo yaliyo kwenye skrini._

  4. Chagua _mojawapo_ ya machaguo yafuatayo, kisha bofya **Agree and Submit**.

     * **Request API Signature** – Chagua kwa uthibitishaji wa API Signature.

     * **Request API Certificate** – Chagua kwa uthibitishaji wa API Certificate.

  5. PayPal huzalisha vitambulisho vyako vya API kama ifuatavyo:
![Vitambulisho vya API vilivyozalishwa na PayPal](/img/config/settings-payment-gateways.png)

     * **Vitambulisho vya API Signature** vinajumuisha API Username, API Password, na Signature, ambavyo haviishi muda wake. Thamani hizi hufichwa kwa chaguo-msingi kwa usalama zaidi. Bofya **Show/Hide** kuvionyesha na kuvificha. Ukimaliza, bofya **Done**.

     * **Vitambulisho vya API Certificate** vinajumuisha API Username, API Password, na Certificate, ambavyo huisha muda wake kiotomatiki baada ya miaka mitatu. Bofya **Download Certificate** ili kuhifadhi API Certificate kwenye eneo-kazi lako.

Hayo ndiyo yote, muunganisho wako wa malipo wa PayPal umekamilika!

Ikiwa una maswali yoyote kuhusu mipangilio ya PayPal, unaweza kurejelea [Help Center](https://www.paypal.com/br/smarthelp/home) ya PayPal.
