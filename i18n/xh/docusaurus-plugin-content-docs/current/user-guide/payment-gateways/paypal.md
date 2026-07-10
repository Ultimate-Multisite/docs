---
title: Ukuseta i-PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Ukuseta i-PayPal Gateway (v2) {#setting-up-the-paypal-gateway-v2}

_**INQAKU ELIBALULEKILEYO: Eli nqaku libhekisa kwi-Ultimate Multisite version 2.x.**_

Ungavula ukuya kutsho kwiindlela ezine zentlawulo kwiphepha lethu lezicwangciso zentlawulo: Stripe, Stripe Checkout, PayPal kunye ne-Manual. Kweli nqaku, siza kubona indlela yokudibanisa ne-**PayPal**.

Njenge-Stripe, i-PayPal isetyenziswa kakhulu kwiintlawulo ze-intanethi, ngakumbi kwiiwebhusayithi ze-WordPress. Eli nqaku liza kukukhokela ngendlela yokusebenzisa i-PayPal njengendlela yentlawulo ekhoyo kwinethiwekhi yakho.

Qaphela ukuba kufuneka ube ne-**PayPal Business account** ukuze ufumane iinkcukacha ze-API ezifunekayo kolu dibaniso.

## Ukuvula i-PayPal kwinethiwekhi yakho {#enabling-paypal-on-your-network}

Ukuvula i-PayPal njengendlela yentlawulo ekhoyo kwinethiwekhi yakho, yiya kwi-**Ultimate Multisite > Settings > Payments** tab uze ucofe ibhokisi esecaleni kwe-PayPal.

![Ukuvula i-PayPal kwii-gateway zentlawulo ezisebenzayo](/img/config/settings-payment-gateways.png)

## Ukusebenzisa iwizard yokuseta ekhokelwayo {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 yongeza iwizard yokuseta i-PayPal ekhokelwayo kwizicwangciso ze-payment gateway. Emva kokuba uvule i-PayPal, sebenzisa iwizard kwi-**Ultimate Multisite > Settings > Payments** ukukhetha indlela ofuna ukudibanisa ngayo i-gateway kwaye uqinisekise ukuba zeziphi iinkcukacha ezisafunekayo ngaphambi kokugcina.

Iwizard ixhasa iindlela ezimbini zokuseta:

* **Ukufaka iinkcukacha ngesandla**: Sebenzisa le ndlela xa sele uneenkcukacha ze-PayPal API, xa ukuseta nge-OAuth kungafumaneki kwi-account yakho, okanye xa ukhetha ukukopa iinkcukacha kwi-PayPal ngokwakho. Faka i-API Username, API Password, kunye ne-API Signature kwiindawo ze-PayPal, emva koko ugcine izicwangciso zentlawulo.
* **Isango loqhagamshelwano lwe-OAuth**: Sebenzisa le ndlela kuphela xa ukhetho lwe-OAuth lukhona kwaye luvuliwe kufakelo lwakho. Iwizard ibonisa ukuhamba kwe-OAuth emva kwe-feature flag, ngoko iinethiwekhi ezingenayo loo flag ziqhubeka nokusebenzisa iindawo zokufaka iinkcukacha ngesandla.

Ukuba awuboni ukhetho lwe-OAuth kwiwizard, gqibezela ukuhamba kokufaka iinkcukacha ngesandla ngezantsi. I-gateway isebenza ngeenkcukacha ezifanayo ze-PayPal Business API njengokukhutshwa kwangaphambili kwe-Ultimate Multisite 2.x.

## Ukufumana iinkcukacha ze-PayPal API {#getting-the-paypal-api-credentials}

Nje ukuba i-PayPal ivulwe njenge-payment gateway, kuya kufuneka ugcwalise iindawo ze-PayPal API **Username** , PayPal API **Password** kunye ne-PayPal API **Signature**.

Ungazifumana ngokungena kwi-account yakho ye-PayPal [Live](https://www.paypal.com/home) okanye [Sandbox](https://www.sandbox.paypal.com/home).

(Khumbula ukuba ungasebenzisa i-**sandbox mode** ukuvavanya iintlawulo kwaye ubone ukuba i-gateway isetwe ngokuchanekileyo. Vula nje icandelo elihambelanayo.)

![Iindawo zeenkcukacha ze-PayPal API kunye neqhosha lokuvula i-sandbox mode](/img/config/settings-payment-gateways.png)

Ukucela i-API Signature okanye iinkcukacha ze-Certificate ze-account yakho ye-PayPal:

  1. Yiya kwi-[Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Kwicandelo le-**API access**, cofa **Update**.
![PayPal Account Settings enecandelo le-API access](/img/config/settings-payment-gateways.png)

  3. Phantsi kwe-**NVP/SOAP API integration (Classic)** , cofa **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ukuba sele wenze i-API Signature okanye i-Certificate, uya kuthunyelwa kwiphepha apho ungafumana khona iinkcukacha zakho.

     * _**Qaphela:** Ukuba ucelwa ukuba uqinisekise i-account yakho ye-PayPal, landela imiyalelo ekwisikrini._

  4. Khetha _enye_ kwezi ndlela zilandelayo, emva koko ucofe **Agree and Submit**.

     * **Request API Signature** – Khetha ukuqinisekiswa nge-API Signature.

     * **Request API Certificate** – Khetha ukuqinisekiswa nge-API Certificate.

  5. I-PayPal ivelisa iinkcukacha zakho ze-API ngolu hlobo lulandelayo:
![Iinkcukacha ze-API ezenziwe yi-PayPal](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** ziquka i-API Username, API Password, kunye ne-Signature, engaphelelwayo. La maxabiso afihlwe ngokungagqibekanga ngenxa yokhuseleko olongezelelweyo. Cofa **Show/Hide** ukuwavula nokuwavala. Xa ugqibile, cofa **Done**.

     * **API Certificate credentials** ziquka i-API Username, API Password, kunye ne-Certificate, ephelelwa ngokuzenzekelayo emva kweminyaka emithathu. Cofa **Download Certificate** ukugcina i-API Certificate kwi-desktop yakho.

Kuphelele apho, udibaniso lwakho lwentlawulo lwe-PayPal lugqityiwe!

Ukuba unemibuzo malunga nezicwangciso ze-PayPal, ungabhekisa kwi-[Help Center](https://www.paypal.com/br/smarthelp/home) ye-PayPal.
