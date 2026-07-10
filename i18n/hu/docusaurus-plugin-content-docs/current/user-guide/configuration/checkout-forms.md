---
title: Pénztár űrlapok
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Fizetési űrlapok {#checkout-forms}

A fizetési űrlapok egyszerű és rugalmas módot kínálnak arra, hogy különböző megközelítésekkel kísérletezz, amikor új ügyfeleket próbálsz konvertálni.

Az Ultimate Multisite 2.0 olyan fizetési űrlap szerkesztőt kínál, amely lehetővé teszi, hogy annyi űrlapot hozz létre, amennyit szeretnél, különböző mezőkkel, kínált termékekkel stb.

A funkció eléréséhez lépj a bal oldalsávon található Fizetési űrlapok menübe.

![Fizetési űrlapok listája](/img/config/checkout-forms-list.png)

Ezen az oldalon láthatod az összes meglévő fizetési űrlapodat.

A listatáblázat tartalmaz egy **Állapot** oszlopot, így ellenőrizheted, hogy az egyes űrlapok jelenleg elérhetők-e az ügyfelek számára:

| Állapot | Jelentés |
|---|---|
| **Aktív** | Az űrlap bárhol használható, ahol a rövidkódja vagy a regisztrációs oldala közzé van téve. |
| **Inaktív** | Az űrlap mentve van, de le van tiltva. Az ügyfelek nem tudják vele befejezni a fizetést, amíg újra nem engedélyezed. |

Használd az állapot oszlopot, mielőtt egy nyilvános regisztrációs folyamatot szerkesztesz, különösen akkor, ha piszkozat vagy szezonális fizetési űrlapokat is tartasz az éles űrlapjaid mellett.

Ha újat szeretnél létrehozni, egyszerűen kattints az oldal tetején a Fizetési űrlap hozzáadása lehetőségre.

Kiindulási pontként e három lehetőség egyikét választhatod: egylépéses, többlépéses vagy üres. Ezután kattints a Szerkesztő megnyitása gombra.

Amikor kiindulási pontként az **egylépéses** vagy **többlépéses** lehetőséget választod, az űrlapsablon alapértelmezetten tartalmaz egy **Sablonválasztás** mezőt. Ez a mező lehetővé teszi az ügyfeleid számára, hogy a regisztrációs folyamat során webhelysablont válasszanak. Meghagyhatod, eltávolíthatod, vagy áthelyezheted, mint bármely más mezőt a szerkesztőben.

![Fizetési űrlap szerkesztő](/img/config/checkout-form-editor.png)

Alternatívaként szerkesztheted vagy duplikálhatod a már meglévő űrlapokat a nevük alatti lehetőségekre kattintva. Ott megtalálod az űrlap rövidkódjának másolására vagy az űrlap törlésére szolgáló lehetőségeket is.

![Fizetési űrlap lebegő műveletei](/img/config/checkout-form-hover-actions.png)

#### A fizetési űrlap szerkesztő áttekintése {#checkout-form-editor-overview}

A fizetési űrlap szerkesztő átfogó felületet biztosít a regisztrációs űrlapok felépítéséhez. Íme a szerkesztő elrendezésének áttekintése:

![Fizetési űrlap szerkesztő áttekintése](/img/config/checkout-form-editor-overview.png)

### Fizetési űrlap szerkesztése {#editing-a-checkout-form}

Különböző célokra hozhatsz létre fizetési űrlapokat. Ebben a példában egy regisztrációs űrlapon fogunk dolgozni.

Miután megnyitottad a fizetési űrlap szerkesztőt, adj nevet az űrlapnak (ez csak belső hivatkozásra lesz használva), valamint egy slugot (például rövidkódok létrehozásához).

![Fizetési űrlap szerkesztő](/img/config/checkout-form-editor.png)

Az űrlapok lépésekből és mezőkből állnak. Új lépést az Új fizetési lépés hozzáadása gombra kattintva adhatsz hozzá.

![Új fizetési lépés hozzáadása](/img/config/checkout-form-add-step.png)

A modális ablak első fülén töltsd ki az űrlaplépés tartalmát. Adj neki azonosítót, nevet és leírást. Ezeket az elemeket többnyire belsőleg használja a rendszer.

![Fizetési űrlap lépésének tartalom füle](/img/config/checkout-form-step-content.png)

Ezután állítsd be a lépés láthatóságát. Választhatsz a „Mindig megjelenítés”, „Csak bejelentkezett felhasználóknak jelenjen meg” vagy „Csak vendégeknek jelenjen meg” lehetőségek közül.

![Fizetési űrlap lépésének láthatóság füle](/img/config/checkout-form-step-visibility.png)

Végül konfiguráld a lépés stílusát. Ezek opcionális mezők.

![Fizetési űrlap lépésének stílus füle](/img/config/checkout-form-step-style.png)

Most itt az ideje mezőket hozzáadni az első lépésünkhöz. Egyszerűen kattints az Új mező hozzáadása lehetőségre, és válaszd ki a kívánt szakasztípust.

![Fizetési űrlap lépése mezőkkel](/img/config/checkout-form-step-with-fields.png)

Minden mezőnek különböző kitöltendő paraméterei vannak. Ehhez az első bevitelhez a „Felhasználónév” mezőt választjuk.

![Mezőtípus-választó legördülő](/img/config/checkout-form-field-type-dropdown.png)

![Felhasználónév mező tartalmi beállításai](/img/config/checkout-form-username-content.png)

![Felhasználónév mező láthatósági beállításai](/img/config/checkout-form-username-visibility.png)

![Felhasználónév mező stílusbeállításai](/img/config/checkout-form-username-style.png)

Annyi lépést és mezőt adhatsz hozzá, amennyire szükséged van. Ahhoz, hogy megjelenítsd a termékeidet az ügyfelek számára, hogy választhassanak közülük, használd az Ártáblázat mezőt. Ha szeretnéd lehetővé tenni, hogy az ügyfeleid sablont válasszanak, add hozzá a Sablonválasztás mezőt. És így tovább.

![Új mező hozzáadása párbeszédablak](/img/config/checkout-form-add-field-dialog.png)

_**Megjegyzés:** a felhasználónév, e-mail, jelszó, webhely címe, webhely URL-je, rendelési összesítő, fizetés és beküldés gomb kötelező mezők egy fizetési űrlap létrehozásához._

Miközben a fizetési űrlapon dolgozol, bármikor használhatod az Előnézet gombot, hogy lásd, hogyan fogják látni az ügyfeleid az űrlapot. Válthatsz a meglévő felhasználóként vagy látogatóként való megtekintés között is

![Fizetési űrlap előnézet gombja](/img/config/checkout-form-preview-button.png)

![Fizetési űrlap előnézeti modálja](/img/config/checkout-form-preview-modal.png)

Végül a Speciális beállítások alatt konfigurálhatod a „Köszönjük” oldal üzenetét, kódrészleteket adhatsz hozzá a konverziók követéséhez, egyéni CSS-t adhatsz a fizetési űrlapodhoz, vagy bizonyos országokra korlátozhatod azt.

![Speciális beállítások](/img/config/checkout-form-advanced.png)

Ezt a jobb oldali oszlopban található opció átkapcsolásával manuálisan is engedélyezheted vagy letilthatod a fizetési űrlapodat, illetve véglegesen törölheted az űrlapot.

![Aktív kapcsoló](/img/config/checkout-form-active.png)

Űrlap törléséhez kattints az űrlapműveletek között található törlés opcióra:

![Fizetési űrlap törlési opciója](/img/config/checkout-form-delete.png)

Ne felejtsd el menteni a fizetési űrlapodat!

![Mentés gomb](/img/config/checkout-form-save.png)

Az űrlap rövidkódjának lekéréséhez kattints a Rövidkód generálása lehetőségre, és másold ki a modális ablakban megjelenő eredményt.

![Mentés gomb rövidkóddal](/img/config/checkout-form-save.png)

### Az Ártáblázat mező {#the-pricing-table-field}

Az **Ártáblázat** mező megjeleníti a termékeidet a fizetési űrlapon, hogy az ügyfelek választhassanak egy csomagot. Amikor ezt a mezőt szerkeszted, több beállítást is konfigurálhatsz:

![Ártáblázat mező beállításai](/img/config/pricing-table-field-settings.png)

Így jelenik meg az ártáblázat a frontend regisztrációs űrlapon:

![Frontend checkout ártáblázat](/img/config/frontend-checkout-pricing-table.png)

  * **Termékek**: Válaszd ki, mely termékek jelenjenek meg, és milyen sorrendben.
  * **Különböző időtartamok kényszerítése**: Ha engedélyezve van, minden termék megjelenik, függetlenül attól, hogy van-e egyező árváltozata az aktuálisan kiválasztott számlázási időszakhoz. Ha le van tiltva (alapértelmezett), a kiválasztott időszakhoz tartozó változattal nem rendelkező termékek el vannak rejtve.
    ![Ártáblázat időtartam-kényszerítési beállítása](/img/config/pricing-table-force-durations.png)
  * **Elrejtés előre kiválasztott esetén**: Elrejti az ártáblázatot, ha egy csomag már ki lett választva az URL-en keresztül (pl. `/register/premium`).
  * **Ártáblázat sablonja**: Válaszd ki az ártáblázat vizuális sablonját (Egyszerű lista, Legacy stb.).

Ha hozzáadsz egy terméket az Ártáblázathoz, mielőtt az űrlap tartalmazná az adott termék checkout folyamatának befejezéséhez szükséges mezőket, a szerkesztő most figyelmeztetést jelenít meg. A figyelmeztetés segítségével add hozzá a hiányzó kötelező mezőt, mielőtt közzétennéd vagy mentenéd egy élő regisztrációs űrlap módosításait.

### Időszakválasztó kapcsoló hozzáadása {#adding-a-period-selection-toggle}

Ha beállítottad az [Árváltozatokat](creating-your-first-subscription-product#price-variations) a termékeiden (pl. havi és éves árképzés), hozzáadhatsz egy **Időszakválasztás** mezőt a checkout űrlapodhoz. Ez a mező egy kapcsolót jelenít meg, amellyel az ügyfelek válthatnak a számlázási időszakok között, az ártáblázat pedig valós időben, dinamikusan frissül.

#### 1. lépés: Árváltozatok beállítása a termékeken {#step-1-set-up-price-variations-on-your-products}

Az Időszakválasztás mező hozzáadása előtt győződj meg róla, hogy a termékeiden be vannak állítva az árváltozatok. Lépj az **Ultimate Multisite > Termékek** menüpontra, szerkessz egy terméket, majd navigálj az **Árváltozatok** fülre alternatív számlázási időszakok hozzáadásához (pl. éves, kedvezményes áron).

![Árváltozatok fül egy terméken](/img/config/product-price-variations-tab.png)

#### 2. lépés: Az Időszakválasztás mező hozzáadása a Checkout űrlaphoz {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Lépj az **Ultimate Multisite > Checkout Forms** menüpontra, és szerkeszd a checkout űrlapodat.

2. Görgess le ahhoz a lépéshez, amely tartalmazza a **Ártáblázat** mezőt, majd kattints az **Add new Field** lehetőségre.

3. A mezőtípus-választó párbeszédablakban kattints a **Period Select** lehetőségre.

![Új mező hozzáadása párbeszédablak Period Select opcióval](/img/config/checkout-form-add-field-dialog.png)

4. Állítsd be az időszakopciókat. Minden opciónak szüksége van:
   * **Időtartam**: A szám (pl. `1`)
   * **Időtartam egysége**: Az időszaktípus (Napok, Hetek, Hónapok vagy Évek)
   * **Címke**: A szöveg, amelyet az ügyfelek látni fognak (pl. „Havi”, „Éves”)

5. Kattints a **+ Add Option** lehetőségre további időszakválasztások hozzáadásához. Ezeknek az opcióknak egyezniük kell a termékeiden beállított árváltozatokkal.

![Időszakválasztás mező beállításai](/img/config/period-selection-field-settings.png)

6. Válassz egy **Időszakválasztó sablont** (a Clean az alapértelmezett, amely egy egyszerűen formázott, egyéni CSS-re kész választót jelenít meg).

7. Kattints a **Save Field** gombra.

#### 3. lépés: A mező elhelyezése az Ártáblázat fölé {#step-3-position-the-field-above-the-pricing-table}

A legjobb felhasználói élmény érdekében győződj meg róla, hogy az Időszakválasztás mező **az Ártáblázat mező előtt** jelenik meg a checkout lépésben. A checkout űrlapszerkesztőben áthúzással átrendezheted a mezőket. Így az ügyfelek először számlázási időszakot választanak, majd az adott időszakhoz tartozó árakat látják.

![Checkout űrlapszerkesztő a mezők sorrendjével](/img/config/checkout-form-editor-with-fields.png)

#### Hogyan működik a frontenden {#how-it-works-on-the-frontend}

A beállítás után a regisztrációs oldalra látogató ügyfelek az ártáblázat felett látni fogják az időszakválasztót. Amikor másik számlázási időszakra kattintanak:

  * Az ártáblázat azonnal frissül, és a kiválasztott időszak árait mutatja (nincs szükség oldal-újratöltésre).
  * Ha a **Különböző időtartamok kényszerítése** le van tiltva az Ártáblázat mezőnél, a kiválasztott időszakhoz árváltozattal nem rendelkező termékek el lesznek rejtve.
  * Ha a **Különböző időtartamok kényszerítése** engedélyezve van, minden termék látható marad akkor is, ha nincs változatuk a kiválasztott időszakhoz (az alapértelmezett árukat fogják mutatni).

#### Számlázási időszak előválasztása URL-en keresztül {#pre-selecting-a-billing-period-via-url}

URL-en keresztül terméket és számlázási időszakot is előre kiválaszthatsz. Az Ultimate Multisite ezeket az URL-mintákat támogatja:

  * `/register/premium` — Csak a „Premium” terméket választja előre
  * `/register/premium/12` — Előre kiválasztja a terméket és a 12 hónapos időtartamot
  * `/register/premium/1/year` — Előre kiválasztja a terméket 1 éves időtartammal

### A Sablonválasztás mező {#the-template-selection-field}

A **Sablonválasztás** mező lehetővé teszi az ügyfelek számára, hogy site sablont válasszanak a checkout során. Mostantól alapértelmezetten benne van az Ultimate Multisite v2.6.1-ben hozzáadott **egylépéses** és **többlépéses** checkout űrlapsablonokban.

#### A mező manuális hozzáadása {#adding-the-field-manually}

Ha olyan űrlappal dolgozol, amely a v2.6.1 előtt készült, vagy üres sablonból indult:

1. Lépj az **Ultimate Multisite > Checkout Forms** menüpontra, és szerkeszd a checkout űrlapodat.
2. Abban a lépésben, ahol a site adatait gyűjtöd, kattints az **Add new Field** lehetőségre.
3. Válaszd a **Template Selection** opciót a mezőtípus párbeszédablakból.
4. Állítsd be a mezőt:
   - **Címke** — A címsor, amelyet az ügyfelek a sablonrács felett látnak (pl. „Válassz site sablont”).
   - **Kötelező** — Meg kell-e választaniuk az ügyfeleknek egy sablont a folytatás előtt.

#### Hogyan működik {#how-it-works}

Amikor egy ügyfél sablont választ a checkout során, az Ultimate Multisite azt használja az új site létrehozásakor. A megjelenített sablonok a **Site Templates** listádból származnak (**Ultimate Multisite > Site Templates**). Csak az ügyfelek számára elérhetőként megjelölt sablonok jelennek meg itt.

### Checkout űrlap alapdomainjei {#checkout-form-base-domains}

Az Ultimate Multisite v2.13.0 a checkout űrlap **Site URL** mezőin beállított domaineket hálózati alapdomainekként kezeli. Használd a mező elérhetődomain-beállításait, ha azt szeretnéd, hogy az ügyfelek egy vagy több megosztott regisztrációs domain alatt hozzanak létre site-okat, például `example.com` és `sites.example.com` alatt.

A megosztott checkout-form alapdomainek nem minősülnek egyedi webhelyenkénti custom domain leképezéseknek. Amikor egy ügyfél aldirectory webhelyet hoz létre az egyik ilyen alapon, az Ultimate Multisite nem hoz létre leképezett domain rekordot, amely miatt a megosztott host csak ahhoz az egy webhelyhez tartozna. A megosztott host továbbra is elérhető marad a sibling webhelyek számára, amelyek ugyanazt a checkout form alapot használják.

Tartsd meg a custom domaineket az ügyfelenként leképezett hostokhoz, például `customer-example.com`. Tartsd meg a checkout-form alapdomaineket a megosztott regisztrációs hostokhoz, amelyeket sok webhely használhat.

#### A mező eltávolítása {#removing-the-field}

Ha nem kínálsz webhely-sablonokat, távolítsd el a Template Selection mezőt az űrlapodból. Az ügyfelek ezután azt az alapértelmezett sablont kapják meg, amely a **Ultimate Multisite > Settings > Site Templates** alatt van konfigurálva.
