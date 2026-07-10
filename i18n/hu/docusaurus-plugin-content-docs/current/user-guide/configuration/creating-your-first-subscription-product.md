---
title: Az első előfizetéses terméked létrehozása
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Az első előfizetéses termék létrehozása (v2) {#creating-your-first-subscription-product-v2}

_**FONTOS MEGJEGYZÉS: Ez a cikk csak az Ultimate Multisite 2.x verziót használóknak szól. Ha az 1.x verziót használod,**_ **_**lásd ezt a cikket**_**.

Ahhoz, hogy elindítsd a hálózatodat, és elkezdhesd értékesíteni szolgáltatásaidat a potenciális felhasználóknak, különböző előfizetési lehetőségekre van szükséged. Hogyan hozhatod létre ezeket a termékeket? Milyen típusú termékeket kínálhatsz? Ebben a cikkben mindent áttekintünk, amit a termékekről tudnod kell.

## Terméktípus {#product-type}

Az Ultimate Multisite segítségével két termékkategóriát kínálhatsz ügyfeleidnek: **csomagokat** és **kiegészítőket** **(Order Bump)**. A kiegészítők két típusra oszthatók:**csomagkiegészítők** és **szolgáltatások**. A következőkben megnézzük a különbségeiket és sajátosságaikat.

  * **Csomagok** : az Ultimate Multisite alapvető termékei. Az ügyfelednek csak akkor lehet tagsága, ha az egy csomaghoz kapcsolódik. Egy csomag egy vagy több oldalt biztosít az ügyfeleidnek (ez a csomagod beállításaitól függ), a termékszerkesztő oldalon megadott korlátozásokkal.

  * **Csomagkiegészítők** : olyan kiegészítők, amelyek közvetlenül hatnak az Ultimate Multisite csomagok funkcióira. Módosítják a korlátozásokat, vagy új erőforrásokat, pluginokat vagy témákat adnak hozzá az ügyfeled által megvásárolt eredeti csomaghoz. Például egy alapcsomag engedélyezhet havi 1 000 látogatást, és elérhetővé tehetsz egy csomagkiegészítőt, amely ezt a számot 10 000-re növeli.

  * **Szolgáltatások:** olyan kiegészítők, amelyek nem módosítják az Ultimate Multisite funkcióit. Ezek olyan feladatok, amelyeket az ügyfeled számára elvégzel a megvásárolt csomagon felül. Például az ügyfeled vásárolhat egy csomagot, amely egyetlen oldal használatát teszi lehetővé, és fizethet egy extra szolgáltatásért is, amely elkészíti ennek az oldalnak a dizájnját.

## Termékek kezelése {#managing-products}

Sokak számára az Ultimate Multisite **Termékek** lapja **(Ultimate Multisite > Termékek)** megfeleltethető a hagyományos tárhelyszolgáltatási környezetben használt csomagoknak.

Az Ultimate Multisite-on belül a Termékek lap határozza meg az adott termékre vagy szolgáltatásra alkalmazandó felépítést és korlátozásokat. Ezek a felépítések kiterjednek a termék vagy szolgáltatás leírására, árára, adóira és jogosultságaira.

Ez a szakasz segít megérteni az Ultimate Multisite ezen alapvető sarokkövét.

![Terméklista oldal](/img/config/products-list.png)

## Termékek hozzáadása {#adding-products}

Legyen szó csomagról, csomagkiegészítőről vagy szolgáltatásról, egy új elem definiálásának belépési pontja az **Ultimate Multisite > Termékek > Termék hozzáadása** útvonalon érhető el.

![Termék hozzáadása gomb](/img/config/product-add-button.png)

A felület két fő részből áll. Bal oldalon több lap található, amelyek segítenek a termék meghatározásában, jobb oldalon pedig néhány szakasz a termék alapárának, aktív állapotának és termékképének megadásához.

![Termékszerkesztő oldal áttekintése](/img/config/product-edit-full.png)

### Leírás {#description}

Az alapvető termékinformációk a terméknév és leírás megadásával határozhatók meg. Ezek az azonosítók mindenhol megjelennek, ahol szükség van a termékinformációkra, például a csomag- és árkiválasztásnál, számlákon, upgrade-eknél és hasonló helyeken.

![Termékleírás szakasz](/img/config/product-description.png)

### Árazási típus {#pricing-type}

A felület jobb oldalán meghatározható az alapárazás.

![Árazási és mentési szakasz](/img/config/product-pricing-save.png)

Az Ultimate Multisite három különböző árazási típust támogat. A **fizetős** opció a termék áráról és számlázási gyakoriságáról kér információt a hálózati adminisztrátortól.

### Árazás {#pricing}

Az árösszetevő határozza meg a termék alapárát és a számlázási intervallumot.

![Árazási és mentési szakasz](/img/config/product-pricing-save.png)

így például egy $29.99 ár 1 hónapos beállítással havonta $29.99 összeget számláz. Hasonlóképpen, egy $89.97 ár 3 hónapos beállítással negyedévente ezt az összeget számlázza.

### Számlázási ciklusok {#billing-cycles}

A számlázási ciklusok szakasz a fent említett számlázási intervallum gyakoriságát határozza meg, és általában szerződések vagy fix időtartamok összefüggésében értelmezendő.

![Árazási és mentési szakasz](/img/config/product-pricing-save.png)

Például egy $29.99 termékár 1 hónapos intervallummal és 12 számlázási ciklussal havi $29.99 összeget számlázna a termékért a következő 12 hónap során. Más szóval egy ilyen beállítás 12 hónapra havi $29.99 fix árú időszakot hozna létre, majd a számlázás megszűnne.

### Próbaidőszak {#trial-period}

A próbaidőszak-ajánlat kapcsolójának engedélyezése lehetővé teszi a hálózati adminisztrátor számára, hogy próbaidőszakot határozzon meg a termékhez.

![Árazási és mentési szakasz](/img/config/product-pricing-save.png)

A próbaidőszak alatt az ügyfelek ingyenesen használhatják a terméket, és nem történik számlázás, amíg a próbaidőszak le nem jár.

### Beállítási díj {#setup-fee}

A csomagodra beállítási díjat is alkalmazhatsz.

![Árazási és mentési szakasz](/img/config/product-pricing-save.png)

Ez azt jelenti, hogy az ügyfeled az első terheléskor egy extra összeget fizet (az árterven felül), amely megfelel az ebben a szakaszban meghatározott díjnak.

### Aktív {#active}

Az aktív kapcsoló ténylegesen meghatározza, hogy a termék elérhető-e az ügyfelek számára új regisztrációkhoz.

![Aktív kapcsoló](/img/config/product-active.png)

Ha már vannak meglévő ügyfelek ezen a csomagon, a kapcsoló letiltott állapotba állítása gyakorlatilag meglévő ügyfelekre korlátozza a csomagot, és eltávolítja a jövőbeli regisztrációk közül. **A csomagon lévő meglévő ügyfelek továbbra is számlázásra kerülnek**, amíg át nem kerülnek egy új csomagba, vagy el nem távolítják őket a csomagból.

### Termékkép {#product-image}

A **Kép feltöltése** gomb lehetővé teszi a hálózati adminisztrátor számára, hogy a médiatárból válasszon ki vagy töltsön fel termékképet.

![Termékkép szakasz](/img/config/product-image.png)

### Törlés {#delete}

A **Termék törlése** gomb törli a terméket a rendszerből. Akkor jelenik meg, miután a termék közzé lett téve.

![Termék törlése szakasz](/img/config/product-delete.png)

Más törlésekkel ellentétben a termék nem kerül semmilyen lomtárállapotba. Így a törlés után a művelet visszafordíthatatlan.

### Termékopciók {#product-options}

Miután az alapszintű termékinformációk meg vannak határozva, a termékbeállítások segítik a hálózati rendszergazdát a termék konkrét attribútumainak további meghatározásában.

#### Általános {#general}

Az **Általános** fül a termék olyan általános attribútumait határozza meg, amelyek egyik másik termékspecifikus fülre sem vonatkoznak.

![Általános fül](/img/config/product-general-tab.png)

Az önmagáért beszélő **termék slug** azt a slugot határozza meg, amellyel a termék az URL-ekben és az Ultimate Multisite más területein azonosítható.

Az Ultimate Multisite több terméktípust támogat, nevezetesen díjcsomagot, csomagot és szolgáltatást. A **Termékbeállítások** fülei dinamikusan igazodnak a megadott terméktípustól függően.

Az **Ügyfélszerepkör** határozza meg azt a szerepkört, amelyet az ügyfél a site létrehozásakor kap. A legtöbb hálózati rendszergazda esetében ez általában az Ultimate Multisite alapértelmezett értéke vagy az Administrator. Az Ultimate Multisite alapértelmezett szerepköre az **Ultimate Multisite > Settings > Login & Registration** alatt állítható be.

![Ügyfélszerepkör beállításai](/img/config/product-customer-role-settings.png)

#### Fel- és visszaváltások {#up--downgrades}

Ez a fül határozza meg azokat a fel- és visszaváltási útvonalakat, amelyek az ügyfél számára az adott szintjén belül elérhetők.

A fogalom megértéséhez vegyünk egy példát, ahol egy réspiaci Ultimate Multisite telepítés tanulásmenedzsment-megoldásokat kínál ügyfeleinek. Ennek eléréséhez három díjcsomag (Basic, Plus és Premium) van meghatározva, és minden díjcsomaghoz konkrét pluginek vannak aktiválva (a pluginek aktiválására vonatkozó útmutatásokat lásd később ebben a szakaszban).

Ha az Ultimate Multisite telepítés üzleti webhelyeket vagy eCommerce webhelyeket is kiszolgál, ezekhez a díjcsomagokhoz eltérő pluginek telepítése és aktiválása lehet szükséges.

Ennek megfelelően nem lenne kívánatos, és problémákat okozhatna, ha az eLearning ügyfelek eCommerce díjcsomagokra válthatnának, mivel ezek a díjcsomagok, árak és korlátozások nem feltétlenül illeszkednek megfelelően.

Ezért az ügyfél útvonalának korlátozása és az incidensek megelőzése érdekében a hálózati rendszergazda meghatározhat egy díjcsomagcsoportot, és ezen a csoporton belül megadhatja azokat a díjcsomagokat, amelyekre az ügyfél átválthat.

![Fel- és visszaváltások fül](/img/config/product-upgrades.png)

Díjcsomagcsoport meghatározásához adja meg a kompatibilis díjcsomagokat a **díjcsomagcsoport** listában. A **terméksorrend** határozza meg, hogyan legyenek a díjcsomagok rendezve és megjelenítve a legalacsonyabbtól a legmagasabbig.

Az Ultimate Multisite tartalmaz egy **order bump** funkciót is, amellyel megfelelő kiegészítő termékek és szolgáltatások adhatók a díjcsomagokhoz. Ezek további tételekként jelennek meg az ügyfél számára, amelyeket a fizetéskor vagy felváltás során hozzáadhat a díjcsomagokhoz.

#### Árváltozatok {#price-variations}

Az árváltozatok lehetővé teszik a hálózati rendszergazda számára, hogy az időtartamtól függően alternatív árszinteket adjon meg. Ez a beállítás lehetővé teszi, hogy ugyanahhoz a termékhez havi, negyedéves, éves vagy bármilyen más számlázási időszak legyen kínálható. Például beállíthat egy terméket $29.99/hó áron, kedvezményes éves opcióval $249.99/év áron.

![Árváltozatok fül](/img/config/product-price-variations-tab.png)

Árváltozatok létrehozásához állítsa az **Árváltozatok engedélyezése** kapcsolót aktívra, majd kattintson az **Új árváltozat hozzáadása** gombra.

![Termék árváltozatai](/img/config/product-price-variations.png)

Egy változat megadásához állítsa be a változat időtartamát, időszakát és árát. További változatok a gomb ismételt megnyomásával adhatók meg.

Például, ha az alaptermék ára havi $29.99, hozzáadhatja a következőket:

  * **3 hónap** $79.99 áron (kis kedvezmény a havi árhoz képest)
  * **1 év** $249.99 áron (jelentős kedvezmény éves elköteleződés esetén)

:::tip Számlázási időszak kapcsolójának megjelenítése a frontenden

Az árváltozatok önmagukban nem adnak hozzá kapcsolót vagy váltót a frontend fizetéshez. Ahhoz, hogy az ügyfelek válthassanak a számlázási időszakok között (pl. havi / éves), hozzá kell adnia egy **Időszakválasztás** mezőt a fizetési űrlaphoz. Lépésről lépésre követhető útmutatásért lásd: [Fizetési űrlapok: időszakválasztó kapcsoló hozzáadása](checkout-forms#adding-a-period-selection-toggle).
:::

#### Adók {#taxes}

Az **Adók** fül összhangban van az **Ultimate Multisite > Settings > Taxes** alatt megadott adóbeállításokkal, pontosabban a meghatározott adókulcsokkal. Az adók engedélyezéséhez és az alkalmazandó adókulcsok meghatározásához kérjük, tekintse meg az **Ultimate Multisite: Settings** dokumentációját.

![Adók fül](/img/config/product-taxes.png)

Egy korábbi példában meghatároztunk egy 7,25%-os helyi adókulcsot, amely a kaliforniai (Amerikai Egyesült Államok) ügyfelekre vonatkozik.

Miután az adókulcs meg van határozva az **Ultimate Multisite > Settings > Manage Tax Rates** alatt, termékszinten kiválasztható.

![Adók fül](/img/config/product-taxes.png)

Annak jelzésére, hogy egy termék adóköteles tétel, állítsa az **Adóköteles** kapcsolót aktívra, és válassza ki az alkalmazandó adókulcsot az Adókategória legördülő menüből.

#### Site sablonok {#site-templates}

Lényegében a site sablonok teljes WordPress webhelyek, amelyeket az ügyfél site-jára klónoznak az előfizetésük kezdetén.

![Site sablonok fül](/img/config/product-site-templates.png)

A hálózati rendszergazda a sablon site-ot egy szokásos WordPress site-ként hozza létre és konfigurálja, aktivált és konfigurált témákkal, pluginekkel és tartalommal. A sablon site szó szerint kerül klónozásra az ügyfélhez.

Ez a fül lehetővé teszi a hálózati rendszergazda számára, hogy meghatározza a site sablonok viselkedését új előfizetés esetén. A site sablonok használatához ennél a díjcsomagnál állítsa a **Site sablonok engedélyezése** kapcsolót aktív állapotba.

Ha a **Site sablonok engedélyezése** ki van kapcsolva, a díjcsomag ügyfelei nem választhatnak sablonokat még akkor sem, ha egy fizetési űrlap, megosztható hivatkozás vagy URL-paraméter egyébként elérhetővé tenné a sablonokat. Az Ultimate Multisite mostantól egy tartalék láncon keresztül érvényesíti ezt a korlátot az elérhető belépési pontokon: először a díjcsomag beállításait ellenőrzi, majd a fizetési űrlap sablonbeállításait, végül az előre kiválasztott vagy URL-ben megadott sablonokat. Ez következetesen tartja a díjcsomagkorlátokat, és megakadályozza, hogy sablonok jelenjenek meg olyan termékeknél, amelyeknek nem kellene kínálniuk őket.

A **site sablon kiválasztási mód** meghatározza a site sablonok viselkedését az előfizetési folyamat során.

A **D** **efault** beállítás a checkout űrlap lépéseit követi. Ha a hálózati rendszergazda meghatározott egy sablonkiválasztási lépést a checkout folyamatban, és a lépés sablonokkal lett definiálva, ez a beállítás figyelembe veszi a checkout lépésben meghatározott irányelveket.

Az **A** **ssign Site Template** megadása kikényszeríti a megadott sablon kiválasztását. Ennek következtében a checkout folyamatban lévő minden sablonkiválasztási lépés eltávolításra kerül.

Végül a **C** **hoose Available Site Templates** felülírja a checkout lépésben megadott sablonokat az ebben a beállításban kiválasztott sablonokkal. Egy előre kiválasztott sablon is meghatározható, hogy segítse az ügyfelet a választásban.

Végső soron, ha a hálózati rendszergazda azt szeretné, hogy a sablonkiválasztás a checkout lépésekben történjen, a ' _default_ ' beállítás elegendő lesz. Alternatívaként, ha el szeretné távolítani és zárolni szeretné a sablonkiválasztást, és a kiválasztást a plan beállításaira kívánja bízni, az ' _assign new template_ ' vagy a ' _choose available site templates_ ' lehetőségek lehetnek kívánatosak.

#### Site-ok {#sites}

A **Site-ok** lap az Ultimate Multisite korlátozási funkciójának része.

![Site-ok lap](/img/config/product-sites.png)

Ez a beállítás meghatározza azon site-ok maximális számát, amelyeket egy ügyfél létrehozhat a membershipje alatt.

A korlátozás engedélyezéséhez állítsa a **limit sites** kapcsolót aktív állapotba, és adja meg a site-ok maximális számát a **site allowance** mezőben.

#### Látogatások {#visits}

A **Látogatások** lap az Ultimate Multisite korlátozási rendszerének további része. Ez a beállítás lehetővé teszi az egyedi látogatók elszámolását és későbbi korlátozását egy ügyfél site-ján.

![Látogatások lap](/img/config/product-visits.png)

Marketing szempontból a hálózati rendszergazdák ezt a beállítást eszközként használhatják arra, hogy ösztönözzék az ügyfeleket a planjük frissítésére, amint elérik a korlátokat. Ez a beállítás abban is segítheti a hálózati rendszergazdát, hogy visszafogja és megelőzze a site-ok túlzott forgalmát a rendszererőforrások megőrzése érdekében.

A funkció használatához állítsa a **limit unique visits** kapcsolót aktív állapotba, és adja meg az egyedi látogatók maximális számát a **unique visits quota** mezőben.

Amint ezt a korlátot eléri, az Ultimate Multisite megszünteti az ügyfél site-jának kiszolgálását, ahelyett hogy üzenetet jelenítene meg arról, hogy a korlátokat túllépték.

#### Felhasználók {#users}

Az Ultimate Multisite 'Felhasználók' korlátozásai lehetővé teszik a hálózati rendszergazda számára, hogy korlátokat szabjon a létrehozható és szerepkörökhöz rendelhető felhasználók számára.

![Felhasználók lap](/img/config/product-users.png)

A korlátozási funkció engedélyezéséhez állítsa a **limit user** kapcsolót aktív állapotba úgy, hogy jobbra csúsztatja.

Ezután minden korlátozandó szerepkörnél állítsa a mellette lévő kapcsolót aktív állapotba, és határozza meg a maximális felső korlátot a megfelelő mezőben.

#### Bejegyzéstípusok {#post-types}

A **Bejegyzéstípusok** lap lehetővé teszi a hálózati rendszergazda számára, hogy részletes korlátokat szabjon a WordPress bejegyzéstípusainak széles körére.

![Bejegyzéstípusok lap](/img/config/product-post-types.png)

A WordPress felépítéséből adódóan a bejegyzések és bejegyzéstípusok az alapvető funkcionalitás jelentős összetevői, ezért az Ultimate Multisite korlátozási rendszere úgy lett kialakítva, hogy segítse a hálózati rendszergazdát a korlátok megállapításában és fenntartásában.

A korlátozási alrendszer engedélyezéséhez állítsa a **limit post types** kapcsolót aktív állapotba úgy, hogy jobbra csúsztatja.

Ezután minden korlátozandó bejegyzéstípusnál kapcsolja be azt jobbra csúsztatva, és adja meg a maximális felső korlátot a megfelelő mezőben.

#### Lemezterület {#disk-space}

A **Lemezterület** lap lehetővé teszi a hálózati rendszergazdák számára, hogy korlátozzák az ügyfelek által felhasznált területet.

![Lemezterület lap](/img/config/product-disk-space.png)

Jellemzően egy WordPress multisite esetén az alapfájlok meg vannak osztva az összes site között, és külön könyvtárak jönnek létre a médiafájlokhoz és feltöltésekhez, amelyekre ezek a beállítások és korlátozások vonatkoznak.

A lemezhasználati korlátozás engedélyezéséhez állítsa a **limit disk size per site** kapcsolót aktív állapotba úgy, hogy jobbra csúsztatja.

Ezután adja meg a maximális felső korlátot megabájtban a **disk space allowanc** e mezőben.

#### Egyéni domain {#custom-domain}

Ennek az opciónak a bekapcsolásával kifejezetten ezen a planen engedélyezheti az egyéni domaineket.

![Egyéni domainek lap](/img/config/product-custom-domains.png)

#### Themes {#themes}

A termékbeállításokon belüli **Themes** lap lehetővé teszi a hálózati rendszergazda számára, hogy theme-eket tegyen elérhetővé az ügyfelek számára kiválasztásra, és opcionálisan kikényszerítse a theme állapotát.

![Themes lap](/img/config/product-themes.png)

_**Megjegyzés: Ahhoz, hogy a theme-ek elérhetővé váljanak az ügyfelek számára, a hálózati rendszergazdának hálózati szinten engedélyeznie kell őket.**_

![Hálózati theme-ek oldala](/img/config/product-themes-network-enabled.png)

A **visibility** opció meghatározza, hogy ez a theme látható-e az ügyfél számára, amikor a saját site-ján az **Appearance > Themes** lapot megtekinti. Ennek az opciónak **Hidden** értékre állítása eltávolítja a theme-et a nézetből, és így korlátozza annak kiválasztását és aktiválását.

![Themes lap](/img/config/product-themes.png)

A **behavior** választás lehetővé teszi a hálózati rendszergazda számára, hogy meghatározza a theme állapotát az ügyfél site-jának létrehozásakor.

Az **A** **vailable** állapotban a theme elérhetővé válik az ügyfél számára önálló aktiválásra. Ezzel szemben a **Not Available** állapot megvonja az ügyféltől a theme aktiválásának lehetőségét. Végül a **Force Activate** opció kikényszeríti a theme kiválasztását és aktiválását, így alapértelmezettként állítja be a site létrehozásakor.

#### Pluginok {#plugins}

A Themes laphoz hasonlóan az Ultimate Multisite lehetővé teszi a hálózati rendszergazda számára, hogy meghatározza a pluginok láthatóságát az ügyfelek számára, valamint azok állapotát egy új site létrehozásakor.

![Pluginok lap](/img/config/product-plugins.png)

A **visibility** legördülő menü lehetővé teszi, hogy a plugin látható vagy rejtett legyen az ügyfél elől, amikor azt a site-ján a Plugins menüponton keresztül megtekinti.

A hálózati adminisztrátor tovább szabályozhatja a pluginek viselkedését a viselkedés legördülő menü beállításainak használatával.

![Pluginek fül](/img/config/product-plugins.png)

A **Default** kiválasztás a vásárló által kiválasztott site-sablonban meghatározott pluginállapotot veszi figyelembe. Így a sablonon belül aktivált pluginek aktiválva maradnak, amikor a sablont klónozzák a vásárló site-jára.

A **Force Activate** a site létrehozásakor aktív állapotba helyezi a plugint, míg ezzel szemben a **Force Inactivate** a site létrehozásakor deaktiválja a plugint. Mindkét esetben a plugin állapotát a vásárló manuálisan módosíthatja a WordPress Pluginek menüjén keresztül.

A **Force Activate & Lock** beállítás hasonlóan működik, de megakadályozza, hogy a vásárló módosítsa a plugin állapotát. Így a Force Activate and Lock beállítás aktív állapotba kényszeríti a plugint, és megakadályozza, hogy a vásárló deaktiválja. Hasonlóképpen a **Force Inactivate & Lock** beállítás inaktív állapotba kényszeríti a plugint, és megakadályozza, hogy a felhasználó aktiválja a plugint.

A hálózati adminisztrátornak érdemes lehet a Force Activate & Lock és a Force Inactivate & Lock beállításokat a site-sablonokkal együtt figyelembe vennie, mivel a sablonokon belüli pluginekre és pluginállapotokra hatással lehetnek ezek a beállítások, ha ki vannak választva.

#### Korlátozások visszaállítása {#reset-limitations}

A **Reset Limitations** fül visszaállítja a terméken meghatározott összes egyéni korlátot. A korlátozások visszaállításához kattintson a **reset limitations** gombra.

![Korlátozások visszaállítása fül](/img/config/product-reset-limitations.png)

A művelet megerősítéséhez csúsztassa a **confirm reset** kapcsolót aktív állapotba a jobb oldalon, majd kattintson a **reset limitations** gombra.

![Korlátozások visszaállítása fül](/img/config/product-reset-limitations.png)

## Termék szerkesztése, duplikálása vagy törlése {#edit-duplicate-or-delete-product}

A meglévő termékek szerkeszthetők, duplikálhatók vagy törölhetők az **Ultimate Multisite > Products** menüpontba navigálva, majd az egérrel a meglévő terméknév fölé húzva.

![Termék rámutatási műveletek](/img/config/product-hover-actions.png)
