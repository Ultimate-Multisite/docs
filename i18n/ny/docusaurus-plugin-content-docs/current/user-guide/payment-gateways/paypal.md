---
title: Kuyenda kwa PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Kufunga Gateway ya PayPal (v2) {#setting-up-the-paypal-gateway-v2}

_**KUFUNDI MUWULANA: Hii habari inahusu Ultimate Multisite version 2.x.**_

Umaweza kuwasha njia nne za malipo kwenye ukurasa wako wa mipangilio ya malipo: Stripe, Stripe Checkout, PayPal na Manual. Katika makala hii, tutakuta jinsi ya kuunganisha na **PayPal**.

Kama vile Stripe, PayPal hutumika sana kwa malipo mtandaoni, hasa kwenye tovuti za WordPress. Makala hii itakuelekeza jinsi ya kutumia PayPal kama njia ya malipo inayopatikana kwenye mtandao wako.

Kumbuka kwamba unahitaji kuwa na **PayPal Business account** ili kupata API credential inayohitajika kwa ushirikishwaji huu.

## Kuwasha PayPal kwenye mtandao wako {#enabling-paypal-on-your-network}

Ili kuwasha PayPal kama njia ya malipo inayopatikana kwenye mtandao wako, nenda kwenye **Ultimate Multisite > Settings > Payments** tab na chagua (tick) sanduku linaloambatana na PayPal.

![Kuwasha PayPal katika gateways za malipo zinazofanya kazi](/img/config/settings-payment-gateways.png)

## Kutumia guided setup wizard {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 inaleta guided PayPal setup wizard kwenye mipangilio ya gateway ya malipo. Baada ya kuwasha PayPal, tumia wizard kwenye **Ultimate Multisite > Settings > Payments** kuchagua jinsi unavyotaka kuunganisha gateway na kuthibitisha ni vipi credentials bado zinahitajika kabla ya kuhifadhi.

Wizard inasaidia njia mbili za setup:

* **Kutenge kwa sifa (Manual credential entry)**: Tumia njia hii paumpa msimbo ukawa na credentials za PayPal tayari, ukipokuwa hakuna OAuth setup kwa akaunti yako, au ukipendelea kunakili credentials kutoka kwa PayPal mwenyewe. Ingiza API Username, API Password, na API Signature kwenye sehemu za PayPal, kisha hifadhi mipangilio ya malipo.
* **Mifaa ya kuingia kwa OAuth (OAuth connection gate)**: Tumia njia hii tu pale ambapo chaguo la OAuth limewepo na limewezekana kwa usakinishaji wako. Mwandishi wa mwongozo unaonyesha mtiririko wa OAuth nyuma ya feature flag, hivyo mitandao isiyo na flag hiyo zinaendelea kutumia sehemu za kuingia kwa sifa (manual credential entry).

Ikiwa haoni chaguo la OAuth kwenye mwandishi wa mwongozo, kumaliza utaratibu wa kuingia kwa sifa (manual credential entry) hapa chini. Gateway inafanya kazi na credentials sawa za PayPal Business API kama matoleo ya awali ya Ultimate Multisite 2.x.

## Kupata credentials za PayPal API {#getting-the-paypal-api-credentials}

Baada ya kuwasha PayPal kama gateway ya malipo, utahitaji kujaza sehemu za **Username** ya PayPal API , **Password** ya PayPal API na **Signature** ya PayPal API.

Unaweza kupata hizi kwa kuingia kwenye akaunti yako ya [Live](https://www.paypal.com/home) au [Sandbox](https://www.sandbox.paypal.com/home).

(Kumbuka kwamba unaweza kutumia **sandbox mode** ili kujaribu malipo na kuona kama gateway imewekwa vizuri. Tuweke kwenye sehemu inayohusiana tu.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Ili kuomba API Signature au credentials za Certificate kwa akaunti yako ya PayPal:

  1. Nenda kwenye [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) yako.

  2. Katika sehemu ya **API access**, bonyeza **Update**.

3. M'mulo **NVP/SOAP API integration (Classic)**, click **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ngati muli muli ndi API Signature kapena Certificate, muli wamulira pa ndau yomwe mungapeze zinthu zina za mapulani.

     * _**Mawoncho:** Ngati muli wamulira kuti mufotokozere akaunti ya PayPal, muli wamulira njira zomwe zimeneza m'moyo wanu._

  4. Select _imodzi_ monga momwe muli ndi zinthu zina, muli wamulira **Agree and Submit**.

     * **Request API Signature** – Select kuti muli ndi API Signature authentication.

     * **Request API Certificate** – Select kuti muli ndi API Certificate authentication.

  5. PayPal imapanga credentials yanu za API monga momwe:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** zimeneza API Username, API Password, ndipo Signature, zomwe sikupitilira. Zinthu zina zikupitilira kwa m'moyo kuti muli ndi chisonkhwe. Click **Show/Hide** kuti muli wamulira ndipo muli wamulira. Pamene muli wamulira, click **Done**.

     * **API Certificate credentials** zimeneza API Username, API Password, ndipo Certificate, zomwe zikupitilira m'moyo monga momwe. Click **Download Certificate** kuti muli wamulira API Certificate ku desktop yanu.

Iyi ndi iwo, integration ya mkati wa PayPal imapangidwa!

Ngati muli ndi mafunso omwe muli nawo za settings ya PayPal, muli wamulira pa [Help Center] ya PayPal.
