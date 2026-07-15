---
title: Pag-set up ng PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Pag-set Up ng PayPal Gateway (v2)

_**MAHALAGANG TALA: Tumutukoy ang artikulong ito sa Ultimate Multisite version 2.x.**_

Maaari kang mag-activate ng hanggang apat na paraan ng pagbabayad sa aming pahina ng mga setting ng pagbabayad: Stripe, Stripe Checkout, PayPal at Manual. Sa artikulong ito, titingnan natin kung paano mag-integrate sa **PayPal**.

Tulad ng Stripe, malawakang ginagamit ang PayPal para sa mga online na pagbabayad, lalo na sa mga WordPress website. Gagabayan ka ng artikulong ito kung paano gamitin ang PayPal bilang paraan ng pagbabayad na available sa iyong network.

Tandaan na kailangan mong magkaroon ng **PayPal Business account** para makuha ang API credential na kailangan para sa integration na ito.

## Pag-enable ng PayPal sa iyong network {#enabling-paypal-on-your-network}

Para i-enable ang PayPal bilang available na paraan ng pagbabayad sa iyong network, pumunta sa tab na **Ultimate Multisite > Settings > Payments** at lagyan ng tsek ang kahon sa tabi ng PayPal.

![Pag-enable ng PayPal sa mga aktibong payment gateway](/img/config/settings-payment-gateways.png)

## Paggamit ng guided setup wizard {#using-the-guided-setup-wizard}

Nagdaragdag ang Ultimate Multisite 2.10.0 ng guided PayPal setup wizard sa mga setting ng payment gateway. Pagkatapos mong i-enable ang PayPal, gamitin ang wizard sa **Ultimate Multisite > Settings > Payments** para piliin kung paano mo gustong ikonekta ang gateway at kumpirmahin kung aling mga credential ang kailangan pa bago i-save.

Sinusuportahan ng wizard ang dalawang setup path:

* **Manwal na paglagay ng credential**: Gamitin ang path na ito kapag mayroon ka nang PayPal API credentials, kapag hindi available ang OAuth setup para sa iyong account, o kapag mas gusto mong ikaw mismo ang kumopya ng credentials mula sa PayPal. Ilagay ang API Username, API Password, at API Signature sa mga PayPal field, pagkatapos ay i-save ang mga setting ng pagbabayad.
* **OAuth connection gate**: Gamitin lang ang path na ito kapag available at enabled ang OAuth option para sa iyong install. Ipinapakita ng wizard ang OAuth flow sa likod ng isang feature flag, kaya ang mga network na walang flag ay patuloy na gumagamit ng mga field para sa manwal na paglagay ng credential.

Kung hindi mo nakikita ang OAuth option sa wizard, kumpletuhin ang manual credential entry flow sa ibaba. Gumagana ang gateway gamit ang parehong PayPal Business API credentials gaya ng mga naunang Ultimate Multisite 2.x release.

## Pagkuha ng PayPal API credentials {#getting-the-paypal-api-credentials}

Kapag na-enable na ang PayPal bilang payment gateway, kakailanganin mong punan ang mga field para sa PayPal API **Username** , PayPal API **Password** at PayPal API **Signature**.

Makukuha mo ito sa pamamagitan ng pag-log in sa iyong PayPal [Live](https://www.paypal.com/home) o [Sandbox](https://www.sandbox.paypal.com/home) account.

(Tandaan na maaari mong gamitin ang **sandbox mode** para subukan ang mga pagbabayad at makita kung tama ang pagkaka-setup ng gateway. I-toggle lang sa kaukulang seksyon.)

![Mga field ng PayPal API credentials at toggle ng sandbox mode](/img/config/settings-payment-gateways.png)

Para humiling ng API Signature o Certificate credentials para sa iyong PayPal account:

  1. Pumunta sa iyong [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Sa seksyong **API access**, i-click ang **Update**.
![PayPal Account Settings na may seksyong API access](/img/config/settings-payment-gateways.png)

  3. Sa ilalim ng **NVP/SOAP API integration (Classic)** , i-click ang **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Kung nakagawa ka na ng API Signature o Certificate, ire-redirect ka sa isang pahina kung saan mo mahahanap ang iyong credentials.

     * _**Tala:** Kung hihilingin sa iyong i-verify ang iyong PayPal account, sundin ang mga tagubiling nasa screen._

  4. Pumili ng _isa_ sa mga sumusunod na opsyon, pagkatapos ay i-click ang **Agree and Submit**.

     * **Request API Signature** – Piliin para sa API Signature authentication.

     * **Request API Certificate** – Piliin para sa API Certificate authentication.

  5. Gagawa ang PayPal ng iyong API credentials gaya ng sumusunod:
![Nabuong PayPal API credentials](/img/config/settings-payment-gateways.png)

     * Kasama sa **API Signature credentials** ang API Username, API Password, at Signature, na hindi nag-e-expire. Nakatago ang mga value na ito bilang default para sa dagdag na seguridad. I-click ang **Show/Hide** para i-toggle ang mga ito on at off. Kapag tapos na, i-click ang **Done**.

     * Kasama sa **API Certificate credentials** ang API Username, API Password, at Certificate, na awtomatikong mag-e-expire pagkalipas ng tatlong taon. I-click ang **Download Certificate** para i-save ang API Certificate sa iyong desktop.

Iyon lang, kumpleto na ang iyong PayPal payment integration!

Kung mayroon kang anumang tanong tungkol sa mga setting ng PayPal, maaari kang sumangguni sa [Help Center](https://www.paypal.com/br/smarthelp/home) ng PayPal.
