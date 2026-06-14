---
title: Gukora Uburyo bwo gukoresha PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Gukoresha Impamukono ya PayPal (v2)

_**Uruko Muhereye: Iyi ndokuriye irere ku Ultimate Multisite version 2.x.**_

Wowe wumva uburyo bwo gukoresha uburyo bwo gukoresha impamukono itatu cyangwa itatu mu rubuga rwa gahunda y'impamukono: Stripe, Stripe Checkout, PayPal n'Uburyo bw'ibindi. Mu gihe cyacu, twagushyira uburyo bwo gukoresha **PayPal**.

Nko Stripe, PayPal ni ikoranwa cyane ku gukoresha imihengo mu ntangiriro (online payments), cyane ku websites za WordPress. Iyi ndokuriye izakugence uko wumva uburyo bwo gukoresha PayPal nk'impamukono itarimo ku muryango wawe.

Uruko: Ukeneye uba na **PayPal Business account** kugira ngo uherehe API credential ikoreshwa mu gukorera iki gukoresha.

## Gukoresha PayPal ku muryango wanyu

Kugira ngo uva PayPal nk'impamukono itarimo ku muryango wawe, gukora ibi: soba **Ultimate Multisite > Settings > Payments** ugenda kandi ukorera (tick) igice cy'PayPal.

![Gukoresha PayPal mu buryo bwo gukoresha impamukono zikoreshwa](/img/config/settings-payment-gateways.png)

## Gukoresha uburyo bwo gutangira (guided setup wizard)

Ultimate Multisite 2.10.0 yagushyiramo uburyo bwo gutangira PayPal cyangwa gukora (setup wizard) mu buryo bwo gukoresha impamukono. Nyuma yo gukora ijiye PayPal, gukoresha uburyo bwo gutangira ku **Ultimate Multisite > Settings > Payments** kugira ngo wumve uko wumva uburyo bwo gukorera gateway kandi ukwibuka ko hari iki cyangwa ibindi byo mu gihe cy'ubwumvikane (credentials) bishobora guhindurwa mbere y'uko ufungura.

Uburyo bwo gutangira bushobora gukoresha uburyo bwo gutangira (setup paths) itanu:

* **Kumenya uburyo bwo gukoresha amakuru (Manual credential entry)**: Usa uburyo uyu hejuru iyo wumuri ya PayPal API, iyo iyo iyo OAuth setup ntabwo yariwe kuri account yawe, cyangwa iyo ugiye gukoresha amakuru ku muntu wowe. Gukoresha API Username, API Password, na API Signature mu byiciro bya PayPal, mbere yugera (save) ibyo mikuru byo gukoresha.
* **Gusobanuro rwo gukoresha OAuth connection gate**: Usa uburyo uyu iyo uyu gusa iyo iyo ugiye gukoresha OAuth iyo ari mu gihe cyangwa wari wumuri yose. Icyemezo (wizard) cyonyeka uburyo bwo OAuth mu gihe cyangwa mu feature flag, no ntabwo zuba zikoresha amakuru ku muntu wowe zikoresha byiciro bya manual credential entry.

Niba nta OAuth option ufite mu wizard, gukemura uburyo bwo gukoresha amakuru ku muntu wowe (manual credential entry flow) uyu hejuru. Igihe cyangwa igikorwa cyo gukoresha amakuru kigera n'amakuru y'Umuco wa PayPal Business API mu gihe cyo gukora Ultimate Multisite 2.x.

## Gukorera amakuru ya PayPal API

Icyiza iyo ugiye gukoresha PayPal nk'umugambi w'ubwoko bwo gukoresha (payment gateway), uza gutegura byiciro bya **Username** ya PayPal API, **Password** ya PayPal API na **Signature** ya PayPal API.

Ushobora kugera ibyo bishobora ku gukoresha account yawe ya [Live](https://www.paypal.com/home) cyangwa [Sandbox](https://www.sandbox.paypal.com/home).

(Mugisha ko uza gukoresha **sandbox mode** kugira ngo utera amafaranga kandi wumve niba umugambi wowe wari wumwe mu gihe cyo gukora. Ugiye gukoresha igice cyangwa se.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Kugira ngo ugaragare (request) API Signature cyangwa amakuru y'Certificate ku account yawe ya PayPal:

  1. Gukoresha [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Mu gihe cyo **API access**, gukoresha **Update**.

3. Hifashish **NVP/SOAP API integration (Classic)**, click **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Mwari wumwe nshya w'API Signature cyangwa Certificate ugiye mu cyereka aho uza kumenya amakuru yawe.

     * _**Urugero:** Niba ubushobozi bwo gukoresha PayPal bugaragaza ko ugomba gufashishamo aka kanya, ugomba gukora ibyo ubyumva kuri écran._

  4. Shobora kugera ku mwe mu byo mu kera, mbere yego **Agree and Submit**.

     * **Request API Signature** – Shobora gukoreshwa mu gihe cyo gutanga API Signature authentication.

     * **Request API Certificate** – Shobora gukoreshwa mu gihe cyo gutanga API Certificate authentication.

  5. PayPal igira amakuru yawe y'API nk'uko:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** zishobora gukoreshwa n'API Username, API Password, no Signature, kandi nta cyo kigira umwuka (does not expire). Iyo mwe mu gihe cyo gutanga amakuru yacu, bishobora guhagarwa cyangwa guhagarwa (hidden by default) kugira ngo ubwumvikane. Shobora gukoresha **Show/Hide** kugira ngo ubyumve cyangwa utagire. Iyo umwe wari wumvikane, ugomba gukora **Done**.

     * **API Certificate credentials** zishobora gukoreshwa n'API Username, API Password, no Certificate, kandi zikwibuka mu gihe cyo gutanga (expires automatically) nyuma y'imyaka itatu. Shobora gukoresha **Download Certificate** kugira ngo ubyumve API Certificate yawe ku desktop yawe.

Iyo ni ibyo, uburyo bwo gukoresha PayPal payment wari wumvikane!

Niba hari ibyo ushaka kwemeza kuri PayPal settings, uza kumenya mu [Help Center](https://www.paypal.com/br/smarthelp/home) ya PayPal.
