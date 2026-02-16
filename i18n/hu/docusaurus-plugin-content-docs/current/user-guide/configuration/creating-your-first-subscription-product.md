---
title: Első előfizetési termék létrehozása
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# Az első előfizetési termék létrehozása (v2)

_**FONTOS: Ez a cikk kizárólag az Ultimate Multisite 2.x verziót használóknak szól. Ha az 1.x verziót használod,**_ **_**tekintsd meg ezt a cikket**_**.

A hálózatod működtetéséhez és a szolgáltatásaid potenciális felhasználóknak történő értékesítéséhez különböző előfizetési lehetőségekre van szükséged. Hogyan hozhatod létre ezeket a termékeket? Milyen típusú termékeket kínálhatsz? Ebben a cikkben mindent megtudhatsz a termékekről.

## Terméktípusok

Az Ultimate Multisite segítségével kétféle termékkategóriát kínálhatsz ügyfeleidnek: **csomagokat** és **kiegészítőket** **(Order Bump)**. A kiegészítők két típusra oszthatók: **bővítmények** és **szolgáltatások**. Nézzük meg a különbségeiket és sajátosságaikat.

  * **Csomagok**: az Ultimate Multisite alapvető termékei. Ügyfeleid csak akkor rendelkezhetnek tagsággal, ha az egy csomaghoz van csatolva. A csomag egy vagy több webhelyet biztosít az ügyfeleidnek (a csomag beállításaitól függően) az általad meghatározott korlátozásokkal, amelyeket a termékszerkesztő oldalon állíthatsz be.

  * **Bővítmények**: olyan kiegészítők, amelyek közvetlenül befolyásolják az Ultimate Multisite csomagok funkcionalitását. Módosítják a korlátozásokat, vagy új erőforrásokat, bővítményeket vagy sablonokat adnak az ügyfél által megvásárolt eredeti csomaghoz. Például egy alap csomag engedélyezhet havi 1000 látogatást, és elérhetővé tehetsz egy bővítményt, amely ezt 10 000-re növeli.

  * **Szolgáltatások**: olyan kiegészítők, amelyek nem módosítják az Ultimate Multisite funkcionalitását. Ezek olyan feladatok, amelyeket te végzel el az ügyfeled számára a megvásárolt csomagon felül. Például az ügyfeled vásárolhat egy csomagot, amely egyetlen webhelyet engedélyez, és fizethet egy extra szolgáltatásért is, amely a webhely dizájnját készíti el.

## Termékek kezelése

Sokak számára a **Termékek** fül az Ultimate Multisite-ban **(Ultimate Multisite > Products)** a hagyományos tárhelyszolgáltatások csomagjaihoz hasonlítható.

Az Ultimate Multisite-on belül a Termékek fül határozza meg az adott termékre vagy szolgáltatásra vonatkozó felépítést és korlátozásokat. Ezek a felépítések kiterjednek a termék vagy szolgáltatás leírására, árára, adóira és jogosultságaira.

Ez a rész segít megérteni az Ultimate Multisite ezen alapvető elemét.

![Terméklista oldal](/img/config/products-list.png)

## Termékek hozzáadása

Legyen szó csomagról, bővítményről vagy szolgáltatásról, az új elem létrehozásának kiindulópontja az **Ultimate Multisite > Products > Add Product** menüpont.

![Termék hozzáadása gomb](/img/config/product-add-button.png)

A felület két fő részből áll. A bal oldalon több fül található, amelyek segítenek a termék meghatározásában, a jobb oldalon pedig néhány szakasz a termék alapárának, aktív állapotának és termékképének beállításához.

![Termékszerkesztő oldal áttekintése](/img/config/product-edit-full.png)

### Leírás

Az alap termékinformációk a terméknév és leírás megadásával határozhatók meg. Ezek az azonosítók mindenhol megjelennek, ahol a termékinformációra szükség van, például a csomag- és árválasztásnál, számlákon, frissítéseknél és hasonló helyeken.

![Termékleírás szakasz](/img/config/product-description.png)

### Árképzés típusa

A felület jobb oldalán az alapár határozható meg.

![Árképzés és mentés szakasz](/img/config/product-pricing-save.png)

Az Ultimate Multisite három különböző árképzési típust támogat. A **fizetős** opció a hálózat adminisztrátorától kéri a termék árára és számlázási gyakoriságára vonatkozó információkat.

### Árképzés

Az árkomponens határozza meg a termék alapárát és számlázási időközét.

![Árképzés és mentés szakasz](/img/config/product-pricing-save.png)

Így például 29,99 $ ár 1 hónap beállítással havonta 29,99 $-t számláz. Hasonlóképpen, 89,97 $ ár 3 hónap beállítással negyedévente számlázza ezt az összeget.

### Számlázási ciklusok

A számlázási ciklusok szakasz meghatározza a fent említett számlázási időköz gyakoriságát, és általában szerződések vagy meghatározott időtartamok kontextusában értelmezendő.

![Árképzés és mentés szakasz](/img/config/product-pricing-save.png)

Például egy 29,99 $ áru termék 1 hónapos időközzel és 12 számlázási ciklussal havonta 29,99 $-t számláz a termékért a következő 12 hónapban. Más szóval, ez a beállítás egy 12 hónapos fix áras időszakot hoz létre havi 29,99 $-ért, majd a számlázás megszűnik.

### Próbaidőszak

A próbaidőszak felajánlása kapcsoló engedélyezésével a hálózat adminisztrátora próbaidőszakot határozhat meg a termékhez.

![Árképzés és mentés szakasz](/img/config/product-pricing-save.png)

A próbaidőszak alatt az ügyfelek szabadon használhatják a terméket, és nem kerül sor számlázásra, amíg a próbaidőszak le nem jár.

### Beállítási díj

A csomagodhoz beállítási díjat is meghatározhatsz.

![Árképzés és mentés szakasz](/img/config/product-pricing-save.png)

Ez azt jelenti, hogy az ügyfeled az első díjfizetéskor (a csomag árán felül) egy extra összeget fizet, amely megfelel az ebben a szakaszban meghatározott díjnak.

### Aktív

Az aktív kapcsoló lényegében azt határozza meg, hogy a termék elérhető-e az ügyfelek számára új regisztrációhoz.

![Aktív kapcsoló](/img/config/product-active.png)

Ha vannak meglévő ügyfelek ezen a csomagon, a kapcsoló kikapcsolt állapotba állítása gyakorlatilag „nagyapásítja" a csomagot, eltávolítva azt a jövőbeli regisztrációkból. **A csomagon lévő meglévő ügyfeleknek továbbra is kiállításra kerülnek a számlák**, amíg át nem kerülnek egy új csomagra, vagy el nem távolítják őket a csomagról.

### Termékkép

A **Kép feltöltése** gomb lehetővé teszi a hálózat adminisztrátorának, hogy a médiatár segítségével válasszon vagy töltsön fel termékképet.

![Termékkép szakasz](/img/config/product-image.png)

### Törlés

A **Termék törlése** gomb törli a terméket a rendszerből. Ez a gomb a termék közzététele után jelenik meg.

![Termék törlése szakasz](/img/config/product-delete.png)

Más törlésekkel ellentétben a termék nem kerül kukába. Ezért a törlés végleges és visszavonhatatlan.

### Termékbeállítások

Az alap termékinformációk meghatározása után a termékbeállítások segítenek a hálózat adminisztrátorának a termék specifikus attribútumainak további meghatározásában.

#### Általános

Az **Általános** fül a termék általános attribútumait határozza meg, amelyek nem tartoznak a többi termékspecifikus fül alá.

![Általános fül](/img/config/product-general-tab.png)

A magától értetődő **termék slug** határozza meg azt a slug-ot, amellyel a termék azonosítható az URL-ekben és az Ultimate Multisite más területein.

Az Ultimate Multisite több terméktípust támogat, nevezetesen a Csomagot, Bővítményt és Szolgáltatást. A **Termékbeállítások** fülek dinamikusan változnak a megadott terméktípustól függően.

Az **Ügyfél szerepkör** meghatározza, hogy milyen szerepkört kap az ügyfél a webhely létrehozásakor. A legtöbb hálózat adminisztrátor számára ez az Ultimate Multisite alapértelmezett vagy Adminisztrátor szerepkör lesz. Az Ultimate Multisite alapértelmezett szerepköre az **Ultimate Multisite > Settings > Login & Registration** menüpontban állítható be.

![Ügyfél szerepkör beállítások](/img/config/product-customer-role-settings.png)

#### Fel- és leminősítések

Ez a fül meghatározza az ügyfél számára elérhető frissítési és leminősítési útvonalakat az adott szinten belül.

Ennek megértéséhez vegyünk egy példát, ahol egy szűk piaci rést célzó Ultimate Multisite telepítés tanulásmenedzsment megoldásokat nyújt ügyfelei számára. Ennek eléréséhez három csomagot (Alap, Plusz és Prémium) határoznak meg, és minden csomaghoz specifikus bővítmények aktiválódnak (lásd később ebben a szakaszban a bővítmények aktiválásának utasításait).

Ha az Ultimate Multisite telepítés üzleti weboldalakat vagy e-kereskedelmi weboldalakat is kiszolgál, ezek a csomagok különböző telepített és aktivált bővítményeket igényelhetnek.

Emiatt nem lenne kívánatos és problémás lenne, ha az e-learning ügyfelek áttérhetnének e-kereskedelmi csomagokra, mivel ezek a csomagok, árak és korlátozások nem feltétlenül megfelelőek.

Ezért az ügyfél útvonalának korlátozása és az incidensek megelőzése érdekében a hálózat adminisztrátora meghatározhat egy csomagcsoportot, és azon belül megadhatja azokat a csomagokat, amelyekre az ügyfél áttérhet.

![Fel- és leminősítések fül](/img/config/product-upgrades.png)

Csomagcsoport meghatározásához add meg a kompatibilis csomagokat a **csomagcsoport** listában. A **termék sorrend** határozza meg, hogyan jelennek meg és rendeződnek a csomagok a legalacsonyabbtól a legmagasabbig.

Az Ultimate Multisite tartalmaz egy **order bump** funkciót is, ahol a megfelelő kiegészítő termékek és szolgáltatások hozzáadhatók a csomagokhoz. Ezeket az ügyfél számára további tételekként kínálják fel, amelyeket a fizetéskor vagy frissítéskor adhatnak a csomagokhoz.

#### Árvariációk

Az árvariációk lehetővé teszik a hálózat adminisztrátorának, hogy az időtartamtól függően alternatív árszinteket határozzon meg. Ez a beállítás lehetővé teszi 3 hónapos, 6 hónapos vagy éves árszintek létrehozását, vagy bármilyen más időtartamot és gyakoriságot a felhasználási eset szerint.

![Árvariációk fül](/img/config/product-price-variations.png)

Árvariációk létrehozásához állítsd az **árvariációk engedélyezése** kapcsolót aktív állapotba, és kattints az **Új árvarció hozzáadása** gombra.

Variáció megadásához állítsd be a variáció időtartamát, periódusát és árát. További variációk a gomb újbóli kattintásával adhatók hozzá.

![Árvariációk fül](/img/config/product-price-variations.png)

#### Adók

Az **Adók** fül az **Ultimate Multisite > Settings > Taxes** menüpontban meghatározott adóbeállításokhoz, és konkrétabban a meghatározott adókulcsokhoz igazodik. Az adók engedélyezéséhez és az alkalmazandó adókulcsok meghatározásához tekintsd meg az **Ultimate Multisite: Settings** dokumentációt.

![Adók fül](/img/config/product-taxes.png)

Egy korábbi példában helyi adókulcsot határoztunk meg 7,25%-kal, amely a kaliforniai (Amerikai Egyesült Államok) ügyfelekre vonatkozik.

Miután az adókulcs meghatározásra került az **Ultimate Multisite > Settings > Manage Tax Rates** menüpontban, kiválasztható a termék szintjén.

![Adók fül](/img/config/product-taxes.png)

Annak jelzéséhez, hogy egy termék adóköteles tétel, állítsd az **Adóköteles** kapcsolót aktív állapotba, és válaszd ki az alkalmazandó adókulcsot az Adókategória legördülő menüből.

#### Webhelysablonok

Lényegében a webhelysablonok teljes WordPress webhelyek, amelyek az ügyfél webhelyére klónozódnak az előfizetésük kezdetekor.

![Webhelysablonok fül](/img/config/product-site-templates.png)

A hálózat adminisztrátora létrehozza és konfigurálja a sablon webhelyet egy hagyományos WordPress webhelyként, aktivált és konfigurált sablonokkal, bővítményekkel és tartalommal. A sablon webhely változtatás nélkül klónozódik az ügyfélhez.

Ez a fül lehetővé teszi a hálózat adminisztrátorának, hogy meghatározza a webhelysablonok viselkedését új előfizetéskor. A webhelysablonok használatához állítsd a **webhelysablonok engedélyezése** kapcsolót aktív állapotba.

A **webhelysablon kiválasztási mód** határozza meg a webhelysablonok viselkedését az előfizetési folyamat során.

Az **Alapértelmezett** beállítás a fizetési űrlap lépéseit követi. Ha a hálózat adminisztrátora meghatározott egy sablonválasztási lépést a fizetési folyamatban, és a lépéshez sablonok vannak definiálva, ez a beállítás tiszteletben tartja a fizetési lépésben meghatározott irányelveket.

A **Webhelysablon hozzárendelése** opció megadása kikényszeríti a megadott sablon kiválasztását. Ennek következtében minden sablonválasztási lépés eltávolításra kerül a fizetési folyamatból.

Végül az **Elérhető webhelysablonok kiválasztása** felülírja a fizetési lépésben megadott sablonokat az ebben a beállításban kiválasztott sablonokkal. Egy előre kiválasztott sablon is meghatározható, hogy segítse az ügyfelet a választásban.

Összességében, ha a hálózat adminisztrátora azt szeretné, hogy a sablonválasztás a fizetési lépésekben történjen, az „_alapértelmezett_" beállítás elegendő. Alternatívaként a sablonválasztás eltávolításához és zárolásához, valamint a kiválasztás csomagbeállításokra delegálásához az „_új sablon hozzárendelése_" vagy „_elérhető webhelysablonok kiválasztása_" opciók lehetnek kívánatosak.

#### Webhelyek

A **Webhelyek** fül az Ultimate Multisite korlátozások funkcionalitásának része.

![Webhelyek fül](/img/config/product-sites.png)

Ez a beállítás meghatározza, hogy egy ügyfél maximum hány webhelyet hozhat létre a tagsága alatt.

A korlátozás engedélyezéséhez állítsd a **webhelyek korlátozása** kapcsolót aktív állapotba, és add meg a webhelyek maximális számát a **webhely keret** mezőben.

#### Látogatások

A **Látogatások** fül az Ultimate Multisite korlátozási rendszerének további része. Ez a beállítás lehetővé teszi az egyedi látogatók számának nyomon követését és ezt követő korlátozását az ügyfél webhelyén.

![Látogatások fül](/img/config/product-visits.png)

Marketing szempontból a hálózat adminisztrátorai ezt a beállítást arra használhatják, hogy ösztönözzék az ügyfeleket csomagjuk frissítésére, ha elérik a korlátokat. Ez a beállítás segíthet a hálózat adminisztrátorának a túlzott webhely-forgalom visszaszorításában és megelőzésében a rendszererőforrások megőrzése érdekében.

A funkció használatához állítsd az **egyedi látogatások korlátozása** kapcsolót aktív állapotba, és add meg az egyedi látogatók maximális számát az **egyedi látogatások kvóta** mezőben.

Ha elérik ezt a korlátot, az Ultimate Multisite abbahagyja az ügyfél webhelyének kiszolgálását, és helyette egy üzenetet jelenít meg, amely jelzi, hogy túllépték a korlátokat.

#### Felhasználók

Az Ultimate Multisite „Felhasználók" korlátozásai lehetővé teszik a hálózat adminisztrátorának, hogy korlátozza a létrehozható és szerepkörökhöz rendelhető felhasználók számát.

![Felhasználók fül](/img/config/product-users.png)

A korlátozások funkció engedélyezéséhez állítsd a **felhasználók korlátozása** kapcsolót aktív állapotba jobbra csúsztatva.

Ezután minden korlátozandó szerepkörhöz állítsd a mellette lévő kapcsolót aktív állapotba, és határozd meg a maximális felső határt a megfelelő mezőben.

#### Bejegyzéstípusok

A **Bejegyzéstípusok** fül lehetővé teszi a hálózat adminisztrátorának, hogy részletes korlátozásokat szabjon a WordPress kiterjedt bejegyzéstípusaira.

![Bejegyzéstípusok fül](/img/config/product-post-types.png)

A WordPress felépítéséből adódóan a bejegyzések és bejegyzéstípusok jelentős részét képezik az alapfunkcionalitásnak, ezért az Ultimate Multisite korlátozási rendszere úgy lett kialakítva, hogy segítse a hálózat adminisztrátorát a korlátozások létrehozásában és karbantartásában.

Ennek a korlátozási alrendszernek az engedélyezéséhez állítsd a **bejegyzéstípusok korlátozása** kapcsolót aktív állapotba jobbra csúsztatva.

Ezután minden korlátozandó bejegyzéstípusnál kapcsold be jobbra csúsztatva, és add meg a maximális felső határt a megfelelő mezőben.

#### Lemezterület

A **Lemezterület** fül lehetővé teszi a hálózat adminisztrátorai számára, hogy korlátozzák az ügyfelek által felhasznált tárhelyet.

![Lemezterület fül](/img/config/product-disk-space.png)

Jellemzően egy WordPress multisite-ban az alapfájlok megosztásra kerülnek az összes webhely között, és egyedi könyvtárak jönnek létre a médiafájlokhoz és feltöltésekhez, amelyekre ezek a beállítások és korlátozások vonatkoznak.

A lemezhasználat korlátozásának engedélyezéséhez állítsd a **lemezméret korlátozása webhelyenként** kapcsolót aktív állapotba jobbra csúsztatva.

Ezután add meg a maximális felső határt megabájtban a **lemezterület keret** mezőben.

#### Egyéni domain

Ennek az opciónak a bekapcsolásával kifejezetten ezen a csomagon engedélyezheted az egyéni domaineket.

![Egyéni domainek fül](/img/config/product-custom-domains.png)

#### Sablonok

A termékbeállítások **Sablonok** füle lehetővé teszi a hálózat adminisztrátorának, hogy sablonokat tegyen elérhetővé az ügyfelek számára kiválasztásra, és opcionálisan kikényszerítse a sablon állapotát.

![Sablonok fül](/img/config/product-themes.png)

_**Megjegyzés: Ahhoz, hogy a sablonok elérhetők legyenek az ügyfelek számára, a hálózat adminisztrátorának hálózati szinten engedélyeznie kell őket.**_

![Hálózati sablonok oldal](/img/config/product-themes-network-enabled.png)

A **láthatóság** opció meghatározza, hogy ez a sablon látható-e az ügyfél számára, amikor megtekinti a **Megjelenés > Sablonok** fület a webhelyén belül. Ennek az opciónak **Rejtett** állapotba állítása eltávolítja a sablont a nézetből, így korlátozza a kiválasztási és aktiválási lehetőséget.

![Sablonok fül](/img/config/product-themes.png)

A **viselkedés** kiválasztás lehetővé teszi a hálózat adminisztrátorának, hogy meghatározza a sablon állapotát az ügyfél webhelyének létrehozásakor.

**Elérhető** állapotban a sablon elérhetővé válik az ügyfél számára önálló aktiválásra. Ezzel szemben a **Nem elérhető** állapot megvonja az ügyféltől a sablon aktiválásának lehetőségét. Végül a **Aktiválás kényszerítése** opció kikényszeríti a sablon kiválasztását és aktiválását, így azt alapértelmezettként állítja be a webhely létrehozásakor.

#### Bővítmények

A Sablonok fülhöz hasonlóan az Ultimate Multisite lehetővé teszi a hálózat adminisztrátorának, hogy meghatározza a bővítmények láthatóságát az ügyfelek számára, valamint azok állapotát új webhely létrehozásakor.

![Bővítmények fül](/img/config/product-plugins.png)

A **láthatóság** legördülő menü lehetővé teszi, hogy a bővítmény látható vagy rejtett legyen az ügyfél számára, amikor a webhelyén a Bővítmények menüponton keresztül tekinti meg.

A hálózat adminisztrátora tovább manipulálhatja a bővítmények viselkedését a viselkedés legördülő menü opcióinak használatával.

![Bővítmények fül](/img/config/product-plugins.png)

Az **Alapértelmezett** kiválasztás tiszteletben tartja az ügyfél által kiválasztott webhelysablonban meghatározott bővítményállapotot. Így a sablonban aktivált bővítmények aktiváltak maradnak, amikor a sablon klónozásra kerül az ügyfél webhelyére.

Az **Aktiválás kényszerítése** aktív állapotba helyezi a bővítményt a webhely létrehozásakor, és ezzel ellentétben a **Deaktiválás kényszerítése** deaktiválja a bővítményt a webhely létrehozásakor. Mindkét esetben a bővítmény állapotát az ügyfél manuálisan módosíthatja a WordPress Bővítmények menüjén keresztül.

Az **Aktiválás és zárolás kényszerítése** beállítás hasonlóan működik, de megakadályozza, hogy az ügyfél módosítsa a bővítmény állapotát. Így az Aktiválás és zárolás kényszerítése beállítás aktív állapotba kényszeríti a bővítményt, és megakadályozza, hogy az ügyfél deaktiválja azt. Hasonlóképpen a **Deaktiválás és zárolás kényszerítése** beállítás inaktív állapotba kényszeríti a bővítményt, és megakadályozza, hogy a felhasználó aktiválja.

A hálózat adminisztrátora fontolóra veheti az Aktiválás és zárolás kényszerítése, valamint a Deaktiválás és zárolás kényszerítése beállításokat a webhelysablonokkal együtt, mivel a sablonokban lévő bővítményeket és bővítményállapotokat ezek a beállítások befolyásolhatják, ha kiválasztásra kerülnek.

#### Korlátozások visszaállítása

A **Korlátozások visszaállítása** fül visszaállítja a terméken meghatározott összes egyéni korlátot. A korlátozások visszaállításához kattints a **korlátozások visszaállítása** gombra.

![Korlátozások visszaállítása fül](/img/config/product-reset-limitations.png)

A művelet megerősítéséhez csúsztasd a **visszaállítás megerősítése** kapcsolót aktív állapotba jobbra, és kattints a **korlátozások visszaállítása** gombra.

![Korlátozások visszaállítása fül](/img/config/product-reset-limitations.png)

## Termék szerkesztése, duplikálása vagy törlése

A meglévő termékek szerkeszthetők, duplikálhatók vagy törölhetők az **Ultimate Multisite > Products** menüpontra navigálva, és a meglévő terméknév fölé mozgatva az egeret.

![Termék hover műveletek](/img/config/product-hover-actions.png)
