---
title: Pénztár űrlapok
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Fizetési űrlapok

A fizetési űrlapok egyszerű és rugalmas módot kínálnak arra, hogy különböző megközelítéseket próbálj ki az új ügyfelek megszerzéséhez.

Az Ultimate Multisite 2.0 tartalmaz egy fizetési űrlap szerkesztőt, amellyel tetszőleges számú űrlapot hozhatsz létre, eltérő mezőkkel, kínált termékekkel stb.

A funkció eléréséhez kattints a bal oldali menüben a Checkout Forms menüpontra.

![Fizetési űrlapok listája](/img/config/checkout-forms-list.png)

Ezen az oldalon láthatod az összes fizetési űrlapodat.

Ha újat szeretnél létrehozni, kattints az oldal tetején az Add Checkout Form gombra.

Kiindulópontként három lehetőség közül választhatsz: egylépéses, többlépéses vagy üres. Ezután kattints a Go to the Editor gombra.

![Fizetési űrlap szerkesztő](/img/config/checkout-form-editor.png)

A meglévő űrlapjaidat szerkesztheted vagy duplikálhatod is, ha a név alatti lehetőségekre kattintasz. Itt találod az űrlap shortcode-jának másolását és az űrlap törlését is.

![Fizetési űrlap hover műveletek](/img/config/checkout-form-hover-actions.png)

### Fizetési űrlap szerkesztése

Különböző célokra hozhatsz létre fizetési űrlapokat. Ebben a példában egy regisztrációs űrlapon fogunk dolgozni.

A fizetési űrlap szerkesztőjébe navigálva adj nevet az űrlapnak (ez csak belső hivatkozásra szolgál), valamint egy slug-ot (ez például a shortcode-ok létrehozásához kell).

![Fizetési űrlap szerkesztő](/img/config/checkout-form-editor.png)

Az űrlapok lépésekből és mezőkből állnak. Új lépést az Add New Checkout Step gombra kattintva adhatsz hozzá.

![Új fizetési lépés hozzáadása](/img/config/checkout-form-add-step.png)

A felugró ablak első fülén töltsd ki az űrlap lépésének tartalmát. Adj meg egy azonosítót (ID), egy nevet és egy leírást. Ezeket az elemeket főként belső célokra használjuk.

![Fizetési űrlap lépés](/img/config/checkout-form-step.png)

Ezután állítsd be a lépés láthatóságát. Három lehetőség közül választhatsz: „Mindig megjelenik", „Csak bejelentkezett felhasználóknak" vagy „Csak vendégeknek".

![Fizetési űrlap lépés](/img/config/checkout-form-step.png)

Végül konfiguráld a lépés stílusát. Ezek opcionális mezők.

![Fizetési űrlap lépés](/img/config/checkout-form-step.png)

Most itt az ideje mezőket hozzáadni az első lépéshez. Kattints az Add New Field gombra, és válaszd ki a kívánt szekció típusát.

![Fizetési űrlap lépés mezőkkel](/img/config/checkout-form-step.png)

Minden mezőnek különböző kitöltendő paraméterei vannak. Első példánkban válasszuk a „Username" mezőt.

![Fizetési űrlap lépés](/img/config/checkout-form-step.png)

![Fizetési űrlap lépés](/img/config/checkout-form-step.png)

![Fizetési űrlap lépés](/img/config/checkout-form-step.png)

Annyi lépést és mezőt adhatsz hozzá, amennyire szükséged van. Ha meg szeretnéd jeleníteni a termékeidet, hogy az ügyfelek választhassanak, használd a Pricing Table mezőt. Ha szeretnéd, hogy az ügyfeleid sablont választhassanak, add hozzá a Template Selection mezőt. És így tovább.

_**Megjegyzés:** a felhasználónév, e-mail, jelszó, webhely címe, webhely URL-je, rendelés összegzése, fizetés és a küldés gomb kötelező mezők egy fizetési űrlap létrehozásához._

Miközben a fizetési űrlapodon dolgozol, bármikor használhatod a Preview gombot, hogy megnézd, hogyan fogják látni az ügyfeleid az űrlapot. Váltogathatsz is a meglévő felhasználóként vagy látogatóként való megjelenítés között.

![Fizetési űrlap mentés](/img/config/checkout-form-save.png)

![Fizetési űrlap szerkesztő](/img/config/checkout-form-editor.png)

Végül az Advanced Options részben beállíthatod a „Köszönöm" oldal üzenetét, hozzáadhatsz kódrészleteket a konverziók követésére, egyéni CSS-t adhatsz a fizetési űrlapodhoz, vagy korlátozhatod bizonyos országokra.

![Speciális beállítások](/img/config/checkout-form-advanced.png)

A jobb oldali oszlopban található kapcsolóval manuálisan engedélyezheted vagy letilthatod a fizetési űrlapot, illetve véglegesen törölheted.

![Aktív kapcsoló](/img/config/checkout-form-active.png)

Ne felejtsd el menteni a fizetési űrlapot!

![Mentés gomb](/img/config/checkout-form-save.png)

Az űrlap shortcode-jának lekéréséhez kattints a Generate Shortcode gombra, és másold ki a felugró ablakban megjelenő eredményt.

![Mentés gomb shortcode-dal](/img/config/checkout-form-save.png)
