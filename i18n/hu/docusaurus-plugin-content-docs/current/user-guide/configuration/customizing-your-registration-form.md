---
title: Regisztrációs űrlapod testreszabása
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# A regisztrációs űrlap testreszabása

Ahhoz, hogy a hálózatod egyedinek tűnjön a WordPress platformra épülő összes többi SaaS-hoz képest, az Ultimate Multisite lehetővé teszi a regisztrációs és bejelentkezési oldalaid testreszabását a **Checkout Forms** funkcióval.

Bár ezek egyszerű és rugalmas módot kínálnak különböző megközelítések kipróbálására új ügyfelek konvertálásakor, többnyire személyre szabott regisztrációs űrlapok létrehozására használják őket. Ez a cikk azt mutatja be, hogyan teheted ezt meg.

## Bejelentkezési és regisztrációs oldalak:

Az Ultimate Multisite telepítésekor automatikusan létrehoz egyedi bejelentkezési és regisztrációs oldalakat a fő webhelyeden. Ezeket az alapértelmezett oldalakat bármikor módosíthatod az **Ultimate Multisite > Settings > Login & Registration** oldalon.

![Bejelentkezési és regisztrációs beállítások oldala](/img/config/settings-general.png)

Íme a bejelentkezési és regisztrációs beállítások oldal teljes nézete:

![Bejelentkezési és regisztrációs beállítások teljes oldala](/img/config/settings-login-registration-full.png)

Nézzük meg egyenként azokat a beállításokat, amelyeket a **Login & Registration** oldalon testre szabhatsz:

  * **Regisztráció engedélyezése:** Ez a beállítás engedélyezi vagy letiltja a regisztrációt a hálózatodon. Ha ki van kapcsolva, az ügyfeleid nem tudnak regisztrálni és előfizetni a termékeidre.

  * **E-mailes ellenőrzés engedélyezése:** Ha ez a beállítás be van kapcsolva, azok az ügyfelek, akik ingyenes csomagra vagy próbaidőszakkal rendelkező fizetős csomagra fizetnek elő, ellenőrző e-mailt kapnak, és rá kell kattintaniuk az ellenőrző linkre ahhoz, hogy a webhelyeik létrejöjjenek.

  * **Alapértelmezett regisztrációs oldal:** Ez az alapértelmezett regisztrációs oldal. Ezt az oldalt közzé kell tenni a webhelyeden, és tartalmaznia kell egy regisztrációs űrlapot (más néven checkout formot) - ahol az ügyfeleid előfizetnek a termékeidre. Annyi regisztrációs oldalt és checkout formot hozhatsz létre, amennyit szeretnél, csak ne felejtsd el elhelyezni a checkout form shortcode-ot a regisztrációs oldalon, különben nem fog megjelenni.

  * **Egyéni bejelentkezési oldal használata:** Ez a beállítás lehetővé teszi, hogy az alapértelmezett wp-login.php oldal helyett testreszabott bejelentkezési oldalt használj. Ha ez a beállítás be van kapcsolva, kiválaszthatod, melyik oldal legyen használva bejelentkezéshez az **Default login page** beállításnál (közvetlenül alatta).

  * **Az eredeti bejelentkezési URL elrejtése (wp-login.php)** : Ha el szeretnéd rejteni az eredeti bejelentkezési URL-t, bekapcsolhatod ezt a beállítást. Ez hasznos a brute-force támadások megelőzésére. Ha ez a beállítás engedélyezve van, az Ultimate Multisite 404-es hibát jelenít meg, amikor egy felhasználó megpróbálja elérni az eredeti wp-login.php linket

  * **Szinkron webhely-közzététel kényszerítése:** Miután egy ügyfél előfizet egy termékre a hálózaton, az új függőben lévő webhelyet valódi hálózati webhellyé kell alakítani. A közzétételi folyamat a Job Queue-n keresztül, aszinkron módon történik. Engedélyezd ezt a beállítást, hogy a közzététel ugyanabban a kérésben történjen, mint a regisztráció.

Most nézzünk meg további beállításokat, amelyek továbbra is relevánsak a bejelentkezési és regisztrációs folyamathoz. Ezek ugyanazon a Login & registration oldalon, az **Other options** alatt találhatók:

  * **Alapértelmezett szerepkör:** Ez az a szerepkör, amellyel az ügyfeleid rendelkezni fognak a webhelyükön a regisztrációs folyamat után.

  * **Jumper engedélyezése:** Engedélyezi a Jumper parancsikont az adminisztrációs területen. A Jumper lehetővé teszi az adminisztrátoroknak, hogy gyorsan az Ultimate Multisite képernyőire, hálózati objektumokra és más támogatott célokra ugorjanak anélkül, hogy minden menüt végig kellene böngészniük. Kapcsold ki, ha el szeretnéd rejteni ezt a gyors navigációs eszközt az adminisztrációs felületről.

  * **Felhasználók hozzáadása a fő webhelyhez is:** Ennek a beállításnak az engedélyezése a regisztrációs folyamat után a felhasználót a hálózatod fő webhelyéhez is hozzáadja. Ha engedélyezed ezt a beállítást, közvetlenül alatta megjelenik egy lehetőség ezen felhasználók **alapértelmezett szerepkörének** beállítására a webhelyeden.

  * **Több fiók engedélyezése:** Lehetővé teszi a felhasználóknak, hogy a hálózatod különböző webhelyein ugyanazzal az e-mail-címmel rendelkezzenek fiókkal. Ha ez a beállítás ki van kapcsolva, az ügyfeleid nem tudnak ugyanazzal az e-mail-címmel fiókot létrehozni a hálózatodon futó más webhelyeken.

És ennyi az összes bejelentkezéshez és regisztrációhoz kapcsolódó beállítás, amelyet testre szabhatsz! Ne felejtsd el menteni a beállításaidat, miután befejezted a szerkesztésüket.

## Több regisztrációs űrlap használata:

Az Ultimate Multisite 2.0 checkout form szerkesztőt kínál, amely lehetővé teszi, hogy annyi űrlapot hozz létre, amennyit szeretnél, különböző mezőkkel, kínált termékekkel stb.

A bejelentkezési és a regisztrációs oldal is shortcode-okkal van beágyazva: **[wu_login_form]** a bejelentkezési oldalon és**[wu_checkout]** a regisztrációs oldalhoz. A regisztrációs oldalt tovább testreszabhatod checkout formok felépítésével vagy létrehozásával.

A funkció eléréséhez menj a bal oldalsávon található **Checkout Forms** menübe.

![Checkout Forms menü az oldalsávban](/img/config/checkout-forms-list.png)

Ezen az oldalon láthatod az összes meglévő checkout formodat.

Ha újat szeretnél létrehozni, kattints az oldal tetején található **Add Checkout Form** lehetőségre.

Kiindulópontként a három lehetőség egyikét választhatod: egylépéses, többlépéses vagy üres. Ezután kattints a **Go to the Editor** gombra.

![Checkout Form hozzáadása egylépéses, többlépéses vagy üres opciókkal](/img/config/checkout-forms-list.png)

Alternatívaként szerkesztheted vagy duplikálhatod a már meglévő űrlapokat a nevük alatt található lehetőségekre kattintva. Ott megtalálod az űrlap shortcode-jának másolására vagy az űrlap törlésére szolgáló lehetőségeket is.

![Checkout form rámutatáskor megjelenő műveletek szerkesztéssel, duplikálással és törléssel](/img/config/checkout-form-hover-actions.png)

Ha az egylépéses vagy a többlépéses lehetőséget választod, a checkout form már előre fel lesz töltve a működéséhez szükséges alapvető lépésekkel. Ezután, ha szeretnéd, további lépéseket adhatsz hozzá.

### Checkout Form szerkesztése:

Ahogy korábban említettük, különböző célokra hozhatsz létre checkout formokat. Ebben a példában egy regisztrációs űrlapon fogunk dolgozni.

Miután megnyitottad a checkout form szerkesztőt, adj nevet az űrlapodnak (amely csak belső hivatkozásra lesz használva), valamint egy slugot (például shortcode-ok létrehozásához használva).

![Pénztári űrlapszerkesztő név- és slug mezőkkel](/img/config/checkout-form-name-slug.png)

Az űrlapok lépésekből és mezőkből állnak. Új lépést az **Add New Checkout Step** gombra kattintva adhatsz hozzá.

![Add New Checkout Step gomb](/img/config/checkout-form-add-step.png)

A modális ablak első fülén töltsd ki az űrlap lépésének tartalmát. Adj neki egy ID-t, egy nevet és egy leírást. Ezek az elemek többnyire belső használatra szolgálnak.

![Pénztári lépés tartalom fül ID-val, névvel és leírással](/img/config/checkout-form-step-content.png)

Ezután állítsd be a lépés láthatóságát. Választhatsz az **Always show**, **Only show for logged in users** vagy **Only show for guests** lehetőségek közül.

![Pénztári lépés láthatósági beállításai](/img/config/checkout-form-step-visibility.png)

Végül konfiguráld a lépés stílusát. Ezek opcionális mezők.

![Pénztári lépés stílusának konfigurációja](/img/config/checkout-form-step-style.png)

Most itt az ideje, hogy mezőket adjunk az első lépésünkhöz. Csak kattints az **Add New Field** lehetőségre, és válaszd ki a kívánt szakasztípust.

![Add New Field gomb](/img/config/checkout-form-add-field-button.png)![Mezőtípus-kiválasztó legördülő lista](/img/config/checkout-form-field-type-dropdown.png)

Minden mezőnek különböző paraméterei vannak, amelyeket ki kell tölteni. Ennél az első bevitelnél a **Username** mezőt választjuk.

![Username mező konfigurációja](/img/config/checkout-form-username-content.png)![Username mező paraméterei](/img/config/checkout-form-username-visibility.png)![Username mező további beállításai](/img/config/checkout-form-username-style.png)

Annyi lépést és mezőt adhatsz hozzá, amennyire szükséged van. Ahhoz, hogy megjelenítsd a termékeidet, amelyek közül az ügyfeleid választhatnak, használd a Pricing Table mezőt. Ha szeretnéd, hogy az ügyfeleid sablont választhassanak, add hozzá a Template Selection mezőt. És így tovább.

![Pénztári űrlapszerkesztő sablonválasztó mezővel](/img/config/checkout-form-with-template-field.png)

_**Megjegyzés:** Ha azután hozol létre terméket, hogy létrehoztad a pénztári űrlapot, hozzá kell adnod a terméket a Pricing table szakaszban. Ha nem adod hozzá, a termék nem fog megjelenni az ügyfeleidnek a regisztrációs oldalon._

_**2. megjegyzés:** a username, email, password, site title, site URL, order summary, payment és submit button kötelező mezők a pénztári űrlap létrehozásához._

Miközben a pénztári űrlapodon dolgozol, bármikor használhatod a Preview gombot, hogy lásd, hogyan fogják látni az ügyfeleid az űrlapot. Váltogathatsz a meglévő felhasználóként vagy látogatóként való megtekintés között is.

![Preview gomb a pénztári űrlapszerkesztőben](/img/config/checkout-form-preview-button.png)![Pénztári űrlap előnézete látogatóként vagy meglévő felhasználóként](/img/config/checkout-form-preview-modal.png)

Végül az **Advanced Options** alatt konfigurálhatod a **Thank You** oldal üzenetét, hozzáadhatsz kódrészleteket a konverziók követéséhez, egyéni CSS-t adhatsz a pénztári űrlapodhoz, vagy bizonyos országokra korlátozhatod azt.

![Advanced Options a Thank You oldallal, konverziókövetéssel és egyéni CSS-sel](/img/config/checkout-form-advanced.png)

Manuálisan is engedélyezheted vagy letilthatod a pénztári űrlapodat a jobb oldali oszlopban található opció átkapcsolásával, vagy véglegesen törölheted az űrlapot.

![Aktív kapcsoló és törlési lehetőség a pénztári űrlaphoz](/img/config/checkout-form-active.png)

Ne felejtsd el menteni a pénztári űrlapodat!

![Save Checkout Form gomb](/img/config/checkout-form-save.png)

Az űrlapod shortcode-jának lekéréséhez kattints a **Generate Shortcode** gombra, és másold ki a modális ablakban megjelenő eredményt.

![Generate Shortcode modális ablak másolható shortcode-dal](/img/config/checkout-form-editor.png)

_**Megjegyzés:** Ezt a shortcode-ot hozzá kell adnod a regisztrációs oldaladhoz ahhoz, hogy ez a pénztári űrlap hozzá legyen adva._

## Termékek és sablonok előzetes kiválasztása URL-paraméterekkel:

Ha testreszabott árképzési táblázatokat szeretnél létrehozni a termékeidhez, és a pénztári űrlapon előre ki szeretnéd választani azt a terméket vagy sablont, amelyet az ügyfeled az árképzési táblázatodról vagy a sablonok oldaláról választ, ehhez URL-paramétereket használhatsz.

### **Csomagokhoz:**

Lépj az **Ultimate Multisite > Products > Select a plan** oldalra. Az oldal tetején látnod kell a **Click to copy Shareable Link** gombot. Ez az a hivatkozás, amellyel előre kiválaszthatod ezt a konkrét csomagot a pénztári űrlapodon.

![Termékoldal megosztható hivatkozás gombbal](/img/config/products-list.png)

Vedd figyelembe, hogy ez a megosztható hivatkozás csak a **Plans** esetében érvényes. Nem használhatsz megosztható hivatkozásokat csomagokhoz vagy szolgáltatásokhoz.

### Sablonokhoz:

Ha előre ki szeretnél választani webhelysablonokat a pénztári űrlapodon, használhatod a következő paramétert: **?template_id=X** a regisztrációs oldalad URL-jében. Az „X”-et a **webhelysablon ID-számával** kell helyettesíteni. Ennek a számnak a megszerzéséhez lépj az **Ultimate Multisite > Sites** oldalra.

Kattints a **Manage** lehetőségre közvetlenül az alatt a webhelysablon alatt, amelyet használni szeretnél. Látni fogod a SITE ID számot. Csak használd ezt a számot ehhez a konkrét webhelysablonhoz, hogy előre ki legyen választva a pénztári űrlapodon. Ebben az esetben az URL-paraméter a következő lenne: **?template_id=2**.

![Webhelyek listája webhelysablon ID-val](/img/config/site-templates-list.png)

Tegyük fel, hogy a hálózati webhelyünk [**www.mynetwork.com**](http://www.mynetwork.com), és a pénztári űrlapunkat tartalmazó regisztrációs oldalunk a **/register** oldalon található. A teljes URL ezzel az előre kiválasztott webhelysablonnal így fog kinézni: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

És ha szeretnéd, a termékeket és a sablonokat is előre kiválaszthatod a pénztári űrlapodon. Csak annyit kell tenned, hogy kimásolod a csomag megosztható hivatkozását, és beilleszted a sablon paraméterét a végére. Így fog kinézni: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
