---
title: Kuweka PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Kuweka Lango la Malipo la PayPal (v2)

_**TAARIFA MUHIMU: Makala hii inahusu toleo la 2.x la Ultimate Multisite.**_

Unaweza kuwezesha hadi njia nne za malipo kwenye ukurasa wetu wa mipangilio ya malipo: Stripe, Stripe Checkout, PayPal na Manual. Katika makala hii, tutaona jinsi ya kuunganisha na **PayPal**.

Kama ilivyo kwa Stripe, PayPal inatumika sana kwa malipo ya mtandaoni, hasa kwenye tovuti za WordPress. Makala hii itakuongoza jinsi ya kutumia PayPal kama njia ya malipo inayopatikana kwenye mtandao wako.

Kumbuka kwamba unahitaji kuwa na **akaunti ya PayPal Business** ili kupata vitambulisho vya API vinavyohitajika kwa muunganisho huu.

## Kuwezesha PayPal kwenye mtandao wako

Ili kuwezesha PayPal kama njia ya malipo inayopatikana kwenye mtandao wako, nenda **Ultimate Multisite > Settings > Payments** na uweke alama kwenye kisanduku kando ya PayPal.

![Kuwezesha PayPal katika lango za malipo zinazotumika](/img/config/settings-payment-gateways.png)

## Kupata vitambulisho vya PayPal API

Mara PayPal inapowezeshwa kama lango la malipo, utahitaji kujaza sehemu za PayPal API **Username**, PayPal API **Password** na PayPal API **Signature**.

Unaweza kupata hizi kwa kuingia kwenye akaunti yako ya PayPal [Live](https://www.paypal.com/home) au [Sandbox](https://www.sandbox.paypal.com/home).

(Kumbuka kwamba unaweza kutumia **sandbox mode** kujaribu malipo na kuona kama lango limewekwa vizuri. Bonyeza tu swichi ya sehemu husika.)

![Sehemu za vitambulisho vya PayPal API na swichi ya sandbox mode](/img/config/settings-payment-gateways.png)

Ili kuomba vitambulisho vya API Signature au Certificate kwa akaunti yako ya PayPal:

  1. Nenda kwenye [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) yako.

  2. Katika sehemu ya **API access**, bonyeza **Update**.  
![Mipangilio ya Akaunti ya PayPal yenye sehemu ya API access](/img/config/settings-payment-gateways.png)

  3. Chini ya **NVP/SOAP API integration (Classic)**, bonyeza **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ikiwa tayari umetengeneza API Signature au Certificate, utaelekezwa kwenye ukurasa ambapo unaweza kupata vitambulisho vyako.

     * _**Kumbuka:** Ikiwa unaombwa kuthibitisha akaunti yako ya PayPal, fuata maelekezo yanayoonekana kwenye skrini._

  4. Chagua _moja_ ya chaguo zifuatazo, kisha bonyeza **Agree and Submit**.

     * **Request API Signature** – Chagua kwa uthibitishaji wa API Signature.

     * **Request API Certificate** – Chagua kwa uthibitishaji wa API Certificate.

  5. PayPal itatengeneza vitambulisho vyako vya API kama ifuatavyo:  
![Vitambulisho vya API vilivyotengenezwa na PayPal](/img/config/settings-payment-gateways.png)

     * **Vitambulisho vya API Signature** vinajumuisha API Username, API Password, na Signature, ambayo haiishi muda wake. Thamani hizi zimefichwa kwa chaguo-msingi kwa usalama zaidi. Bonyeza **Show/Hide** kuziwasha na kuzizima. Ukimaliza, bonyeza **Done**.

     * **Vitambulisho vya API Certificate** vinajumuisha API Username, API Password, na Certificate, ambayo inaisha muda wake moja kwa moja baada ya miaka mitatu. Bonyeza **Download Certificate** kuhifadhi API Certificate kwenye kompyuta yako.

Ndivyo hivyo, muunganisho wako wa malipo ya PayPal umekamilika!

Ikiwa una maswali yoyote kuhusu mipangilio ya PayPal, unaweza kurejea [Kituo cha Msaada](https://www.paypal.com/br/smarthelp/home) cha PayPal.
