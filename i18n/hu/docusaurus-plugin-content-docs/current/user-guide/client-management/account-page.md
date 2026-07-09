---
title: Ügyfél Account oldal
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Az ügyfeled Account oldala (v2)

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Amikor az ügyfelek előfizetnek egy csomagra a hálózatodon, hozzáférést kapnak egy webhelyhez és annak Dashboardjához, ahol fontos információkat találnak a fizetéseikről, tagságaikról, domainjeikről, a csomag korlátozásairól stb...

Ebben az útmutatóban végigvezetünk az ügyfél Account oldalán, és látni fogod, mit láthatnak és mit tehetnek benne az ügyfeleid.

## Az Account oldal

Az Account oldal úgy érhető el, hogy az ügyfeled Dashboardján belül az **Account** elemre kattintasz.

![Account menü az ügyfél Dashboardján](/img/account-page/account-menu.png)

Szuverén bérlői hálózatokon az Ultimate Multisite v2.13.0 ezt az ügyfélkezelési élményt a fő webhelyen tartja. Ha egy ügyfél Account, checkout, számlázási, számla-, webhelykezelési, sablonváltási vagy domain-hozzárendelési műveletet nyit meg egy szuverén bérlőről, a művelet visszamutat a fő webhely ügyfélpaneljére, így a hálózati számlázási és tagsági rekordok maradnak mérvadók.

Amikor az ügyfél egy szuverén bérlőről érkezik, a fő webhely ügyfélpanelje tartalmazhat egy visszatérési hivatkozást a bérlői webhelyre. A visszatérési hivatkozás csak akkor jelenik meg, ha az Ultimate Multisite ellenőrizni tudja, hogy a visszatérési cél az ügyfél egyik webhelye, ami megakadályozza a tetszőleges átirányításokat, miközben megőrzi a bérlői munkafolyamatot.

![Ügyfél Account oldalának áttekintése](/img/account-page/overview.png)

Miután az ügyfél rákattint, áttekintést lát a tagságáról, számlázási címéről, számláiról, domainjeiről, webhelykorlátozásairól, és módosíthatja a ****Webhely sablonját** (ha ez engedélyezett a hálózatodon)**.

A tagságot másik csomagra is módosíthatja, vagy megvásárolhat egy másik csomagot vagy szolgáltatást, amelyet kínálsz. Nézzük meg külön-külön az egyes szakaszokat.

### A tagságod áttekintése:

Az ügyfeleid webhelyneve alatti első blokk áttekintést mutat az aktuális csomagjukról és az azzal együtt megvásárolt szolgáltatásokról/csomagokról. A blokk megjeleníti a tagsági számot, az érte kezdetben kifizetett összeget, hogy mennyibe kerül a csomag és bármely szolgáltatás/csomag, valamint hogy hányszor számlázták ki ezt a tagságot. Azt is láthatják, hogy a tagság **Aktív**, **Lejárt** vagy **Lemondott**.

![Tagsági áttekintés csomaggal, összeggel és számlázási részletekkel](/img/account-page/membership-card.png)

Közvetlenül ez alatt a blokk alatt az ügyfeleid láthatják az **Erről a webhelyről** és a **Webhelykorlátok** blokkokat. Ezek a blokkok megmutatják nekik a csomagjukhoz tartozó összes korlátozást: lemezterület, bejegyzések, oldalak, látogatások stb... Ezek a korlátok az egyes csomagoldalakon konfigurálhatók az **Ultimate Multisite > Products** alatt.

![Erről a webhelyről és Webhelykorlátok blokkok a csomag korlátozásaival](/img/account-page/site-limits.png)

A **Tagságod** jobb oldalán az ügyfelek a **Change** elemre kattinthatnak. Ez megmutatja nekik az összes elérhető csomagot és csomagot/szolgáltatást. Ha másik csomagot választanak, az adott csomag korlátozásai lépnek érvénybe a tagság jelenlegi korlátozásai helyett – függetlenül attól, hogy alacsonyabb vagy magasabb csomagra váltanak.

Ha most az ügyfeleid csomagokat vagy szolgáltatásokat választanak megvásárlásra ehhez a jelenlegi tagsághoz – például több lemezterületet vagy látogatást –, a jelenlegi tagság nem változik meg, csak az új csomagok kerülnek hozzáadásra.

Vedd figyelembe, hogy kuponkódok nem adhatók hozzá ezen a tagságmódosítási oldalon. Ha az ügyfél kuponkódot használt az első tagságvásárláskor, a kód erre az új tagságra is alkalmazva lesz.

### A számlázási cím frissítése:

Az Account oldalon az ügyfeleid a számlázási címüket is frissíthetik. Csak a _Számlázási cím_ melletti **Update** elemre kell kattintaniuk.

![Számlázási cím szakasz Update gombbal](/img/account-page/billing-address.png)

Egy új ablak jelenik meg az ügyfeled számára. Mindössze annyit kell tennie, hogy kitölti az új címet, majd a _Save Changes_ elemre kattint.

![Számlázási cím frissítési űrlap](/img/account-page/billing-address-form.png)

### A webhely sablonjának módosítása:

Ahhoz, hogy engedélyezd az ügyfeleidnek a webhely sablonjaik módosítását, menj az **Ultimate Multisite > Settings > Sites** menüpontra, és kapcsold be az **Allow Template Switching** opciót.

Továbbá az **Ultimate Multisite > Products** alatt válaszd ki a csomagjaidat, majd menj a **Site Templates** fülre. Győződj meg róla, hogy az **Allow Site Templates** opció be van kapcsolva, és a **Site Template Selection Mode** alatt a **Choose Available Site Templates** opció van kiválasztva.

![Product webhely sablonok fül sablonválasztási móddal](/img/config/product-site-templates.png)

Látni fogod az összes elérhető webhely sablont a webhelyeden. Válaszd ki, melyeket szeretnéd elérhetővé tenni, és melyeket nem szeretnéd elérhetővé tenni azoknak az ügyfeleknek, akik erre a csomagra fizettek elő. Vedd figyelembe, hogy ezek az opciók a checkout űrlapra is hatással vannak, így bármely sablon, amely **Not Available** értékre van állítva, nem fog megjelenni a regisztrációs oldalon ennél a csomagnál.

Most az ügyfeleid rákattinthatnak a **Change Site Template** elemre az Account oldalukon.

![Change Site Template gomb az Account oldalon](/img/account-page/change-template-button.png)

Az Ultimate Multisite 2.10.0 egy újratervezett sablonváltási panelt jelenít meg. A panel egy **jelenlegi sablon kártyával** kezdődik, így az ügyfelek láthatják, melyik sablon aktív, mielőtt cserét választanak.

Az elérhető webhely sablonok állandó rácsa látható marad, miközben az ügyfelek áttekintik a lehetőségeiket. Ez segít nekik összehasonlítani a csomagjukhoz engedélyezett sablonokat anélkül, hogy szem elől tévesztenék a jelenlegi kiválasztást.

![A csomaghoz elérhető webhely sablonok listája](/img/config/site-templates-list.png)

Miután kiválasztották, mire szeretnének váltani, meg kell erősíteniük a módosítást.

![Webhely sablonváltás megerősítő párbeszédablaka](/img/account-page/template-switch-confirm.png)

Miután bekapcsolják a megerősítést, és a **Process Switch** elemre kattintanak, az új webhely sablon lesz használatban az ügyfeled webhelyén.

Az ügyfelek ezen a panelen a **Reset current template** opciót is használhatják, amikor vissza kell állítaniuk az oldalt a jelenleg hozzárendelt sablonra. Ahogy egy másik sablonra váltásnál, a sablon visszaállítása is felülírhatja az oldal tartalmát, ezért az ügyfelek csak akkor erősítsék meg, ha értik a visszaállítási műveletet.

### Egyéni domainek hozzáadása:

Az ügyfeleknek arra is lesz lehetőségük, hogy egyéni domaint adjanak hozzá ehhez a csomaghoz az Account oldalukon. Ahhoz, hogy az ügyfelek egyéni domaineket használhassanak, lépj a **Ultimate Multisite > Settings >** **Domain Mapping** részhez.

Kapcsold be az **Enable Domain Mapping** opciót. Ez lehetővé teszi, hogy az ügyfelek hálózati szinten használjanak egyéni domaineket.

Ne felejtsd el azt is ellenőrizni, hogy a domain mapping termékalapon engedélyezve van-e – mert korlátozhatsz egy terméket úgy, hogy az ügyfelek ne használhassanak egyéni domaineket.

Lépj a **Ultimate Multisite > Products** részhez. Válaszd ki a kívánt csomagot, és lépj a **Custom Domains** fülre. Kapcsold be az **Allow Custom Domains** opciót.

![Custom Domains fül az Allow Custom Domains kapcsolóval](/img/config/product-custom-domains.png)

Ez lehetővé teszi, hogy az erre a konkrét csomagra előfizetett összes ügyfél egyéni domaineket használjon. Most az Account oldalon az ügyfelek az **Add Domain** gombra kattintva hozzáadhatnak egyéni domaint.

![Add Domain gomb az account oldalon](/img/account-page/add-domain-button.png)

Az első megnyíló ablak egy üzenetet jelenít meg az ügyfeleknek, amely útmutatást ad arról, hogyan frissítsék a DNS-rekordjaikat, hogy ez az egyéni domain működjön a hálózatodon.

![DNS-utasítások egyéni domain hozzáadásakor](/img/account-page/add-domain-dns.png)

Ez az üzenet (általad) szerkeszthető itt: **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions beállítás a Domain Mapping részben](/img/config/settings-domain-mapping.png)

Íme a domain mapping beállítási oldal teljes nézete:

![Domain mapping beállítások teljes oldala](/img/config/settings-domain-mapping-full.png)

A **Next Step** gombra kattintás után az ügyfelek megadhatják az egyéni domainnevüket, és kiválaszthatják, hogy ez az egyéni domain legyen-e az elsődleges. Vedd figyelembe, hogy az ügyfelek egynél több egyéni domaint is használhatnak a webhelyeikhez, így kiválaszthatják, melyik legyen az elsődleges.

![Egyéni domainnév megadása elsődleges domain opcióval](/img/account-page/add-domain-primary.png)

Az **Add Domain** gombra kattintás után a domain hozzáadódik az ügyfeled Accountjához. Most már csak annyit kell tenniük, hogy módosítják ennek az egyéni domainnek a DNS-rekordjait a domainregisztrátoruknál.

### Jelszó módosítása:

Az account Dashboardon belül az ügyfelek a **Change Password** gombra kattintva a jelszavukat is módosíthatják.

![Change Password gomb az account oldalon](/img/account-page/change-password-button.png)

Ez egy új ablakot jelenít meg, ahol az ügyfeleknek meg kell adniuk a jelenlegi jelszavukat, majd az új jelszót, amelyet használni szeretnének.

![Jelszómódosító űrlap jelenlegi és új jelszó mezőkkel](/img/account-page/change-password-form.png)

### Veszélyzóna:

Két opció is megjelenik a **Danger Zone** részben: **Delete Site** és **Delete Account**. Mindkettő azért van a Danger Zone részben, mert ez a két művelet visszafordíthatatlan. Ha az ügyfelek törlik a webhelyüket vagy az Accountjukat, nem tudják visszaállítani azokat.

![Danger Zone Delete Site és Delete Account opciókkal](/img/account-page/danger-zone.png)

Ha az ügyfelek e két opció bármelyikére kattintanak, egy ablak jelenik meg számukra, ahol be kell kapcsolniuk a webhely vagy az Account eltávolítására szolgáló opciót, és figyelmeztetést kapnak, hogy ez a művelet nem vonható vissza.

![Delete Site megerősítő párbeszédablak](/img/account-page/delete-site-confirm.png)

![Delete Account megerősítő párbeszédablak](/img/account-page/delete-account-confirm.png)

Ha törlik a webhelyüket, az Accountjuk és tagságuk továbbra is érintetlen marad. Csak a webhelyükön lévő összes tartalmat veszítik el. Ha törlik az Accountjukat, az összes webhely, tagság és az ehhez az Accounthoz kapcsolódó információ el fog veszni.
