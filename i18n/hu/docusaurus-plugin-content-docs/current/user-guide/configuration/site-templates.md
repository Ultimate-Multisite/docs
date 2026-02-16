---
title: Sablon oldalak
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# Webhelysablonok (v2)

_**MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik. Ha az 1.x verziót használod,**_ **lásd ezt a cikket** _**.**_

Amikor prémium hálózatot hozunk létre az Ultimate Multisite segítségével, célunk az, hogy minél több folyamatot automatizáljunk, miközben ügyfeleinknek rugalmasságot és különböző választási lehetőségeket biztosítunk webhelyeik létrehozásakor. Ennek az egyensúlynak az elérésére az egyik legegyszerűbb módszer az Ultimate Multisite Webhelysablonok funkciójának használata.

## Mi az a webhelysablon?

Ahogy a neve is sugallja, a webhelysablon egy kiindulási alapként szolgáló webhely, amelyet új webhelyek létrehozásakor használhatsz a hálózatodban.

Ez azt jelenti, hogy létrehozhatsz egy alapwebhelyet, aktiválhatsz különböző bővítményeket, beállíthatsz egy aktív témát, és tetszés szerint testreszabhatod. Ezután, amikor ügyfeled új fiókot hoz létre, az alapértelmezett, üres WordPress webhely helyett az alapwebhelyed másolatát kapja, az összes testreszabással és tartalommal együtt.

Ez remekül hangzik, de hogyan hozok létre új webhelysablont? Egyszerűbb nem is lehetne.

## Új webhelysablon létrehozása és szerkesztése

A webhelysablonok egyszerű webhelyek a hálózatodon. Új sablon létrehozásához egyszerűen navigálj a **Hálózat admin > Ultimate Multisite > Webhelyek > Webhely hozzáadása** menüpontba.

**![Webhely hozzáadása gomb a Webhelyek lista oldalon](/img/config/site-templates-list.png)**

Ez megnyit egy felugró ablakot, ahol meg kell adnod a **Webhely címét, a Webhely domaint/útvonalat** és a **Webhely típusát**. A **Webhely típusa** legördülő mezőben válaszd ki a **Webhelysablon** opciót.

_![Webhelysablon hozzáadása felugró ablak a webhely típus legördülővel](/img/config/site-templates-list.png)_

Az űrlap alján találsz egy **Webhely másolása** kapcsolót. Ezzel új webhelysablont hozhatsz létre egy meglévő webhelysablon alapján, így időt takaríthatsz meg ahelyett, hogy a nulláról kezdenéd.

![Webhelysablon hozzáadása felugró ablak a webhely másolása kapcsolóval](/img/config/site-templates-list.png)

### A webhelysablon tartalmának testreszabása

A webhelysablon testreszabásához egyszerűen navigálj a vezérlőpultjára, és végezd el a szükséges módosításokat. Létrehozhatsz új bejegyzéseket, oldalakat, aktiválhatsz bővítményeket és megváltoztathatod az aktív témát. Még a Testreszabóba is beléphetsz, és módosíthatsz mindenféle beállítást.

Mindezek az adatok átmásolódnak, amikor egy ügyfél új webhelyet hoz létre az adott webhelysablon alapján.

### Haladó beállítások

Ha jártas vagy az egyedi kódolásban, használhatod a Keresés és csere API-t, hogy automatikusan lecseréld az információkat az új webhelyen a létrehozás után. Ez hasznos például a cégnév cseréjéhez a Rólunk oldalon, vagy a kapcsolattartási e-mail cseréjéhez a Kapcsolat oldalon.

### Webhelysablonok használata

Rendben, tehát létrehoztál egy csomó különböző webhelysablont különböző dizájnokkal, témákkal és beállításokkal. Hogyan teszed őket hasznossá a hálózatodon?

Alapvetően két megközelítést használhatsz (nem egyidejűleg):

  * Egy-egy webhelysablon hozzárendelése minden egyes csomagodhoz

**VAGY**

  * Az ügyfelek maguk választhatják ki a webhelysablonokat a regisztráció során.

#### 1. mód: Webhelysablon hozzárendelése

Ebben a módban az ügyfeleid nem tudnak sablont választani fiók létrehozásakor, hanem te határozod meg, melyik sablont használja az egyes csomagok.

Ehhez navigálj az **Ultimate Multisite > Termékek > Szerkesztés** menüpontra.

![Termék szerkesztése webhelysablon hozzárendeléséhez](/img/config/product-site-templates.png)

Ez a **Termék szerkesztése** oldalra visz. A **Termékbeállítások** szakaszban keresd meg a **Webhelysablon** fület, és válaszd ki a **Webhelysablon hozzárendelése** opciót a legördülő mezőből. Ez megjeleníti az elérhető webhelysablonok listáját, és lehetővé teszi, hogy egyetlen webhelysablont rendelj a termékhez.

![Termék webhelysablon fül a webhelysablon hozzárendelése opcióval](/img/config/product-site-templates.png)

#### 2. mód: Elérhető webhelysablon kiválasztása

Ebben a módban választási lehetőséget adsz az ügyfeleidnek a regisztráció során. Különböző webhelysablonok közül választhatnak, amelyeket a termékbeállítások alatt határozol meg. Lehetőséged van korlátozni a választható webhelysablonokat az adott termék alatt. Így minden termékhez különböző webhelysablon-készleteket állíthatsz be, ami ideális a magasabb árú termékek eltérő funkcióinak és jellemzőinek kiemelésére.

A **Termék szerkesztése** oldalon a **Termékbeállítások** szakaszban keresd meg a **Webhelysablon** fület, és válaszd ki az **Elérhető webhelysablon kiválasztása** opciót a legördülő mezőből. Ez megjeleníti az elérhető webhelysablonok listáját, és lehetővé teszi a kívánt sablonok kiválasztását. Ezt a Viselkedés beállításával teheted meg: **Elérhető**, ha azt szeretnéd, hogy a webhelysablon szerepeljen a listában. _**Nem elérhető**_, ha nem akarod, hogy opcióként megjelenjen. És **Előre kiválasztott**, ha azt szeretnéd, hogy valamelyik felsorolt webhelysablon legyen az alapértelmezetten kiválasztott.

![Elérhető webhelysablonok választása viselkedés opciókkal](/img/config/product-site-templates.png)

### Alapértelmezett mód: Webhelysablon-választás a Pénztár űrlapon

Ha azt szeretnéd, hogy az összes webhelysablonod elérhető legyen a regisztráció során, vagy nem akarsz külön munkát végezni a webhelysablonok hozzárendelésével vagy megadásával minden egyes termékhez, egyszerűen beállíthatod a webhelysablon-választást a **Pénztár űrlapon**. Ehhez navigálj az **Ultimate Multisite > Pénztár űrlapok** menüpontra. Majd kattints a **Szerkesztés** gombra a konfigurálni kívánt űrlap alatt.

![Pénztár űrlapok lista oldal](/img/config/checkout-forms-list.png)

Ez megnyitja a **Pénztár űrlap szerkesztése** oldalt. Keresd meg a **Sablon kiválasztása** mezőt, és kattints a **Szerkesztés** gombra alatta.

![Pénztár űrlap szerkesztő a sablon kiválasztása mezővel](/img/config/checkout-form-editor.png)

Egy felugró ablak jelenik meg. A **Sablon webhelyek** mezőben kiválaszthatod és felsorolhatod az összes webhelysablont, amelyet elérhetővé szeretnél tenni a regisztráció során. Az itt megadott webhelysablonok elérhetők lesznek függetlenül attól, hogy a felhasználó melyik terméket választotta.

![Sablon webhelyek mező a pénztár űrlap szerkesztőben](/img/config/checkout-form-step.png)

### Webhelysablon beállítások

Más webhelysablon funkciók is elérhetők, amelyeket be- vagy kikapcsolhatsz az Ultimate Multisite beállításokban.

![Webhelysablon beállítások az Ultimate Multisite beállításokban](/img/config/settings-sites.png)

#### Sablonváltás engedélyezése

Ennek az opciónak az engedélyezésével az ügyfeleid a fiók és webhely létrehozása után is átválthatnak a regisztráció során választott sablonról. Ez hasznos az ügyfél szempontjából, mivel lehetővé teszi számukra, hogy újraválasszanak sablont, ha később kiderül, hogy eredeti választásuk nem volt a legjobb az igényeikhez.

#### Felhasználók használhatják saját webhelyüket sablonként

Mivel az alwebhely-felhasználók időt és energiát fektettek saját webhelyük építésébe és megtervezésébe, érdemes lehet klónozniuk és sablonként használniuk, amikor újabb alwebhelyet hoznak létre a hálózatodon. Ez az opció lehetővé teszi számukra ezt.

#### Média másolása sablon duplikálásakor

Ennek az opciónak a bejelölésével a sablon webhelyre feltöltött médiafájlok átmásolódnak az újonnan létrehozott webhelyre. Ez felülírható az egyes csomagoknál.

#### **Keresőmotorok megakadályozása a webhelysablonok indexelésében**

Az ebben a cikkben tárgyalt webhelysablonok kiindulási alapok, de továbbra is a hálózatod részei, ami azt jelenti, hogy a keresőmotorok megtalálhatják őket. Ez az opció lehetővé teszi a webhelysablonok elrejtését a keresőmotorok elől.

## Webhelysablonok előzetes kitöltése automatikus kereséssel és cserével

Az Ultimate Multisite egyik legerősebb funkciója, hogy tetszőleges szöveg-, szín- és választómezőket adhatsz a regisztrációs űrlaphoz. Miután rögzítettük ezeket az adatokat, felhasználhatjuk őket a kiválasztott webhelysablon bizonyos részeinek előzetes kitöltésére. Ezután, amikor az új webhely közzétételre kerül, az Ultimate Multisite lecseréli a helyőrzőket a regisztráció során megadott tényleges információkra.

Például, ha szeretnéd megkapni a végfelhasználód cégnevét a regisztráció során, és automatikusan elhelyezni a cégnevet a kezdőoldalon, a sablon webhely kezdőoldalán hozzá kell adnod a helyőrzőket, ahogy az alábbi képen látható (a helyőrzőket dupla kapcsos zárójelek közé kell tenni - {{placeholder_name}}).

![Kezdőoldal helyőrző szöveggel kapcsos zárójelekben](/img/config/site-templates-list.png)

Ezután egyszerűen hozzáadhatsz egy megfelelő regisztrációs mezőt a pénztár űrlapodhoz az adat rögzítéséhez:

![Pénztár űrlap a megfelelő regisztrációs mezővel](/img/config/checkout-form-editor.png)

Az ügyfeled ezután kitöltheti ezt a mezőt a regisztráció során.

![Ügyfél által kitöltött regisztrációs mező](/img/config/checkout-form-step.png)

![A regisztrációs űrlap előnézete](/img/config/checkout-form-editor.png)

Az Ultimate Multisite ezután automatikusan lecseréli a helyőrzőket az ügyfél által megadott adatokra.

![Helyőrzők lecserélve az ügyfél adataira a webhelyen](/img/config/site-templates-list.png)

### A „helyőrzőkkel teli sablon" probléma megoldása

Mindez nagyszerű, de van egy csúnya probléma: a webhelysablonjaink – amelyeket az ügyfelek meglátogathatnak – tele vannak csúnya helyőrzőkkel, amelyek nem sokat mondanak.

Ennek megoldására kínáljuk a helyőrzők hamis értékeinek beállítását, és ezeket az értékeket használjuk a tartalom keresésére és cseréjére a sablon webhelyeken, miközben az ügyfelek látogatják azokat.

A sablon helyőrzők szerkesztőjét az **Ultimate Multisite > Beállítások > Webhelyek** menüpontban éred el, majd az oldalsávon kattints a **Helyőrzők szerkesztése** linkre.

![Helyőrző beállítások a Webhelyek beállítások oldalon](/img/config/settings-sites.png)

Ez a helyőrzők tartalomszerkesztőjébe visz, ahol hozzáadhatod a helyőrzőket és a hozzájuk tartozó tartalmakat.

![Sablon helyőrzők tartalomszerkesztő](/img/config/settings-sites.png)
