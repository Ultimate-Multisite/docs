---
title: Manuális fizetések beállítása
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Kézi fizetés beállítása (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

A kézi fizetés lehetőséget ad arra, hogy más fizetési módokat is felkínálj, ha a **Stripe** vagy a **PayPal** nem érhető el a felhasználóid számára. Ez lehet banki átutalás vagy bármilyen más, a felhasználóid számára helyben elérhető fizetési mód.

## Hogyan engedélyezd a kézi fizetést

A kézi fizetés beállítása nagyon egyszerű. Csak engedélyezned kell a fizetési módok között, és meg kell adnod a részletes útmutatót arról, hogyan küldhetik el a felhasználók a befizetést.

Először menj az **Ultimate Multisite > Beállítások > Fizetések** menüpontba. A **Fizetési módok** alatt kapcsold be a **Kézi** opciót. Ekkor megjelenik egy **Fizetési útmutató** szövegdoboz.

Ebbe a dobozba írd be azokat az információkat, amelyekre az ügyfélnek szüksége lesz a fizetéshez. Például megadhatod a bankszámlaszámodat és az e-mail címedet, hogy az ügyfél elküldhesse neked a fizetési visszaigazolást.

![Kézi fizetési mód kapcsolója és fizetési útmutató doboz](/img/config/settings-payment-gateways.png)

A beállítás után kattints a **Beállítások mentése** gombra, és kész is. Amikor a felhasználók regisztrálnak a hálózatodra, egy üzenetet látnak, amely tájékoztatja őket, hogy megkapják az útmutatót a vásárlás befejezéséhez.

![Kézi fizetési üzenet a regisztráció során](/img/config/settings-payment-gateways.png)

A **Köszönjük** oldalon szintén megjelenik egy üzenet a fizetési útmutatóddal.

![Köszönjük oldal a fizetési útmutatóval](/img/config/settings-payment-gateways.png)

## Kézi fizetések jóváhagyása

A kézi fizetés jóváhagyásához menj a bal oldali sáv **Fizetések** menüpontjába. Itt láthatod a hálózatodon lévő összes fizetést és azok részleteit, beleértve az **állapotukat** is. A kézi fizetés mindig **Függőben** állapotú marad, amíg manuálisan meg nem változtatod.

![Fizetések listája függőben lévő kézi fizetéssel](/img/admin/payments-list.png)

Kattints a **hivatkozási kódra** a fizetés oldalának megnyitásához. Ezen az oldalon megtalálod a függőben lévő fizetés összes részletét, például a hivatkozási azonosítót, a termékeket, az időbélyegeket és még sok mást.

![Fizetés részletei oldal hivatkozási kóddal és termékekkel](/img/admin/payments-list.png)

A jobb oldali oszlopban módosíthatod a fizetés állapotát. Ha **Teljesített** státuszra állítod, és bekapcsolod a **Tagság aktiválása** opciót, az ügyfeled webhelye engedélyezésre kerül, és a tagsága aktív lesz.

![Fizetés állapotának módosítása Teljesítettre a Tagság aktiválása kapcsolóval](/img/admin/payments-list.png)
