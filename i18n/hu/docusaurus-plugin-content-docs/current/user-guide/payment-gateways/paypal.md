---
title: A PayPal beállítása
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# A PayPal fizetési kapu beállítása (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

A fizetési beállítások oldalon akár négy fizetési módot is aktiválhatsz: Stripe, Stripe Checkout, PayPal és Manuális. Ebben a cikkben a **PayPal** integrációját mutatjuk be.

A Stripe-hoz hasonlóan a PayPal is széles körben elterjedt az online fizetéseknél, különösen WordPress weboldalakon. Ez a cikk végigvezet azon, hogyan teheted elérhetővé a PayPalt fizetési módként a hálózatodon.

Fontos, hogy **PayPal Business fiókra** van szükséged az integrációhoz szükséges API hitelesítő adatok megszerzéséhez.

## A PayPal engedélyezése a hálózatodon

Ha szeretnéd engedélyezni a PayPalt fizetési módként a hálózatodon, menj az **Ultimate Multisite > Settings > Payments** fülre, és pipáld be a PayPal melletti jelölőnégyzetet.

![A PayPal engedélyezése az aktív fizetési kapuk között](/img/config/settings-payment-gateways.png)

## A PayPal API hitelesítő adatok beszerzése

Miután a PayPal engedélyezve van fizetési kapuként, ki kell töltened a PayPal API **Username**, PayPal API **Password** és PayPal API **Signature** mezőket.

Ezeket az adatokat a PayPal [Éles](https://www.paypal.com/home) vagy [Sandbox](https://www.sandbox.paypal.com/home) fiókodba belépve szerezheted meg.

(Ne feledd, hogy a **sandbox módot** használhatod a fizetések tesztelésére, és annak ellenőrzésére, hogy a fizetési kapu megfelelően van-e beállítva. Csak kapcsold be a megfelelő szakaszt.)

![PayPal API hitelesítő adatok mezői és a sandbox mód kapcsoló](/img/config/settings-payment-gateways.png)

API aláírás vagy tanúsítvány hitelesítő adatok igényléséhez a PayPal fiókodhoz:

  1. Menj a [Fiókbeállítások](https://www.paypal.com/businessmanage/account/accountAccess) oldalra.

  2. Az **API access** szakaszban kattints az **Update** gombra.  
![PayPal Fiókbeállítások az API access szakasszal](/img/config/settings-payment-gateways.png)

  3. Az **NVP/SOAP API integration (Classic)** alatt kattints a **Manage API credentials** lehetőségre.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ha már generáltál API aláírást vagy tanúsítványt, egy olyan oldalra irányít át, ahol megtalálod a hitelesítő adataidat.

     * _**Megjegyzés:** Ha a rendszer arra kér, hogy erősítsd meg a PayPal fiókodat, kövesd a képernyőn megjelenő utasításokat._

  4. Válaszd ki az alábbi lehetőségek _egyikét_, majd kattints az **Agree and Submit** gombra.

     * **Request API Signature** – Válaszd ezt az API aláírás hitelesítéshez.

     * **Request API Certificate** – Válaszd ezt az API tanúsítvány hitelesítéshez.

  5. A PayPal az alábbiak szerint generálja az API hitelesítő adataidat:  
![A PayPal által generált API hitelesítő adatok](/img/config/settings-payment-gateways.png)

     * Az **API Signature hitelesítő adatok** tartalmazzák az API Username-et, API Password-öt és az Signature-t, amelyek nem járnak le. Ezek az értékek alapértelmezés szerint rejtettek a nagyobb biztonság érdekében. Kattints a **Show/Hide** gombra a megjelenítésükhöz vagy elrejtésükhöz. Ha végeztél, kattints a **Done** gombra.

     * Az **API Certificate hitelesítő adatok** tartalmazzák az API Username-et, API Password-öt és a Certificate-et, amely három év után automatikusan lejár. Kattints a **Download Certificate** gombra az API tanúsítvány asztalra mentéséhez.

Ennyi az egész, a PayPal fizetési integráció kész!

Ha bármilyen kérdésed van a PayPal beállításokkal kapcsolatban, látogass el a PayPal [Súgóközpontjába](https://www.paypal.com/br/smarthelp/home).
