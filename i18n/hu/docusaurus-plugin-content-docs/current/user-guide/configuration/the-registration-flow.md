---
title: A regisztrációs folyamat
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# A regisztrációs folyamat (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

A felhasználók különböző módokon regisztrálhatnak a hálózatodra. Használhatják a regisztrációs űrlapodat, vagy egy megosztható linket egy előre kiválasztott csomaghoz. Itt bemutatjuk, hogyan regisztrálhatnak az ügyfeleid a hálózatodon az elérhető útvonalakon keresztül, és mi történik azután, hogy regisztrálnak a hálózatodon.

## A regisztrációs űrlap használata:

Ez a szokásos regisztrációs folyamat. Létrehozol egy regisztrációs oldalt egy **fizetési űrlappal**, és az ügyfeleid ide fognak menni, hogy regisztráljanak a hálózatodon, és előfizessenek egy csomagra. Több regisztrációs oldalad is lehet, mindegyiken eltérő regisztrációs űrlappal, ha szeretnéd.

A regisztráció alapértelmezett oldala a [_**yourdomain.com/register**_](http://yourdomain.com/register), de ezt bármikor megváltoztathatod itt: **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Miután egy felhasználó eljut a regisztrációs oldaladra (általában egy **Bejelentkezés** vagy **Vásárlás most** gombra kattintva), ott látni fogja a regisztrációs űrlapodat.

![A regisztrációs oldalon megjelenített regisztrációs űrlap](/img/frontend/registration-form.png)

Íme egy példa arra, hogyan jelenik meg a fizetési űrlap a frontenden:

![Frontend fizetési regisztrációs űrlap](/img/config/checkout-frontend-registration.png)

Csak ki kell tölteniük az összes kötelező mezőt - e-mail, felhasználónév, jelszó stb... -, és fizetniük kell a csomagért, vagy meg kell erősíteniük az e-mail-címüket, ha ingyenes csomagra, illetve próbaidőszakos fizetős csomagra regisztrálnak fizetési információk megadása nélkül.

A „Köszönjük” oldalon egy üzenetet fognak látni, amely tájékoztatja őket arról, hogy meg kell-e erősíteniük az e-mail-címüket, vagy a webhelyük már aktiválva van, és elkezdhetik használni.

![Köszönjük oldal a regisztráció után](/img/frontend/registration-thank-you.png)

Ha e-mail-cím megerősítése szükséges, akkor meg kell nyitniuk az e-mail-fiókjukat, és rá kell kattintaniuk az ellenőrző linkre. A webhelyük nem lesz aktiválva, ha az e-mail-címüket nem erősítik meg.

Ha fizetős csomagra regisztráltak, vagy az e-mailes ellenőrzés nem kötelező a hálózatodon, akkor a webhelyük közvetlenül a fizetés után aktiválódik, és megjelenik számukra egy link, amellyel bejelentkezhetnek a Dashboardra.

![Aktivált webhely a Dashboardra való bejelentkezési linkkel](/img/frontend/site-activated.png)

## Megosztható link használata:

A megosztható linkkel történő regisztráció folyamata alapvetően ugyanaz, mint a regisztrációs űrlap esetében; az egyetlen különbség az, hogy megosztható link használatával az ügyfeleidnél előre ki lehet választani egy terméket vagy webhelysablont a fizetési űrlapon (lásd a Termékek és sablonok előválasztása URL-paraméterekkel című szakaszt), vagy akár egy kuponkód is hozzáadható (lásd az URL-paraméterek használata című szakaszt).

A regisztrációs folyamat ugyanaz lesz: meg kell adniuk a nevüket, felhasználónevüket, e-mail-címüket, webhelynevüket és címüket stb..., de a csomag vagy a webhelysablon már előre ki lesz választva számukra.

### Regisztráció kézi fizetések használatával:

Ha nem szeretnéd használni a PayPalt, a Stripe-ot vagy bármely más, az Ultimate Multisite vagy annak kiegészítő integrációi által kínált fizetési átjárót, használhatsz kézi fizetéseket az ügyfeleid számára. Így számlát generálhatsz nekik, amelyet az általad preferált fizetésfeldolgozón keresztül fizethetnek ki, miután regisztráltak a hálózatodon.

A regisztrációs folyamat pontosan ugyanaz lesz, mint fent, de a regisztrációs oldalon az ügyfeleid egy üzenetet fognak látni, amely jelzi, hogy e-mailben további utasításokat kapnak a fizetés befejezéséhez.

![Kézi fizetési üzenet regisztráció közben](/img/frontend/registration-manual-notice.png)

A regisztráció befejezése után pedig látni fogják az általad beállított fizetési utasításokat (és e-mailben is megkapják azokat).

![Regisztráció után megjelenített fizetési utasítások](/img/frontend/registration-payment-instructions.png)

A fizetési utasítások módosíthatók itt: **Ultimate Multisite > Settings > Payments**, miután bekapcsoltad a **Manual** fizetési opciót:

![Manual fizetési kapcsoló fizetési utasítások mezővel](/img/config/manual-gateway-settings.png)

Miután az ügyfeleid teljesítették a kézi fizetést, és elküldték neked a visszaigazolást, **kézzel meg kell erősítened a fizetést** az ügyfél tagságának és webhelyének aktiválásához.

Ehhez menj ide: **Ultimate Multisite > Payments**, és keresd meg az ügyfél fizetését. Ennek továbbra is **Pending** állapotot kell mutatnia.

![Fizetések listája függőben lévő kézi fizetéssel](/img/admin/payments-list.png)

Kattints a fizetés számára, és módosíthatod az állapotát **Completed** értékre.

![Fizetési részletek oldala](/img/admin/payment-edit.png)

![Fizetési állapot módosítása Completed értékre](/img/admin/payment-status-completed.png)

Miután az állapotát **Completed** értékre módosítottad, egy **Activate membership** üzenetet kell látnod. Kapcsold ezt az opciót **be**, hogy aktiváld az ehhez az ügyfélhez társított tagságot és webhelyet. Ezután kattints a **Save Payment** gombra.

![Activate membership kapcsoló és Save Payment gomb](/img/admin/payment-activate-membership.png)

Az ügyfelednek most már hozzá kell férnie a Dashboardhoz és minden olyan funkcióhoz, amelyre előfizetett.
