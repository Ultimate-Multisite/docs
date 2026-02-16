---
title: Ügyfélfiók oldal
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# Az ügyfeled fiókoldala (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Amikor az ügyfelek előfizetnek egy csomagra a hálózatodon, hozzáférést kapnak egy weboldalhoz és annak vezérlőpultjához, ahol fontos információkat találnak a fizetéseikről, tagságaikról, domainjeikről, csomagkorlátozásaikról stb.

Ebben az útmutatóban végigvezetünk az ügyfél fiókoldán, és megmutatjuk, mit láthatnak és tehetnek az ügyfeleid ezen az oldalon.

## A fiókoldal

A fiókoldal a **Fiók** menüpontra kattintva érhető el az ügyfeled vezérlőpultján.

![Fiók menü az ügyfél vezérlőpultján](/img/admin/dashboard.png)

![Az ügyfél fiókoldálának áttekintése](/img/admin/dashboard.png)

Miután az ügyfél rákattint, áttekintést kap a tagságáról, számlázási címéről, számláiról, domainjeiről, oldal-korlátozásairól, és lehetősége van a **Weboldal sablon** módosítására is (ha ez engedélyezett a hálózatodon).

Emellett másik csomagra válthat, vagy megvásárolhat egy másik csomagot vagy szolgáltatást, amit kínálsz. Nézzük meg részletesen az egyes szakaszokat.

### Tagság áttekintése:

Az első blokk közvetlenül az ügyfeled weboldal neve alatt a jelenlegi csomag és a hozzá vásárolt szolgáltatások/kiegészítők áttekintését mutatja. A blokk megjeleníti a tagsági számot, az érte fizetett kezdeti összeget, a csomag és az esetleges szolgáltatások/kiegészítők költségét, valamint azt, hogy hányszor történt számlázás ehhez a tagsághoz. Az ügyfél azt is láthatja, hogy a tagság **Aktív**, **Lejárt** vagy **Lemondott** állapotban van-e.

![Tagság áttekintése a csomaggal, összeggel és számlázási részletekkel](/img/admin/memberships-list.png)

Közvetlenül ez alatt az ügyfeled láthatja az **Erről a weboldalról** és a **Weboldal korlátok** blokkokat. Ezek a blokkok megmutatják a csomagjukhoz tartozó összes korlátozást: tárhelyméret, bejegyzések, oldalak, látogatók stb. Ezeket a korlátokat az egyes csomagok oldalán tudod beállítani az **Ultimate Multisite > Termékek** menüpontban.

![Erről a weboldalról és Weboldal korlátok blokkok a csomag korlátozásaival](/img/admin/dashboard.png)

A **Tagságod** jobb oldalán az ügyfelek a **Módosítás** gombra kattinthatnak. Ez megjeleníti az összes elérhető csomagot és kiegészítőt/szolgáltatást. Ha másik csomagot választanak, az új csomag korlátozásai lépnek érvénybe a jelenlegi tagság korlátozásai helyett – függetlenül attól, hogy alacsonyabb vagy magasabb szintű csomagra váltanak.

Ha azonban az ügyfeleid a jelenlegi tagságukhoz vásárolnak kiegészítőket vagy szolgáltatásokat – például több tárhelyet vagy látogatói keretet –, a jelenlegi tagság nem változik, csak az új kiegészítők kerülnek hozzáadásra.

Fontos, hogy ezen a tagságváltó oldalon nem lehet kuponkódokat hozzáadni. Ha az ügyfél az első tagság megvásárlásakor használt kuponkódot, az az új tagságra is érvényes lesz.

### Számlázási cím frissítése:

A fiókoldalon az ügyfelek a számlázási címüket is frissíthetik. Ehhez csak a _Számlázási cím_ melletti **Frissítés** gombra kell kattintaniuk.

![Számlázási cím szakasz a Frissítés gombbal](/img/admin/customers-list.png)

Egy új ablak jelenik meg az ügyfél számára. Csak ki kell töltenie az új címet, és a _Módosítások mentése_ gombra kell kattintania.

![Számlázási cím frissítési űrlap](/img/admin/customers-list.png)

### Weboldal sablon módosítása:

Ahhoz, hogy az ügyfeleid módosíthassák a weboldal sablonjukat, menj az **Ultimate Multisite > Beállítások > Weboldalak** menüpontra, és kapcsold be a **Sablonváltás engedélyezése** opciót.

Emellett az **Ultimate Multisite > Termékek** menüpontban válaszd ki a csomagjaidat, és lépj a **Weboldal sablonok** fülre. Győződj meg róla, hogy a **Weboldal sablonok engedélyezése** opció be van kapcsolva, és a **Weboldal sablon kiválasztási mód** beállításnál az **Elérhető weboldal sablonok kiválasztása** van kiválasztva.

![Termék weboldal sablonok fül a sablon kiválasztási móddal](/img/config/product-site-templates.png)

Láthatod az összes elérhető weboldal sablont a weboldalon. Válaszd ki, melyeket szeretnéd elérhetővé tenni, és melyeket nem az adott csomag előfizetői számára. Ne feledd, hogy ez a beállítás a pénztár űrlapra is hatással van, tehát a **Nem elérhető**-ként beállított sablonok nem jelennek meg a regisztrációs oldalon ennél a csomagnál.

Most az ügyfeleid a fiókoldalukon a **Weboldal sablon módosítása** gombra kattinthatnak.

![Weboldal sablon módosítása gomb a fiókoldalon](/img/admin/dashboard.png)  
Megjelenik az összes elérhető weboldal sablon listája ehhez a csomaghoz.

![Elérhető weboldal sablonok listája a csomaghoz](/img/config/site-templates-list.png)

Miután kiválasztották, melyikre szeretnének váltani, megerősítést kérnek tőlük.

![Weboldal sablon váltás megerősítő párbeszédablak](/img/admin/dashboard.png)

A megerősítés bekapcsolása és a **Váltás feldolgozása** gombra kattintás után az új weboldal sablon lesz használatban az ügyfeled weboldalán.

### Egyéni domainek hozzáadása:

Az ügyfeleidnek lehetőségük van egyéni domain hozzáadására is ehhez a csomaghoz a fiókoldalukon. Ahhoz, hogy az ügyfelek egyéni domaineket használhassanak, menj az **Ultimate Multisite > Beállítások > Domain átirányítás** menüpontra.

Kapcsold be a **Domain átirányítás engedélyezése** opciót. Ez lehetővé teszi az ügyfeleid számára, hogy egyéni domaineket használjanak hálózati szinten.

Ne felejtsd el azt is ellenőrizni, hogy a domain átirányítás engedélyezve van-e termékszinten is – mivel korlátozhatod, hogy egy termék ne engedélyezze az ügyfeleknek egyéni domainek használatát.

Menj az **Ultimate Multisite > Termékek** menüpontra. Válaszd ki a kívánt csomagot, és lépj az **Egyéni domainek** fülre. Kapcsold be az **Egyéni domainek engedélyezése** opciót.

![Egyéni domainek fül az Egyéni domainek engedélyezése kapcsolóval](/img/config/product-custom-domains.png)

Ez lehetővé teszi az összes, erre a csomagra előfizető ügyfél számára az egyéni domainek használatát. Most a fiókoldalon az ügyfeleid egyéni domaint adhatnak hozzá a **Domain hozzáadása** gombra kattintva.

![Domain hozzáadása gomb a fiókoldalon](/img/admin/domains-list.png)

Az első megjelenő ablakban az ügyfelek egy üzenetet látnak, amely útmutatást ad a DNS rekordok frissítéséhez, hogy az egyéni domain működjön a hálózatodon.

![DNS útmutató egyéni domain hozzáadásakor](/img/admin/domains-list.png)

Ezt az üzenetet te szerkesztheted az **Ultimate Multisite > Beállítások > Domain átirányítás > Új domain hozzáadása útmutató** menüpontban.

![Új domain hozzáadása útmutató beállítás a Domain átirányításban](/img/config/settings-domain-mapping.png)

A **Következő lépés** gombra kattintva az ügyfelek megadhatják az egyéni domain nevét, és kiválaszthatják, hogy ez legyen-e az elsődleges domain. Ne feledd, hogy az ügyfeleid több egyéni domaint is használhatnak a weboldaljukhoz, így kiválaszthatják, melyik legyen az elsődleges.

![Egyéni domain név megadása az elsődleges domain opcióval](/img/admin/domains-list.png)

A **Domain hozzáadása** gombra kattintás után a domain hozzáadódik az ügyfeled fiókjához. Már csak a domain regisztrátornál kell módosítaniuk ennek az egyéni domainnek a DNS rekordjait.

### Jelszó módosítása:

A fiók vezérlőpultján belül az ügyfeleid a jelszavukat is módosíthatják a **Jelszó módosítása** gombra kattintva.

![Jelszó módosítása gomb a fiókoldalon](/img/admin/dashboard.png)

Megjelenik egy új ablak, ahol az ügyfeleknek meg kell adniuk a jelenlegi jelszavukat, majd be kell írniuk az új jelszót, amelyet használni szeretnének.

![Jelszó módosítása űrlap a jelenlegi és új jelszó mezőkkel](/img/admin/dashboard.png)

### Veszélyzóna:

Van két opció a **Veszélyzóna** részben: **Weboldal törlése** és **Fiók törlése**. Mindkettő a Veszélyzónában található, mert ezek a műveletek visszafordíthatatlanok. Ha az ügyfeleid törlik a weboldalukat vagy a fiókjukat, nem tudják visszaállítani őket.

![Veszélyzóna a Weboldal törlése és Fiók törlése opciókkal](/img/admin/dashboard.png)

Ha az ügyfeleid bármelyik opcióra kattintanak, egy ablak jelenik meg, ahol be kell kapcsolniuk a weboldal vagy fiók eltávolításának opcióját, és figyelmeztetést kapnak, hogy ez a művelet nem vonható vissza.

![Weboldal törlése megerősítő párbeszédablak](/img/admin/dashboard.png)

![Fiók törlése megerősítő párbeszédablak](/img/admin/dashboard.png)

Ha törlik a weboldalukat, a fiókjuk és tagságuk érintetlen marad. Csak a weboldalukon lévő összes tartalmat veszítik el. Ha törlik a fiókjukat, az összes weboldal, tagság és a fiókhoz kapcsolódó információ elvész.
