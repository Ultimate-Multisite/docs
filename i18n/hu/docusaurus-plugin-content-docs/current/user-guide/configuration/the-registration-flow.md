---
title: A regisztrációs folyamat
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# A regisztrációs folyamat (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

A felhasználók többféleképpen regisztrálhatnak a hálózatodra. Használhatják a regisztrációs űrlapot vagy egy megosztható linket egy előre kiválasztott csomaghoz. Itt bemutatjuk, hogyan regisztrálhatnak az ügyfeleid a hálózatodra az elérhető módszerekkel, és mi történik a regisztráció után.

## A regisztrációs űrlap használata:

Ez a szabványos regisztrációs folyamat. Létrehozol egy regisztrációs oldalt egy **checkout űrlappal**, és ide érkeznek majd az ügyfeleid, hogy regisztráljanak a hálózatodra és előfizessenek egy csomagra. Akár több regisztrációs oldalad is lehet, mindegyik különböző regisztrációs űrlappal, ha szeretnéd.

Az alapértelmezett regisztrációs oldal a [_**yourdomain.com/register**_](http://yourdomain.com/register), de ezt bármikor módosíthatod az **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** menüpontban.

Miután a felhasználó megérkezik a regisztrációs oldaladra (általában egy **Bejelentkezés** vagy **Vásárlás** gombra kattintva), megjelenik előtte a regisztrációs űrlap.

![A regisztrációs oldalon megjelenő regisztrációs űrlap](/img/config/checkout-forms-list.png)

Mindössze annyit kell tenniük, hogy kitöltik az összes kötelező mezőt – e-mail cím, felhasználónév, jelszó stb. – és fizetnek a csomagért, vagy megerősítik az e-mail címüket, ha ingyenes csomagra vagy fizetési adatok nélküli próbaidőszakos fizetős csomagra regisztrálnak.

A „Köszönjük" oldalon egy üzenetet látnak, amely tájékoztatja őket arról, hogy meg kell-e erősíteniük az e-mail címüket, vagy a weboldaluk már aktiválva van és elkezdhetik használni.

![Köszönjük oldal a regisztráció után](/img/config/checkout-form-editor.png)

Ha szükséges az e-mail cím megerősítése, a postafiókjukba kell menniük és rákattintaniuk a megerősítő linkre. A weboldaluk nem lesz aktiválva, amíg az e-mail címük nincs ellenőrizve.

Ha fizetős csomagra regisztráltak, vagy az e-mail megerősítés nem kötelező a hálózatodon, a weboldaluk közvetlenül a checkout után aktiválódik, és megjelenik egy link a vezérlőpultjukba való bejelentkezéshez.

![Aktivált weboldal a vezérlőpultba való bejelentkezési linkkel](/img/config/checkout-form-editor.png)

## Megosztható link használata:

A megosztható linkkel történő regisztráció folyamata alapvetően ugyanaz, mint a regisztrációs űrlapnál, az egyetlen különbség, hogy megosztható link használatával az ügyfeleid számára egy termék vagy weboldal sablon lehet előre kiválasztva a checkout űrlapon (lásd a Termékek és sablonok előzetes kiválasztása URL paraméterekkel című részt), vagy esetleg egy kuponkód is hozzáadható (lásd az URL paraméterek használata című részt).

A regisztrációs folyamat ugyanaz marad: meg kell adniuk a nevüket, felhasználónevüket, e-mail címüket, a weboldal nevét és címét stb., de a csomag vagy a weboldal sablon már előre ki lesz választva számukra.

### Regisztráció manuális fizetéssel:

Ha nem szeretnéd használni a PayPal-t, Stripe-ot vagy bármely más, az Ultimate Multisite vagy bővítményei által kínált fizetési átjárót, manuális fizetést is beállíthatsz az ügyfeleid számára. Így számlát generálhatsz nekik, amelyet az általad preferált fizetési szolgáltatón keresztül fizethetnek ki a hálózatodon történő regisztráció után.

A regisztrációs folyamat pontosan ugyanaz, mint fent, de a regisztrációs oldalon az ügyfeleid egy üzenetet látnak, amely közli velük, hogy e-mailben kapnak további utasításokat a fizetés befejezéséhez.

![Manuális fizetési üzenet a regisztráció során](/img/config/settings-payment-gateways.png)

A regisztráció befejezése után pedig megjelennek az általad beállított fizetési utasítások (és e-mailben is megkapják).

![A regisztráció után megjelenő fizetési utasítások](/img/config/settings-payment-gateways.png)

A fizetési utasításokat az **Ultimate Multisite > Settings > Payments** menüpontban módosíthatod, miután bekapcsoltad a **Manual** fizetési lehetőséget:

![Manuális fizetés kapcsoló a fizetési utasítások mezővel](/img/config/settings-payment-gateways.png)

Miután az ügyfeleid teljesítették a manuális fizetést és elküldték neked a visszaigazolást, **manuálisan kell jóváhagynod a fizetést** az ügyfél tagságának és weboldalának aktiválásához.

Ehhez menj az **Ultimate Multisite > Payments** menüpontra és keresd meg az ügyfél fizetését. Még **Pending** (Függőben) állapotúnak kell lennie.

![Fizetések lista függőben lévő manuális fizetéssel](/img/admin/payments-list.png)

Kattints a fizetés számára, és módosíthatod az állapotát **Completed**-re (Teljesítve).

![Fizetés részletek oldal](/img/admin/payments-list.png)

![Fizetés állapotának módosítása Completed-re](/img/admin/payments-list.png)

Miután az állapotot **Completed**-re változtattad, megjelenik egy **Activate membership** (Tagság aktiválása) üzenet. Kapcsold **be** ezt az opciót az ügyféllel kapcsolatos tagság és weboldal aktiválásához. Ezután kattints a **Save Payment** (Fizetés mentése) gombra.

![Tagság aktiválása kapcsoló és Fizetés mentése gomb](/img/admin/payments-list.png)

Az ügyfeled most már hozzáférhet a vezérlőpulthoz és minden olyan funkcióhoz, amelyre előfizetett.
