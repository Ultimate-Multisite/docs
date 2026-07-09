---
title: Pag-set Up ng PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Pag-set Up ng PayPal Gateway (v2) {#setting-up-the-paypal-gateway-v2}

_**MAHALAGANG PAALALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Maaari kang mag-activate ng hanggang apat na paraan ng pagbabayad sa ating payment settings page: Stripe, Stripe Checkout, PayPal at Manual. Sa artikulong ito, ipapakita namin kung paano makikipag-integrate gamit ang **PayPal**.

Katulad ng Stripe, malawakang ginagamit din ng PayPal para sa online payments, lalo na sa mga WordPress websites. Gabayan ka ng artikulong ito kung paano gamitin ang PayPal bilang isang payment method na available sa iyong network.

Tandaan na kailangan mo ng **PayPal Business account** para makuha ang API credential na kailangan para sa integrasyong ito.

## Pag-enable ng PayPal sa iyong network {#enabling-paypal-on-your-network}

Para i-enable ang PayPal bilang isang available na payment method sa iyong network, pumunta sa **Ultimate Multisite > Settings > Payments** tab at lagyan ng tsek (tick) ang kahon sa tabi ng PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Paggamit ng guided setup wizard {#using-the-guided-setup-wizard}

Ang Ultimate Multisite 2.10.0 ay nagdaragdag ng isang guided PayPal setup wizard sa payment gateway settings. Pagkatapos mong i-enable ang PayPal, gamitin ang wizard sa **Ultimate Multisite > Settings > Payments** para piliin kung paano mo gustong ikonekta ang gateway at kumpirmahin kung aling mga credential ang kailangan pa bago mag-save.

Sinusuportahan ng wizard ang dalawang setup path:

* **Manual credential entry**: Gamitin ang path na ito kapag mayroon ka nang PayPal API credentials, kapag walang available na OAuth setup para sa iyong account, o kapag mas gusto mong kopyahin ang mga kredensyal mula mismo sa PayPal. Ilagay ang API Username, API Password, at API Signature sa mga field ng PayPal, pagkatapos ay i-save ang payment settings.
* **OAuth connection gate**: Gamitin lamang ang path na ito kung available at naka-enable ang opsyon na OAuth para sa iyong install. Ipinapakita ng wizard ang daloy ng OAuth sa likod ng isang feature flag, kaya ang mga network na walang flag ay magpapatuloy sa paggamit ng manual credential entry fields.

Kung hindi mo nakikita ang opsyon na OAuth sa wizard, kumpletuhin ang manual credential entry flow sa ibaba. Gumagana ang gateway gamit ang parehong PayPal Business API credentials mula sa mga naunang bersyon ng Ultimate Multisite 2.x.

## Pagkuha ng PayPal API credentials {#getting-the-paypal-api-credentials}

Kapag naka-enable ka na bilang payment gateway sa PayPal, kailangan mong punan ang mga field para sa **Username** ng PayPal API, **Password** ng PayPal API, at **Signature** ng PayPal API.

Maaari mo itong makuha sa pamamagitan ng pag-log in sa iyong [Live](https://www.paypal.com/home) o [Sandbox](https://www.sandbox.paypal.com/home) account.

(Tandaan na maaari kang gumamit ng **sandbox mode** para subukan ang mga bayad at makita kung tama ang setup ng gateway. I-toggle lang ang kaukulang seksyon.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Para humiling ng API Signature o Certificate credentials para sa iyong PayPal account:

  1. Pumunta sa iyong [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Sa seksyong **API access**, i-click ang **Update**.

3. Sa ilalim ng **NVP/SOAP API integration (Classic)**, i-click ang **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Kung mayroon ka nang na-generate na API Signature o Certificate, i-redirect ka sa isang pahina kung saan maaari mong mahanap ang iyong mga kredensyal.

     * _**Tandaan:** Kung hihilingin sa iyo na i-verify ang iyong PayPal account, sundin ang mga tagubilin sa screen._

  4. Pumili ng _isa_ sa mga sumusunod na opsyon, pagkatapos ay i-click ang **Agree and Submit**.

     * **Request API Signature** – Piliin para sa API Signature authentication.

     * **Request API Certificate** – Piliin para sa API Certificate authentication.

  5. Ang PayPal ay gagawa ng iyong mga API credentials sa ganitong paraan:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** ay kinabibilangan ng API Username, API Password, at Signature, na hindi tumatagal (does not expire). Ang mga halagang ito ay nakatago sa default para sa dagdag na seguridad. I-click ang **Show/Hide** para i-toggle ito nang on at off. Kapag tapos na, i-click ang **Done**.

     * **API Certificate credentials** ay kinabibilangan ng API Username, API Password, at Certificate, na awtomatikong mag-e-expire pagkatapos ng tatlong taon. I-click ang **Download Certificate** para i-save ang API Certificate sa iyong desktop.

Tapos na, kumpleto na ang iyong PayPal payment integration!

Kung mayroon kang anumang tanong tungkol sa mga setting ng PayPal, maaari kang tumutukoy sa [Help Center](https://www.paypal.com/br/smarthelp/home) ng PayPal.
