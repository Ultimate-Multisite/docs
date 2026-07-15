---
title: Ṣíṣètò PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Ṣíṣètò Ẹnu-ọna Isanwo PayPal (v2)

_**ÀKÍYÈSÍ PÀTÀKÌ: Àpilẹ̀kọ yìí tọ́ka sí Ultimate Multisite ẹ̀dà 2.x.**_

O lè mú ọ̀nà isanwo mẹ́rin ṣiṣẹ́ lórí ojú-ewé ètò isanwo wa: Stripe, Stripe Checkout, PayPal àti Afọwọṣe. Nínú àpilẹ̀kọ yìí, a ó rí bí a ṣe lè ṣepọ̀ pẹ̀lú **PayPal**.

Gẹ́gẹ́ bí Stripe, PayPal jẹ́ ohun tí a ń lò gan-an fún isanwo orí ayélujára, pàápàá jùlọ lórí àwọn oju-òpó wẹẹbu WordPress. Àpilẹ̀kọ yìí yóò tọ́ ọ sọ́nà lórí bí o ṣe lè lo PayPal gẹ́gẹ́ bí ọ̀nà isanwo tó wà lórí nẹ́tíwọọ̀kì rẹ.

Ṣàkíyèsí pé o ní láti ní **akọọlẹ PayPal Business** láti gba ẹ̀rí API tí a nílò fún ìṣepọ̀ yìí.

## Mímú PayPal ṣiṣẹ́ lórí nẹ́tíwọọ̀kì rẹ {#enabling-paypal-on-your-network}

Láti mú PayPal ṣiṣẹ́ gẹ́gẹ́ bí ọ̀nà isanwo tó wà lórí nẹ́tíwọọ̀kì rẹ, lọ sí taabu **Ultimate Multisite > Settings > Payments** kí o sì samisi apoti tó wà lẹ́gbẹ̀ẹ́ PayPal.

![Mímú PayPal ṣiṣẹ́ nínú àwọn ẹnu-ọna isanwo tó ń ṣiṣẹ́](/img/config/settings-payment-gateways.png)

## Lílo wizard ìṣètò tí a darí {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 ṣàfikún wizard ìṣètò PayPal tí a darí sí àwọn ètò ẹnu-ọna isanwo. Lẹ́yìn tí o bá mú PayPal ṣiṣẹ́, lo wizard lórí **Ultimate Multisite > Settings > Payments** láti yan bí o ṣe fẹ́ so ẹnu-ọna náà pọ̀ àti láti jẹ́rìí àwọn ẹ̀rí wo ni a ṣì nílò kí o tó fipamọ́.

Wizard náà ṣe àtìlẹ́yìn fún ipa ìṣètò méjì:

* **Ìfikún ẹ̀rí pẹ̀lú ọwọ́**: Lo ipa yìí nígbà tí o bá ti ní àwọn ẹ̀rí PayPal API, nígbà tí ìṣètò OAuth kò sí fún Account rẹ, tàbí nígbà tí o bá fẹ́ daakọ àwọn ẹ̀rí láti PayPal fúnra rẹ. Tẹ Orúkọ olumulo API, Ọ̀rọ̀ aṣínà API, àti Ìbuwọ́lu API sínú àwọn pápá PayPal, lẹ́yìn náà fipamọ́ àwọn ètò isanwo náà.
* **Ẹnu-ọna ìsopọ̀ OAuth**: Lo ipa yìí nìkan nígbà tí aṣayan OAuth bá wà tí ó sì ṣiṣẹ́ fún fífì sori ẹrọ rẹ. Wizard náà fi ìṣàn OAuth hàn lẹ́yìn àsíá ẹya kan, nítorí náà àwọn nẹ́tíwọọ̀kì láìsí àsíá náà ń bá a lọ láti lo àwọn pápá ìfikún ẹ̀rí pẹ̀lú ọwọ́.

Bí o kò bá rí aṣayan OAuth nínú wizard náà, parí ìṣàn ìfikún ẹ̀rí pẹ̀lú ọwọ́ ní ìsàlẹ̀. Ẹnu-ọna náà ń ṣiṣẹ́ pẹ̀lú àwọn ẹ̀rí PayPal Business API kan náà bí àwọn ìtúsílẹ̀ Ultimate Multisite 2.x ṣáájú.

## Gbigba àwọn ẹ̀rí PayPal API {#getting-the-paypal-api-credentials}

Nígbà tí PayPal bá ti ṣiṣẹ́ gẹ́gẹ́ bí ẹnu-ọna isanwo, o máa nílò láti kún àwọn pápá fún PayPal API **Orúkọ olumulo** , PayPal API **Ọ̀rọ̀ aṣínà** àti PayPal API **Ìbuwọ́lu**.

O lè gba èyí nípa wíwọlé sí Account PayPal [Live](https://www.paypal.com/home) tàbí [Sandbox](https://www.sandbox.paypal.com/home) rẹ.

(Rántí pé o lè lo **ipo sandbox** láti dán àwọn isanwo wò kí o sì rí bóyá a ti ṣètò ẹnu-ọna náà dáadáa. Kan tan apá tó bá a mu.)

![Àwọn pápá ẹ̀rí PayPal API àti bọtini yíyí ipo sandbox](/img/config/settings-payment-gateways.png)

Láti béèrè àwọn ẹ̀rí Ìbuwọ́lu API tàbí Certificate fún Account PayPal rẹ:

  1. Lọ sí [Àwọn Ètò Account](https://www.paypal.com/businessmanage/account/accountAccess) rẹ.

  2. Nínú apá **ìwọlé API**, tẹ **Ṣe imudojuiwọn**.
![Àwọn Ètò Account PayPal pẹ̀lú apá ìwọlé API](/img/config/settings-payment-gateways.png)

  3. Lábẹ́ **Ìṣepọ̀ NVP/SOAP API (Classic)** , tẹ **Ṣakoso àwọn ẹ̀rí API**.
![Ìṣepọ̀ PayPal NVP/SOAP API Ṣakoso àwọn ẹ̀rí API](/img/config/settings-payment-gateways.png)

     * Bí o bá ti dá Ìbuwọ́lu API tàbí Certificate sílẹ̀ tẹ́lẹ̀, a ó darí rẹ sí ojú-ewé kan níbi tí o ti lè rí àwọn ẹ̀rí rẹ.

     * _**Àkíyèsí:** Bí a bá ní kí o jẹ́rìí Account PayPal rẹ, tẹ̀lé àwọn ìtọ́nisọ́nà lórí-ìbojú._

  4. Yan _ọ̀kan_ nínú àwọn aṣayan wọ̀nyí, lẹ́yìn náà tẹ **Gbà kí o sì Fi ránṣẹ́**.

     * **Béèrè Ìbuwọ́lu API** – Yan fún ìjẹ́rìísí Ìbuwọ́lu API.

     * **Béèrè Certificate API** – Yan fún ìjẹ́rìísí Certificate API.

  5. PayPal dá àwọn ẹ̀rí API rẹ sílẹ̀ báyìí:
![Àwọn ẹ̀rí API tí PayPal dá sílẹ̀](/img/config/settings-payment-gateways.png)

     * **Àwọn ẹ̀rí Ìbuwọ́lu API** ní Orúkọ olumulo API, Ọ̀rọ̀ aṣínà API, àti Ìbuwọ́lu, èyí tí kì í tán àkókò. Àwọn iye wọ̀nyí wà ní fífarapamọ́ ní àiyipada fún ààbò àfikún. Tẹ **Fihan/Tọju** láti yí wọn tan àti pa. Nígbà tí o bá parí, tẹ **Ti parí**.

     * **Àwọn ẹ̀rí Certificate API** ní Orúkọ olumulo API, Ọ̀rọ̀ aṣínà API, àti Certificate, èyí tí yóò tán àkókò fúnra rẹ lẹ́yìn ọdún mẹ́ta. Tẹ **Ṣe igbasilẹ Certificate** láti fi API Certificate pamọ́ sí desktop rẹ.

Ìyẹn nìyẹn, ìṣepọ̀ isanwo PayPal rẹ ti pé!

Bí o bá ní ìbéèrè kankan nípa àwọn ètò PayPal, o lè tọ́ka sí [Ilé-iṣẹ́ Ìrànlọ́wọ́](https://www.paypal.com/br/smarthelp/home) PayPal.
