---
title: Pag-set Up ng PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Pagse-set Up ng PayPal Gateway (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Maaari kang mag-activate ng hanggang apat na paraan ng pagbabayad sa aming payment settings page: Stripe, Stripe Checkout, PayPal at Manual. Sa artikulong ito, makikita natin kung paano mag-integrate sa **PayPal**.

Katulad ng Stripe, ang PayPal ay malawakang ginagamit para sa online na pagbabayad, lalo na sa mga WordPress website. Gagabayan ka ng artikulong ito kung paano gamitin ang PayPal bilang paraan ng pagbabayad na available sa iyong network.

Tandaan na kailangan mong magkaroon ng **PayPal Business account** upang makuha ang API credential na kinakailangan para sa integration na ito.

## Pag-enable ng PayPal sa iyong network

Upang i-enable ang PayPal bilang available na paraan ng pagbabayad sa iyong network, pumunta sa **Ultimate Multisite > Settings > Payments** tab at lagyan ng tsek ang kahon sa tabi ng PayPal.

![Pag-enable ng PayPal sa active payment gateways](/img/config/settings-payment-gateways.png)

## Pagkuha ng PayPal API credentials

Kapag na-enable na ang PayPal bilang payment gateway, kakailanganin mong punan ang mga field para sa PayPal API **Username**, PayPal API **Password** at PayPal API **Signature**.

Makukuha mo ito sa pamamagitan ng pag-log in sa iyong PayPal [Live](https://www.paypal.com/home) o [Sandbox](https://www.sandbox.paypal.com/home) account.

(Tandaan na maaari mong gamitin ang **sandbox mode** upang subukan ang mga pagbabayad at tingnan kung tama ang setup ng gateway. I-toggle lang ang kaukulang seksyon.)

![Mga field ng PayPal API credentials at sandbox mode toggle](/img/config/settings-payment-gateways.png)

Upang humiling ng API Signature o Certificate credentials para sa iyong PayPal account:

  1. Pumunta sa iyong [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Sa seksyong **API access**, i-click ang **Update**.  
![PayPal Account Settings na may API access section](/img/config/settings-payment-gateways.png)

  3. Sa ilalim ng **NVP/SOAP API integration (Classic)**, i-click ang **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Kung nakagawa ka na ng API Signature o Certificate, ire-redirect ka sa isang page kung saan makikita mo ang iyong credentials.

     * _**Paalala:** Kung hihilingin sa iyo na i-verify ang iyong PayPal account, sundin ang mga tagubilin sa screen._

  4. Pumili ng _isa_ sa mga sumusunod na opsyon, pagkatapos ay i-click ang **Agree and Submit**.

     * **Request API Signature** – Piliin para sa API Signature authentication.

     * **Request API Certificate** – Piliin para sa API Certificate authentication.

  5. Gagawin ng PayPal ang iyong API credentials tulad ng sumusunod:  
![Mga ginawang PayPal API credentials](/img/config/settings-payment-gateways.png)

     * Ang **API Signature credentials** ay kasama ang API Username, API Password, at Signature, na hindi mag-e-expire. Ang mga value na ito ay nakatago bilang default para sa dagdag na seguridad. I-click ang **Show/Hide** upang ipakita o itago ang mga ito. Kapag tapos na, i-click ang **Done**.

     * Ang **API Certificate credentials** ay kasama ang API Username, API Password, at Certificate, na awtomatikong mag-e-expire pagkatapos ng tatlong taon. I-click ang **Download Certificate** upang i-save ang API Certificate sa iyong desktop.

Iyon lang, kumpleto na ang iyong PayPal payment integration!

Kung mayroon kang mga tanong tungkol sa mga setting ng PayPal, maaari kang sumangguni sa [Help Center](https://www.paypal.com/br/smarthelp/home) ng PayPal.
