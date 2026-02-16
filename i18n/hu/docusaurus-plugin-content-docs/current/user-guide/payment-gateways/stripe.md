---
title: A Stripe beállítása
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# A Stripe fizetési kapu beállítása (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

A fizetési beállítások oldalán legfeljebb négy fizetési módot aktiválhatsz: Stripe, Stripe Checkout, PayPal és Manuális. Ebben a cikkben a **Stripe** integrációját mutatjuk be.

## A Stripe engedélyezése

Ha engedélyezni szeretnéd a Stripe-ot fizetési kapuként a hálózatodon, navigálj az **Ultimate Multisite > Beállítások > Fizetések** menüpontra, és kapcsold be a **Stripe** vagy a **Stripe Checkout** melletti kapcsolót az Aktív fizetési kapuk részben.

![A Stripe engedélyezése az aktív fizetési kapuk között](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Ezzel a módszerrel a pénztár folyamat során egy mező jelenik meg a bankkártyaszám megadására.

![Stripe beágyazott bankkártya mező a pénztárnál](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Ezzel a módszerrel a vásárló átirányításra kerül a Stripe Checkout oldalára a fizetés során.

![Stripe Checkout átirányítási oldal a pénztárnál](/img/config/settings-payment-gateways.png)

A Stripe API kulcsok beszerzése

Miután a Stripe engedélyezve van fizetési kapuként, ki kell töltened a **Stripe Publishable Key** és a **Stripe Secret Key** mezőket. Ezeket a Stripe fiókodba bejelentkezve szerezheted be.

_**Megjegyzés:** aktiválhatod a **Sandbox módot**, hogy teszteld, működik-e a fizetési mód._

![Stripe API kulcs mezők és sandbox mód kapcsoló](/img/config/settings-payment-gateways.png)

A Stripe vezérlőpulton kattints a jobb felső sarokban található **Developers** gombra, majd a bal oldali menüben az **API Keys** elemre.

![Stripe vezérlőpult Developers része az API Keys-szel](/img/config/settings-payment-gateways.png)

Használhatsz **Test Data** módot (hogy teszteld az integráció működését az éles oldalon) vagy sem. Ennek módosításához kapcsold át a **Viewing test data** kapcsolót.

![Stripe Viewing test data kapcsoló](/img/config/settings-payment-gateways.png)

Másold ki a **Publishable key** és a **Secret key** értékét a **Token** oszlopból, és illeszd be az Ultimate Multisite Stripe Gateway mezőibe. Ezután kattints a **Save Changes** gombra.

![Stripe publishable és secret key értékek](/img/config/settings-payment-gateways.png)

![Stripe kulcsok beillesztése az Ultimate Multisite beállításokba](/img/config/settings-payment-gateways.png)

## A Stripe Webhook beállítása

A Stripe webhook eseményeket küld, amelyek értesítik az Ultimate Multisite-ot minden alkalommal, amikor valamilyen esemény történik a **Stripe fiókodban**.

Kattints a **Developers** menüpontra, majd válaszd a **Webhooks** elemet a bal oldali menüből. Ezután a jobb oldalon kattints az **Add endpoint** gombra.

![Stripe Webhooks oldal az Add endpoint gombbal](/img/config/settings-payment-gateways.png)

Szükséged lesz egy **Endpoint URL**-re. Az Ultimate Multisite automatikusan létrehozza az endpoint URL-t, amelyet a **Webhook Listener URL** mező alatt találsz az **Ultimate Multisite Stripe Gateway** részben.

![Webhook Listener URL mező a Stripe kapu beállításokban](/img/config/settings-payment-gateways.png)

**Másold** ki az endpoint URL-t, és **illeszd** be a Stripe **Endpoint URL** mezőjébe.

![Az endpoint URL beillesztése a Stripe webhook beállításba](/img/config/settings-payment-gateways.png)

A következő lépés egy **Event** kiválasztása. Ennél a lehetőségnél egyszerűen csak jelöld be a **Select all events** jelölőnégyzetet, és kattints az **Add events** gombra. Ezután kattints az **Add Endpoint** gombra a módosítások mentéséhez.

![Az összes esemény kiválasztása és a Stripe endpoint hozzáadása](/img/config/settings-payment-gateways.png)

Ennyi az egész, a Stripe fizetési integráció kész!
