---
title: Manuális fizetések beállítása
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Kézi fizetések beállítása (v2) {#setting-up-manual-payments-v2}

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

A kézi fizetések lehetőséget adnak arra, hogy más fizetési módokat kínálj, ha a **Stripe** vagy a **PayPal** nem érhető el a felhasználóid számára. Ez lehet átutalás vagy banki átutalás, illetve bármely más, a felhasználóid számára helyben elérhető fizetési mód.

## A kézi fizetések engedélyezése {#how-to-enable-manual-payments}

A kézi fizetés beállítása nagyon egyszerű. Csak engedélyezned kell a fizetési átjárók alatt, és részletes utasításokat kell megadnod arról, hogyan küldje el a felhasználó a fizetést.

Először menj az **Ultimate Multisite > Beállítások > Fizetések** menüpontra. A **Fizetési átjárók** alatt kapcsold be a **Kézi** opciót. Látni fogod, hogy megjelenik egy **Fizetési utasítások** mező.

Add meg ebben a mezőben azokat az információkat, amelyekre az ügyfelednek szüksége lesz a fizetés elvégzéséhez. Ez lehet például a bankszámlaadatod és az e-mail-címed, hogy az ügyfél elküldhesse neked a fizetési visszaigazolást.

![Kézi fizetési átjáró kapcsolója a Fizetési utasítások szövegmezővel](/img/config/manual-gateway-expanded.png)

Íme a kézi átjáró beállítási felülete:

![Kézi átjáró beállításai](/img/config/manual-gateway-settings.png)

A beállítás után csak kattints a **Beállítások mentése** gombra, és kész is. Amikor a felhasználók regisztrálnak a hálózatodba, egy üzenetet fognak látni, amely tájékoztatja őket, hogy megkapják az utasításaidat a vásárlás befejezéséhez.

![Regisztrációs megerősítő üzenet, amely tájékoztatja a felhasználót, hogy fizetési utasításokat fog kapni](/img/frontend/registration-manual-notice.png)

Emellett a **Köszönjük** oldaladon is kapnak egy üzenetet a fizetési utasításaiddal.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Kézi fizetések megerősítése {#confirming-manual-payments}

Egy kézi fizetés megerősítéséhez menj a bal oldali sávban található **Fizetések** menübe. Ott láthatod a hálózatod összes fizetését és azok részleteit, beleértve az **állapotukat** is. Egy kézi fizetés mindig **Függőben** állapotú lesz, amíg manuálisan meg nem változtatod.

![Fizetések listája függőben lévő kézi fizetéssel](/img/admin/payments-list.png)

Lépj be a fizetési oldalra a **hivatkozási kódra** kattintva. Ezen az oldalon megtalálod a függőben lévő fizetés minden részletét, például a hivatkozási azonosítót, a termékeket, az időbélyegeket és egyebeket.

![Fizetési részletek oldal hivatkozási kóddal, termékekkel és végösszegekkel](/img/admin/payment-edit.png)

A jobb oldali oszlopban módosíthatod a fizetés állapotát. Ha **Befejezett** állapotra változtatod, és **bekapcsolod a tagság aktiválása** opciót, az engedélyezi az ügyfeled webhelyét, és a tagsága aktív lesz.

![Fizetés szerkesztése oldal Befejezett állapottal és Tagság aktiválása kapcsolóval](/img/admin/payment-activate-membership.png)
