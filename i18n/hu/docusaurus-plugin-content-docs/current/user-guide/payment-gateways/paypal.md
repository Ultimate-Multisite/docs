---
title: PayPal beállítása
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# A PayPal Gateway beállítása (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Legfeljebb négy fizetési módot aktiválhatsz a fizetési beállítások oldalunkon: Stripe, Stripe Checkout, PayPal és Manual. Ebben a cikkben megnézzük, hogyan integrálható a **PayPal**.

A Stripe-hoz hasonlóan a PayPal is széles körben használt online fizetésekhez, különösen WordPress webhelyeken. Ez a cikk végigvezet azon, hogyan használhatod a PayPalt a hálózatodon elérhető fizetési módként.

Vedd figyelembe, hogy az integrációhoz szükséges API-hitelesítő adatok megszerzéséhez **PayPal Business account** szükséges.

## A PayPal engedélyezése a hálózatodon {#enabling-paypal-on-your-network}

Ahhoz, hogy a PayPal elérhető fizetési módként engedélyezve legyen a hálózatodon, menj az **Ultimate Multisite > Settings > Payments** fülre, és jelöld be a PayPal melletti négyzetet.

![A PayPal engedélyezése az aktív fizetési gatewayek között](/img/config/settings-payment-gateways.png)

## Az irányított beállítási varázsló használata {#using-the-guided-setup-wizard}

Az Ultimate Multisite 2.10.0 irányított PayPal-beállítási varázslót ad a fizetési gateway beállításaihoz. Miután engedélyezted a PayPalt, használd a varázslót az **Ultimate Multisite > Settings > Payments** alatt annak kiválasztásához, hogyan szeretnéd csatlakoztatni a gatewayt, és annak megerősítéséhez, hogy mely hitelesítő adatok szükségesek még a mentés előtt.

A varázsló két beállítási útvonalat támogat:

* **Hitelesítő adatok kézi megadása**: Ezt az útvonalat akkor használd, ha már rendelkezel PayPal API-hitelesítő adatokkal, ha az OAuth-beállítás nem érhető el az Accountodhoz, vagy ha inkább saját magad szeretnéd kimásolni a hitelesítő adatokat a PayPalból. Add meg az API Username, API Password és API Signature értékeket a PayPal mezőkben, majd mentsd a fizetési beállításokat.
* **OAuth-kapcsolati kapu**: Ezt az útvonalat csak akkor használd, ha az OAuth opció elérhető és engedélyezve van a telepítésedhez. A varázsló az OAuth folyamatot feature flag mögött jeleníti meg, így a flag nélküli hálózatok továbbra is a kézi hitelesítőadat-mezőket használják.

Ha nem látod az OAuth opciót a varázslóban, végezd el az alábbi kézi hitelesítőadat-megadási folyamatot. A gateway ugyanazokkal a PayPal Business API-hitelesítő adatokkal működik, mint a korábbi Ultimate Multisite 2.x kiadások.

## A PayPal API-hitelesítő adatok beszerzése {#getting-the-paypal-api-credentials}

Miután a PayPal engedélyezve lett fizetési gatewayként, ki kell töltened a PayPal API **Username**, PayPal API **Password** és PayPal API **Signature** mezőket.

Ezt úgy szerezheted meg, hogy bejelentkezel a PayPal [Live](https://www.paypal.com/home) vagy [Sandbox](https://www.sandbox.paypal.com/home) Accountodba.

(Ne feledd, hogy a **sandbox mode** használatával tesztelheted a fizetéseket, és ellenőrizheted, hogy a gateway megfelelően van-e beállítva. Csak kapcsold be a megfelelő szakaszban.)

![PayPal API-hitelesítő adatmezők és sandbox mode kapcsoló](/img/config/settings-payment-gateways.png)

API Signature vagy Certificate hitelesítő adatok igényléséhez a PayPal Accountodhoz:

  1. Lépj az [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) oldalra.

  2. Az **API access** szakaszban kattints az **Update** gombra.
![PayPal Account Settings az API access szakasszal](/img/config/settings-payment-gateways.png)

  3. Az **NVP/SOAP API integration (Classic)** alatt kattints a **Manage API credentials** lehetőségre.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ha már létrehoztál API Signature-t vagy Certificate-et, át leszel irányítva egy oldalra, ahol megtalálhatod a hitelesítő adataidat.

     * _**Megjegyzés:** Ha a PayPal Accountod ellenőrzésére kérnek, kövesd a képernyőn megjelenő utasításokat._

  4. Válassz ki _egyet_ az alábbi lehetőségek közül, majd kattints az **Agree and Submit** gombra.

     * **Request API Signature** – Válaszd az API Signature hitelesítéshez.

     * **Request API Certificate** – Válaszd az API Certificate hitelesítéshez.

  5. A PayPal a következőképpen hozza létre az API-hitelesítő adataidat:
![PayPal által létrehozott API-hitelesítő adatok](/img/config/settings-payment-gateways.png)

     * Az **API Signature credentials** tartalmaz egy API Username, API Password és Signature értéket, amely nem jár le. Ezek az értékek alapértelmezetten el vannak rejtve a nagyobb biztonság érdekében. Kattints a **Show/Hide** lehetőségre a megjelenítésük vagy elrejtésük váltásához. Ha végeztél, kattints a **Done** gombra.

     * Az **API Certificate credentials** tartalmaz egy API Username, API Password és Certificate értéket, amely három év után automatikusan lejár. Kattints a **Download Certificate** gombra az API Certificate asztalodra mentéséhez.

Ennyi, a PayPal fizetési integrációd elkészült!

Ha bármilyen kérdésed van a PayPal beállításaival kapcsolatban, hivatkozhatsz a PayPal [Help Center](https://www.paypal.com/br/smarthelp/home) oldalára.
