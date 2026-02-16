---
title: Fizetés fogadása
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# Fizetések fogadása (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Az Ultimate Multisite beépített tagság- és számlázási rendszerrel rendelkezik. A számlázási rendszer működéséhez integráltuk az e-kereskedelemben leggyakrabban használt fizetési kapukat. Az Ultimate Multisite alapértelmezett fizetési kapui a _Stripe_, a _PayPal_ és a Manuális fizetés. Emellett a _WooCommerce_, a _GoCardless_ és a _Payfast_ használatával is fogadhatsz fizetéseket a megfelelő bővítmények telepítésével.

## Alapbeállítások

Ezeket a fizetési kapukat az Ultimate Multisite fizetési beállításai alatt konfigurálhatod. Ehhez navigálj az **Ultimate Multisite menü > Beállítások > Fizetések** menüpontra.

![Fizetési beállítások oldal az Ultimate Multisite-ban](/img/config/settings-payment-gateways.png)

Mielőtt beállítanád a fizetési kaput, nézd át az alábbi alapvető fizetési beállításokat:

**Automatikus megújítás kényszerítése:** Ez biztosítja, hogy a fizetés automatikusan ismétlődjön minden számlázási ciklus végén, a felhasználó által választott számlázási gyakoriságnak megfelelően.

![Automatikus megújítás kényszerítése kapcsoló](/img/config/settings-payment-gateways.png)

**Próbaidőszak engedélyezése fizetési mód nélkül:** Ha ez az opció be van kapcsolva, az ügyfélnek nem kell megadnia pénzügyi adatokat a regisztráció során. Erre csak a próbaidőszak lejártával lesz szükség.

![Próbaidőszak engedélyezése fizetési mód nélkül kapcsoló](/img/config/settings-payment-gateways.png)

**Számla küldése a fizetés visszaigazolásakor:** Ezzel az opcióval eldöntheted, hogy küldjön-e a rendszer számlát a fizetés után. Megjegyzés: a felhasználók a saját aloldal vezérlőpultjukon hozzáférhetnek a fizetési előzményeikhez. Ez az opció nem vonatkozik a Manuális kapura.

![Számla küldése a fizetés visszaigazolásakor kapcsoló](/img/config/settings-payment-gateways.png)

**Számlaszámozási séma:** Itt választhatsz fizetési referenciakód vagy sorszámozási séma között. Ha a fizetési referenciakódot választod a számlákhoz, nincs szükség további konfigurációra. Ha a sorszámozási sémát választod, be kell állítanod a **következő számlaszámot** (Ez a szám lesz a rendszer által generált következő számla száma. Minden új számla létrehozásakor eggyel növekszik. Módosíthatod és mentheted, hogy visszaállítsd a számlaszámozást egy adott értékre) és a **számlaszám előtagot.**

![Számlaszámozási séma kiválasztása](/img/config/settings-payment-gateways.png)

![Sorszámozási és előtag beállítások](/img/config/settings-payment-gateways.png)

## Hol találhatók a fizetési kapuk:

A fizetési kapukat ugyanazon az oldalon állíthatod be (**Ultimate Multisite > Beállítások > Fizetések**). Az **aktív fizetési kapuk** alatt láthatod a következőket: _Stripe_, _Stripe Checkout_, _PayPal_ és _Manuális_.

![Aktív fizetési kapuk listája](/img/config/settings-payment-gateways.png)

Minden fizetési kapuhoz külön cikket készítettünk, amely végigvezet a beállítás lépésein. Ezeket az alábbi linkeken találod.

**A Stripe kapu beállítása**

**A PayPal kapu beállítása**

**Manuális fizetések beállítása**

Ha a _WooCommerce_, a _GoCardless_ vagy a _Payfast_ fizetési kaput szeretnéd használni, **telepítened és konfigurálnod kell a megfelelő bővítményeket**.

### A WooCommerce bővítmény telepítése:

Tisztában vagyunk vele, hogy a _Stripe_ és a _PayPal_ egyes országokban nem érhető el, ami korlátozza az Ultimate Multisite felhasználókat a bővítmény hatékony használatában. Ezért készítettünk egy bővítményt a _WooCommerce_ integrálásához, amely egy igen népszerű e-kereskedelmi plugin. A fejlesztők világszerte különböző fizetési kapukat integráló bővítményeket készítettek hozzá. Ezt kihasználva bővítettük az Ultimate Multisite számlázási rendszerével használható fizetési kapuk körét.

_**FONTOS:** Az Ultimate Multisite: WooCommerce Integration működéséhez a WooCommerce-nek legalább a fő webhelyeden aktiválva kell lennie._

Először menj a bővítmények oldalára. Ehhez navigálj az **Ultimate Multisite > Beállítások** menüpontra. Látni fogod a **Bővítmények** táblázatot. Kattints a **Bővítmények megtekintése** gombra.

![Beállítások oldal a bővítmények szekcióval](/img/config/settings-general.png)

A **Bővítmények megtekintése** gombra kattintva átirányít a bővítmények oldalra. Itt megtalálod az összes Ultimate Multisite bővítményt. Kattints az **Ultimate Multisite: WooCommerce Integration** bővítményre.

![Bővítmények oldal az elérhető bővítmények listájával](/img/config/settings-general.png)

Megjelenik egy ablak a bővítmény részleteivel. Egyszerűen kattints a **Telepítés most** gombra.

![WooCommerce bővítmény telepítési párbeszédablak](/img/config/settings-general.png)

A telepítés befejezése után átirányít a bővítmények oldalra. Itt kattints a **Hálózati aktiválás** gombra, és a WooCommerce bővítmény aktiválódik a hálózatodon.

![WooCommerce bővítmény hálózati aktiválása](/img/config/settings-general.png)

Az aktiválás után, ha még nincs telepítve és aktiválva a WooCommerce plugin a webhelyeden, emlékeztetőt fogsz kapni.

![WooCommerce aktiválási emlékeztető](/img/config/settings-general.png)

A WooCommerce Integration bővítményről bővebben **itt olvashatsz**.

### A GoCardless bővítmény telepítése:

A _GoCardless_ bővítmény telepítésének lépései nagyjából megegyeznek a _WooCommerce_ bővítményével. Menj a bővítmények oldalára, és válaszd ki az **Ultimate Multisite: GoCardless Gateway** bővítményt.

![Bővítmények oldal az elérhető bővítmények listájával](/img/config/settings-general.png)

Megjelenik a bővítmény ablaka. Kattints a **Telepítés most** gombra.

![GoCardless bővítmény telepítési párbeszédablak](/img/config/settings-general.png)

A telepítés befejezése után átirányít a bővítmények oldalra. Itt kattints a **Hálózati aktiválás** gombra, és a _GoCardless_ bővítmény aktiválódik a hálózatodon.

![GoCardless bővítmény hálózati aktiválása](/img/config/settings-general.png)

A _GoCardless_ kapu használatának megkezdéséről **ebben a cikkben olvashatsz**.

### A Payfast bővítmény telepítése:

Menj a bővítmények oldalára, és válaszd ki az **Ultimate Multisite: Payfast Gateway** bővítményt.

![Bővítmények oldal az elérhető bővítmények listájával](/img/config/settings-general.png)

Megjelenik a bővítmény ablaka. Kattints a **Telepítés most** gombra.

![Payfast bővítmény telepítési párbeszédablak](/img/config/settings-general.png)

A telepítés befejezése után átirányít a bővítmények oldalra. Itt kattints a **Hálózati aktiválás** gombra, és a _Payfast_ bővítmény aktiválódik a hálózatodon.

![Payfast bővítmény hálózati aktiválása](/img/config/settings-general.png)
