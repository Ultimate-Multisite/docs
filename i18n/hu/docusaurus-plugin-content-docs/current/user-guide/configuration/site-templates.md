---
title: Webhelysablonok
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2)

_**MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik. Ha az 1.x verziót használod,**_ **lásd ezt a cikket** _**.**_

Az Ultimate Multisite-tal létrehozott prémium hálózat célja, hogy a lehető legtöbb folyamatot automatizáljuk, miközben ügyfeleinknek rugalmasságot és különböző választható lehetőségeket adunk webhelyeik létrehozásakor. Ennek az egyensúlynak az egyik egyszerű módja az Ultimate Multisite Site Templates funkció használata.

## Mi az a Site Template? {#what-is-a-site-template}

Ahogy a neve is sugallja, a Site Template egy sablonként szolgáló webhely, amely alapként használható új webhelyek létrehozásakor a hálózatodban.

Ez azt jelenti, hogy létrehozhatsz egy alap webhelyet, aktiválhatsz különböző plugineket, beállíthatsz egy aktív témát, és tetszés szerint testre szabhatod. Ezután, amikor az ügyfeled új fiókot hoz létre, nem egy alapértelmezett WordPress webhelyet kap érdemi tartalom nélkül, hanem az alap webhelyed másolatát, amelyben már minden testreszabás és tartalom a helyén van.

Ez nagyszerűen hangzik, de hogyan hozhatok létre új webhelysablont? Ennél egyszerűbb nem is lehetne.

## Új Site Template létrehozása és szerkesztése {#creating-and-editing-a-new-site-template}

A Site Templates csak normál webhelyek a hálózatodon. Új sablon létrehozásához egyszerűen menj ide: **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Webhely hozzáadása gomb a Sites listaoldalon](/img/config/site-templates-list.png)**

Ez megnyit egy modális ablakot, ahol meg kell adnod a **webhely címét, webhely domainjét/útvonalát,** és a **webhely típusát**. A **Site Type** legördülő mezőben ügyelj arra, hogy a **Site Template** lehetőséget válaszd *.*

_![Webhelysablon hozzáadása modális ablak webhelytípus legördülővel](/img/config/site-templates-list.png)_

Ügyfeleknek szóló leírást is hozzáadhatsz, amely elmagyarázza, mit tartalmaz a sablon:

![Webhelysablon leírás mező a webhelysablon szerkesztőképernyőjén](/img/config/site-template-edit-description.png)

Az űrlap alján észreveszel egy **Copy Site** kapcsolót. Ez lehetővé teszi, hogy kiindulópontként egy meglévő webhelysablon alapján hozz létre új webhelysablont, így időt takaríthatsz meg ahelyett, hogy a nulláról hoznál létre webhelysablont.

![Webhelysablon hozzáadása modális ablak másolási kapcsolóval](/img/config/site-templates-list.png)

### Egy Site Template tartalmának testreszabása {#customizing-the-contents-of-a-site-template}

A webhelysablon testreszabásához egyszerűen navigálj annak Dashboard paneljére, és végezd el a szükséges módosításokat. Létrehozhatsz új bejegyzéseket, oldalakat, aktiválhatsz plugineket, és módosíthatod az aktív témát. Akár a Testreszabóba is beléphetsz, és mindenféle testreszabási beállítást módosíthatsz.

![Webhelysablon szerkesztőfelülete](/img/config/site-template-edit.png)

Mindezek az adatok átmásolásra kerülnek, amikor egy ügyfél új webhelyet hoz létre az adott Site Template alapján.

### Haladó beállítások {#advanced-options}

Ha jártas vagy az egyedi kódolásban, használhatod a Search and Replace API-nkat, hogy az új webhely létrehozása után automatikusan lecserélj információkat rajta. Ez hasznos például a cégnevek lecseréléséhez egy Rólunk oldalon, a kapcsolattartási e-mail lecseréléséhez a Kapcsolat oldalon stb.

### Site Templates használata {#using-site-templates}

Rendben, tehát létrehoztál egy csomó különböző Site Templates-et eltérő dizájnokkal, témákkal és beállításokkal. Hogyan teheted őket hasznossá a hálózatodon?

Alapvetően két megközelítést használhatsz most (nem egyszerre):

  * Egy Site Template hozzárendelése mindegyik Planhez

**VAGY**

  * Annak engedélyezése, hogy ügyfeleid maguk válasszák ki a webhelysablonokat a regisztráció során.

#### 1. mód: Site Template hozzárendelése {#mode-1-assign-site-template}

Ebben a módban ügyfeleid nem tudnak sablont választani, amikor fiókot hoznak létre; ehelyett te határozod meg, hogy melyik sablont kell használni az egyes Planeknél.

Ehhez ide kell menned: **Ultimate Multisite > Products > Edit**.

![Termék szerkesztése webhelysablon hozzárendeléséhez](/img/config/product-site-templates.png)

Ez az **Edit Product** oldalra visz. A **Product Options** szakasz alatt keresd meg a **Site template** fület, és válaszd ki az **Assign Site Template** opciót a legördülő mezőből. Ez megjeleníti az elérhető webhelysablonok listáját, és lehetővé teszi, hogy csak egy, a termékhez rendelt webhelysablont válassz ki.

![Termék webhelysablon füle Site Template hozzárendelési opcióval](/img/config/product-site-templates.png)

#### 2. mód: Elérhető Site Template kiválasztása {#mode-2-choose-available-site-template}

Ebben a módban választási lehetőséget adsz ügyfeleidnek a regisztrációs folyamat során. Különböző webhelysablonok közül választhatnak, amelyeket a termékbeállítások alatt határozol meg. Lehetőséged van korlátozni, hogy a kiválasztott termék alatt mely webhelysablonok közül választhatnak. Ez lehetővé teszi, hogy minden termék alatt különböző webhelysablon-készleteid legyenek, ami ideális a magasabb árú termék különböző funkcióinak és jellemzőinek kiemelésére.

Az **Edit Product** oldalon, a **Product Options** szakasz alatt keresd meg a **Site template** fület, és válaszd ki a **Choose Available Site Template** opciót a legördülő mezőből. Ez megjeleníti az elérhető webhelysablonok listáját, és lehetővé teszi, hogy kiválaszd azt a webhelysablont, amelyet elérhetővé szeretnél tenni. Ezt a viselkedésének kiválasztásával teheted meg: **Available**, ha szeretnéd, hogy a webhelysablon szerepeljen a listán. _**Not Available**_, ha nem szeretnéd, hogy a webhelysablon opcióként megjelenjen. És **Pre-selected**, ha szeretnéd, hogy a felsorolt webhelysablonok közül az egyik legyen az alapértelmezetten kiválasztott.

![Elérhető webhelysablonok kiválasztása viselkedési opciókkal](/img/config/product-site-templates.png)

### Alapértelmezett mód: webhelysablon kiválasztása a Checkout űrlapon {#default-mode-site-template-selection-on-the-checkout-form}

Ha szeretnéd, hogy minden webhelysablonod elérhető legyen a regisztráció során, vagy esetleg nem szeretnél plusz munkát végezni webhelysablonok hozzárendelésével vagy megadásával minden létrehozott termék alatt, akkor egyszerűen beállíthatod a webhelysablon kiválasztását a **Checkout Form** alatt. Ehhez menj ide: **Ultimate Multisite > Checkout Forms**, és kattints az **Edit** lehetőségre a konfigurálni kívánt űrlap alatt.

Ez megjeleníti az **Edit Checkout Form** oldalt. Keresd meg a **Template Selection** mezőt, és kattints alatta az **Edit** lehetőségre.

Megjelenik egy modális ablak. A **Template Sites** mező alatt kiválaszthatod és felsorolhatod az összes olyan webhelysablont, amelyet elérhetővé szeretnél tenni a regisztráció során. Az itt megadott webhelysablonok attól függetlenül elérhetők lesznek, hogy a felhasználó melyik terméket választotta.

![Sablonválasztó mező a pénztári űrlap szerkesztőjében](/img/config/checkout-form-template-step.png)

A frontenden az ügyfelek a pénztárnál látják a sablonválasztót, és kiválaszthatják az új webhelyük kiinduló dizájnját.

![Frontend sablonválasztó regisztráció közben](/img/config/frontend-template-chooser.png)

### Webhelysablon-beállítások {#site-template-options}

Vannak további webhelysablon-funkciók is, amelyeket be- vagy kikapcsolhatsz az Ultimate Multisite beállításai alatt.

![Webhelysablon-beállítások az Ultimate Multisite beállításaiban](/img/config/settings-sites-templates-section.png)

#### Sablonváltás engedélyezése {#allow-template-switching}

Ennek az opciónak az engedélyezése lehetővé teszi az ügyfeleid számára, hogy a fiók és a webhely létrehozása után módosítsák a regisztrációs folyamat során választott sablont. Ez ügyfélszempontból hasznos, mivel lehetővé teszi számukra, hogy újra kiválasszanak egy sablont, ha később rájönnek, hogy az eredeti választásuk nem volt a legjobb az adott igényeikhez.

#### Felhasználók saját webhelyének használata sablonként {#allow-users-to-use-their-site-as-templates}

Mivel az alwebhely-felhasználók időt töltöttek a saját webhelyük felépítésével és megtervezésével, előfordulhat, hogy klónozni szeretnék, és a hálózatodon egy másik alwebhely létrehozásakor elérhető webhelysablonok egyikeként szeretnék használni. Ez az opció lehetővé teszi számukra ezt.

#### Média másolása sablon duplikálásakor {#copy-media-on-template-duplication}

Ennek az opciónak a bejelölése átmásolja a sablonwebhelyre feltöltött médiát az újonnan létrehozott webhelyre. Ez minden csomagnál felülbírálható.

#### **Keresőmotorok megakadályozása a webhelysablonok indexelésében** {#prevent-search-engines-from-indexing-site-templates}

A jelen cikkben tárgyalt webhelysablonok kiinduló sablonok, de továbbra is a hálózatod részei, ami azt jelenti, hogy a keresőmotorok továbbra is megtalálhatják őket. Ez az opció lehetővé teszi a webhelysablonok elrejtését, hogy a keresőmotorok ne indexelhessék őket.

## Webhelysablonok előzetes kitöltése automatikus keresés és csere funkcióval {#pre-populating-site-templates-with-auto-search-and-replace}

Az Ultimate Multisite egyik legerősebb funkciója, hogy tetszőleges szöveg-, szín- és választómezőket adhatsz hozzá a regisztrációs űrlaphoz. Miután ezeket az adatokat rögzítettük, felhasználhatjuk őket a kiválasztott webhelysablon bizonyos részeinek előzetes kitöltésére. Ezután, amikor az új webhely közzétételre kerül, az Ultimate Multisite lecseréli a helyőrzőket a regisztráció során megadott tényleges információkra.

Például, ha a végfelhasználód cégnevét szeretnéd bekérni regisztrációkor, és automatikusan elhelyezni a cégnevet a kezdőlapon. A sablonwebhelyed kezdőlapján hozzá kell adnod a helyőrzőket, ahogy az alábbi képen látható (a helyőrzőket dupla kapcsos zárójelek közé kell tenni - {{placeholder_name}}).

![Kezdőlap kapcsos zárójelek közötti helyőrző szöveggel](/img/config/site-templates-list.png)

Ezután egyszerűen hozzáadhatsz egy megfelelő regisztrációs mezőt a pénztári űrlapodhoz az adatok rögzítéséhez. A sablonválasztáshoz használt ugyanaz a pénztári űrlapszerkesztő lehetővé teszi, hogy egyéni mezőket helyezz el a sablonválasztó mellett:

![Sablonválasztás és regisztrációs mezők a pénztári űrlap szerkesztőjében](/img/config/checkout-form-template-step.png)

Az ügyfeled ezután kitöltheti ezt a mezőt a regisztráció során.

![Frontend pénztári űrlap sablonválasztóval](/img/config/frontend-template-chooser.png)

Az Ultimate Multisite ezután automatikusan lecseréli a helyőrzőket az ügyfél által megadott adatokra.

![Helyőrzők lecserélve ügyféladatokra a webhelyen](/img/config/site-templates-list.png)

### A „helyőrzőkkel teli sablon” probléma megoldása {#solving-the-template-full-of-placeholders-problem}

Mindez nagyszerű, de belefutunk egy csúnya problémába: a webhelysablonjaink – amelyeket az ügyfeleink meglátogathatnak – tele vannak csúnya helyőrzőkkel, amelyek nem sokat mondanak.

Ennek megoldására lehetőséget kínálunk hamis értékek beállítására a helyőrzőkhöz, és ezeket az értékeket használjuk a tartalmuk keresésére és cseréjére a sablonwebhelyeken, miközben az ügyfeleid látogatják őket.

A sablonhelyőrző-szerkesztőt úgy érheted el, hogy a **Ultimate Multisite > Settings > Sites** menüpontra lépsz, majd az oldalsávon a **Edit Placeholders** hivatkozásra kattintasz.

![Webhelysablon-beállítások a Sites beállítási oldal alatt](/img/config/settings-sites-templates-section.png)

Ez elvisz a helyőrzők tartalomszerkesztőjéhez, ahol hozzáadhatod a helyőrzőket és a hozzájuk tartozó tartalmat.

![Sablonhelyőrzők tartalomszerkesztőjének belépési pontja](/img/config/settings-sites-templates-section.png)
