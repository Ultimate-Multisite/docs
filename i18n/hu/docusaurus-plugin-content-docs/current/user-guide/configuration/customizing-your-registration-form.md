---
title: A regisztrációs űrlap testreszabása
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# A regisztrációs űrlap testreszabása

Ahhoz, hogy a hálózatod egyedi megjelenést kapjon a többi WordPress alapú SaaS megoldáshoz képest, az Ultimate Multisite lehetővé teszi a regisztrációs és bejelentkezési oldalak testreszabását a **Checkout Forms** (fizetési űrlapok) funkcióval.

Bár ezek az űrlapok kiválóan alkalmasak különféle megközelítések kipróbálására az új ügyfelek megszerzéséhez, leggyakrabban személyre szabott regisztrációs űrlapok létrehozására használják őket. Ebben a cikkben bemutatjuk, hogyan teheted ezt meg.

## Bejelentkezési és regisztrációs oldalak:

Az Ultimate Multisite telepítésekor automatikusan létrejönnek az egyéni bejelentkezési és regisztrációs oldalak a fő webhelyeden. Ezeket az alapértelmezett oldalakat bármikor módosíthatod az **Ultimate Multisite > Settings > Login & Registration** menüpontban.

![Login and Registration settings page](/img/config/settings-general.png)

Nézzük meg egyenként a **Login & Registration** oldalon testreszabható beállításokat:

  * **Enable registration:** Ezzel a beállítással engedélyezheted vagy letilthatod a regisztrációt a hálózatodon. Ha ki van kapcsolva, az ügyfeleid nem tudnak regisztrálni és előfizetni a termékeidre.

  * **Enable email verification:** Ha ez a beállítás be van kapcsolva, az ingyenes csomagra vagy próbaidőszakos fizetős csomagra feliratkozó ügyfelek visszaigazoló e-mailt kapnak, és a webhelyük csak akkor jön létre, ha rákattintanak a megerősítő linkre.

  * **Default registration page:** Ez az alapértelmezett regisztrációs oldal. Ennek az oldalnak publikáltnak kell lennie a webhelyeden, és tartalmaznia kell egy regisztrációs űrlapot (más néven checkout form) – ahol az ügyfeleid feliratkozhatnak a termékeidre. Tetszőleges számú regisztrációs oldalt és checkout form-ot hozhatsz létre, csak ne felejtsd el elhelyezni a checkout form shortcode-ját a regisztrációs oldalon, különben nem fog megjelenni.

  * **Use custom login page:** Ezzel a beállítással egyéni bejelentkezési oldalt használhatsz az alapértelmezett wp-login.php oldal helyett. Ha be van kapcsolva, a **Default login page** opcióban (közvetlenül alatta) kiválaszthatod, melyik oldalt szeretnéd használni bejelentkezéshez.

  * **Obfuscate the original login url (wp-login.php)** : Ha el szeretnéd rejteni az eredeti bejelentkezési URL-t, kapcsold be ezt az opciót. Ez hasznos a brute-force támadások megelőzésére. Ha engedélyezve van, az Ultimate Multisite 404-es hibát jelenít meg, amikor valaki megpróbálja elérni az eredeti wp-login.php linket.

  * **Force synchronous site publication:** Miután egy ügyfél előfizet egy termékre a hálózaton, a függőben lévő új webhelyet valódi hálózati webhellyé kell alakítani. A publikálási folyamat a Job Queue-n keresztül, aszinkron módon történik. Kapcsold be ezt az opciót, ha azt szeretnéd, hogy a publikálás ugyanabban a kérésben történjen meg, mint a regisztráció.

Most nézzük meg a bejelentkezési és regisztrációs folyamathoz kapcsolódó további beállításokat. Ezek az **Other options** szakasz alatt találhatók, ugyanezen a Login & registration oldalon:

  * **Default role:** Ez lesz az ügyfeleid szerepköre a saját webhelyükön a regisztrációs folyamat befejezése után.

  * **Add users to the main site as well:** Ha engedélyezed ezt az opciót, a felhasználó a regisztráció után a hálózatod fő webhelyéhez is hozzáadódik. Ennek bekapcsolásakor megjelenik egy további lehetőség, ahol beállíthatod ezeknek a felhasználóknak az **alapértelmezett szerepkörét** a webhelyeden.

  * **Enable multiple accounts:** Lehetővé teszi, hogy a felhasználók ugyanazzal az e-mail címmel több fiókkal rendelkezzenek a hálózatod különböző webhelyein. Ha ez az opció ki van kapcsolva, az ügyfeleid nem tudnak fiókot létrehozni a hálózatodon működő más webhelyeken ugyanazzal az e-mail címmel.

Ezek voltak a bejelentkezéshez és regisztrációhoz kapcsolódó összes testreszabható beállítás! Ne felejtsd el menteni a beállításaidat a szerkesztés befejezése után.

## Több regisztrációs űrlap használata:

Az Ultimate Multisite 2.0 egy checkout form szerkesztőt kínál, amellyel tetszőleges számú űrlapot hozhatsz létre különböző mezőkkel, kínált termékekkel stb.

Mind a bejelentkezési, mind a regisztrációs oldalak shortcode-okkal vannak beágyazva: **[wu_login_form]** a bejelentkezési oldalon és **[wu_checkout]** a regisztrációs oldalon. A regisztrációs oldalt tovább testreszabhatod checkout form-ok létrehozásával.

Ennek a funkciónak az eléréséhez menj a **Checkout Forms** menüpontba a bal oldali menüsávban.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Ezen az oldalon láthatod az összes checkout form-ot.

Ha újat szeretnél létrehozni, kattints az **Add Checkout Form** gombra az oldal tetején.

Kiindulópontként három lehetőség közül választhatsz: egylépéses, többlépéses vagy üres. Ezután kattints a **Go to the Editor** gombra.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternatívaként szerkesztheted vagy duplikálhatod a már meglévő űrlapjaidat a nevük alatt található opciókra kattintva. Itt megtalálod az űrlap shortcode-jának másolására és az űrlap törlésére szolgáló lehetőségeket is.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Ha az egylépéses vagy többlépéses opciót választod, a checkout form már előre kitöltve tartalmazza a működéshez szükséges alapvető lépéseket. Ezután tetszés szerint további lépéseket adhatsz hozzá.

### Checkout form szerkesztése:

Ahogy korábban említettük, különböző célokra hozhatsz létre checkout form-okat. Ebben a példában egy regisztrációs űrlapon fogunk dolgozni.

A checkout form szerkesztőbe navigálás után adj nevet az űrlapodnak (ezt csak belső hivatkozásra használjuk) és egy slug-ot (például shortcode-ok létrehozásához).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Az űrlapok lépésekből és mezőkből állnak. Új lépést az **Add New Checkout Step** gombra kattintva adhatsz hozzá.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

A felugró ablak első fülén töltsd ki az űrlap lépésének tartalmát. Adj meg egy azonosítót (ID), egy nevet és egy leírást. Ezeket főként belső célokra használjuk.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

Ezután állítsd be a lépés láthatóságát. Választhatsz a következők közül: **Always show** (mindig mutasd), **Only show for logged in users** (csak bejelentkezett felhasználóknak mutasd) vagy **Only show for guests** (csak vendégeknek mutasd).

![Checkout step visibility options](/img/config/checkout-form-step.png)

Végül konfiguráld a lépés stílusát. Ezek opcionális mezők.

![Checkout step style configuration](/img/config/checkout-form-step.png)

Most itt az ideje mezőket hozzáadni az első lépésünkhöz. Kattints az **Add New Field** gombra, és válaszd ki a kívánt szakasz típusát.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

Minden mezőnek különböző kitöltendő paraméterei vannak. Ebben az első példában a **Username** (felhasználónév) mezőt választjuk.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

Tetszőleges számú lépést és mezőt adhatsz hozzá. A termékeid megjelenítéséhez, hogy az ügyfelek választhassanak közülük, használd a Pricing Table (árazási táblázat) mezőt. Ha szeretnéd, hogy az ügyfeleid sablont választhassanak, add hozzá a Template Selection (sablonválasztó) mezőt. És így tovább.

_**Megjegyzés:** Ha a checkout form létrehozása után hozol létre egy terméket, azt hozzá kell adnod a Pricing table szakaszhoz. Ha nem adod hozzá, a termék nem fog megjelenni az ügyfeleidnek a regisztrációs oldalon._

_**2. megjegyzés:** A felhasználónév, e-mail, jelszó, webhely címe, webhely URL-je, rendelés összesítő, fizetés és küldés gomb kötelező mezők a checkout form létrehozásához._

Miközben a checkout form-on dolgozol, bármikor használhatod a Preview (előnézet) gombot, hogy lásd, hogyan fogják látni az ügyfeleid az űrlapot. Válthatsz is a meglévő felhasználóként vagy látogatóként való megtekintés között.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

Végül az **Advanced Options** (speciális beállítások) részben konfigurálhatod a **Thank You** (köszönöm) oldal üzenetét, hozzáadhatsz konverziókövetési kódrészleteket, egyéni CSS-t adhatsz a checkout form-odhoz, vagy bizonyos országokra korlátozhatod azt.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Manuálisan is engedélyezheted vagy letilthatod a checkout form-ot a jobb oldali oszlopban található kapcsolóval, vagy véglegesen törölheted az űrlapot.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Ne felejtsd el menteni a checkout form-ot!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Az űrlap shortcode-jának lekéréséhez kattints a **Generate Shortcode** gombra, és másold ki a felugró ablakban megjelenő eredményt.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Megjegyzés:** Ezt a shortcode-ot hozzá kell adnod a regisztrációs oldaladhoz, hogy ez a checkout form megjelenjen rajta._

## Termékek és sablonok előválasztása URL paraméterekkel:

Ha egyéni árazási táblázatokat szeretnél létrehozni a termékeidhez, és előre ki szeretnéd választani a checkout form-on azt a terméket vagy sablont, amelyet az ügyfeled az árazási táblázatodból vagy a sablonok oldalról választott, erre URL paramétereket használhatsz.

### **Csomagokhoz:**

Menj az **Ultimate Multisite > Products** menüpontba, és válassz ki egy csomagot. Az oldal tetején megjelenik a **Click to copy Shareable Link** gomb. Ezt a linket használhatod az adott csomag előválasztásához a checkout form-odon.

![Product page with shareable link button](/img/config/products-list.png)

Vedd figyelembe, hogy ez a megosztható link csak **Plans** (csomagok) esetén érvényes. A packages (csomagok) vagy services (szolgáltatások) esetén nem használhatsz megosztható linkeket.

### Sablonokhoz:

Ha webhelysablonokat szeretnél előválasztani a checkout form-odon, használd a **?template_id=X** paramétert a regisztrációs oldal URL-jében. Az "X" helyére a **webhely sablon azonosító számát** kell beírnod. Ennek a számnak a megtalálásához menj az **Ultimate Multisite > Sites** menüpontba.

Kattints a **Manage** gombra a használni kívánt webhelysablon alatt. Látni fogod a SITE ID számot. Egyszerűen használd ezt a számot az adott webhelysablon előválasztásához a checkout form-odon. A mi esetünkben az URL paraméter **?template_id=2** lenne.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Tegyük fel, hogy a hálózati webhelyünk [**www.mynetwork.com**](http://www.mynetwork.com), és a regisztrációs oldalunk a checkout form-mal a **/register** oldalon található. A teljes URL ezzel az előválasztott webhelysablonnal így fog kinézni: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

És ha szeretnéd, egyszerre előválaszthatsz termékeket és sablonokat is a checkout form-odon. Csak másold ki a csomag megosztható linkjét, és illeszd be a sablon paramétert a végére. Így fog kinézni: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
