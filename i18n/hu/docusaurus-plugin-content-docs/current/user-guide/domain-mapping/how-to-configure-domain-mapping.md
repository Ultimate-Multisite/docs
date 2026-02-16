---
title: Hogyan konfiguráljuk a Domain Mapping-ot
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Domain mapping beállítása (v2)

_**FONTOS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

A prémium hálózatok egyik legerősebb funkciója, hogy ügyfeleinknek lehetőséget biztosíthatunk saját domain csatolására a webhelyükhöz. Végül is melyik tűnik professzionálisabbnak: a [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) vagy a [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ezért az Ultimate Multisite beépített funkcióként kínálja ezt a lehetőséget, harmadik féltől származó pluginok használata nélkül.

## Mi az a domain mapping?

Ahogy a neve is sugallja, a domain mapping az Ultimate Multisite által nyújtott képesség, amely egy egyéni domain kérését fogadja, és azt a hálózat megfelelő webhelyéhez irányítja, amelyhez az adott domain tartozik.

### Hogyan állítsd be a domain mappinget az Ultimate Multisite hálózatodon

A domain mapping működéséhez némi beállítás szükséges a te részedről. Szerencsére az Ultimate Multisite automatizálja a nehéz munkát, így könnyedén teljesítheted a követelményeket.

Az Ultimate Multisite telepítése során a varázsló automatikusan átmásolja és telepíti a **sunrise.php** fájlt a kijelölt mappába. **A varázsló nem engedi a továbblépést, amíg ez a lépés nincs befejezve**.

![Ultimate Multisite telepítővarázsló a sunrise.php lépéssel](/img/config/settings-domain-mapping.png)

Ez azt jelenti, hogy amint az Ultimate Multisite telepítővarázslója befejezte a hálózat beállítását, azonnal elkezdheted az egyéni domainok hozzárendelését.

Fontos megjegyezni, hogy a domain mapping használata az Ultimate Multisite-ban nem kötelező. Lehetőséged van használni a WordPress Multisite natív domain mapping funkcióját vagy bármilyen más domain mapping megoldást.

Ha le kell tiltanod az Ultimate Multisite domain mappinget más megoldások javára, ezt megteheted az **Ultimate Multisite > Settings > Domain Mapping** menüpont alatt.

![Domain Mapping beállítások az engedélyezés kapcsolóval](/img/config/settings-domain-mapping.png)

Közvetlenül ez alatt a beállítás alatt található a **Force Admin Redirect** opció. Ez a beállítás lehetővé teszi, hogy szabályozd, ügyfeleid hozzáférhetnek-e az admin felületükhöz az egyéni domainjükön és az aldomainjükön is, vagy csak az egyiken.

Ha a **Force redirect to mapped domain** opciót választod, ügyfeleid csak az egyéni domainjükön keresztül férhetnek hozzá az admin felülethez.

A **Force redirect to network domain** opció pontosan az ellenkezőjét teszi – ügyfeleid csak az aldomainjükön keresztül férhetnek hozzá az admin felülethez, még akkor is, ha az egyéni domainjükön próbálnak bejelentkezni.

Az **Allow access to the admin by both mapped domain domain and network domain** opció pedig lehetővé teszi számukra, hogy mind az aldomainen, mind az egyéni domainen keresztül elérjék az admin felületet.

![Force Admin Redirect opciók a domain mappinghez](/img/config/settings-domain-mapping.png)

Két módon rendelhetsz hozzá egyéni domaint. Az első a domain hozzárendelése a hálózati admin felületről szuperadminként, a második pedig az aldomain admin felületéről a fiók oldalon keresztül.

De mielőtt elkezdenéd az egyéni domain hozzárendelését a hálózatod egyik webhelyéhez, győződj meg róla, hogy a domain **DNS beállításai** megfelelően vannak konfigurálva.

### 

### A domain DNS beállításainak megfelelő konfigurálása

A sikeres hozzárendeléshez győződj meg róla, hogy a hozzárendelni kívánt domain a hálózatod IP-címére mutat. Fontos, hogy a hálózat IP-címére van szükséged – annak a domainnek az IP-címére, ahol az Ultimate Multisite telepítve van – nem pedig a hozzárendelni kívánt egyéni domain IP-címére. Egy adott domain IP-címének megkereséséhez javasoljuk például a [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) használatát.

A domain helyes hozzárendeléséhez egy **A RECORD** bejegyzést kell hozzáadnod a **DNS** konfigurációdban, amely erre az **IP-címre** mutat. A DNS kezelése nagyban eltér a különböző domain regisztrátoroknál, de rengeteg online útmutató található erről, ha rákeresz a „_Creating A Record on XXXX_" kifejezésre, ahol XXXX a domain regisztrátora (pl.: „_Creating A Record on GoDaddy_").

Ha gondod akad a beállítással, **fordulj a domain regisztrátora ügyfélszolgálatához**, ők segíteni tudnak ebben.

Ha tervezed, hogy az ügyfeleid saját maguk rendelhetik hozzá a domainjeiket, nekik kell elvégezniük ezt a részt. Irányítsd őket a regisztrátoruk támogatási rendszeréhez, ha nem tudják létrehozni az A Recordot.

### Egyéni domain hozzárendelése szuperadminként

Amikor szuperadminként vagy bejelentkezve a hálózatodba, könnyedén hozzáadhatsz és kezelhetsz egyéni domaineket az **Ultimate Multisite > Domains** menüpont alatt.

![Domainek lista oldal az Ultimate Multisite-ban](/img/admin/domains-list.png)

Ezen az oldalon kattints az **Add Domain** gombra felül, és megjelenik egy felugró ablak, ahol megadhatod az **egyéni domain nevet**, a **webhelyet**, amelyhez hozzá szeretnéd rendelni, és eldöntheted, hogy **elsődleges domainként** szeretnéd-e beállítani (megjegyzés: **több domain nevet is hozzárendelhetsz egyetlen webhelyhez**).

![Add Domain felugró ablak domain név és webhely mezőkkel](/img/admin/domains-list.png)

Miután megadtad az összes információt, kattints az **Add Existing Domain** gombra alul.

Ez elindítja az egyéni domain DNS információinak ellenőrzését és lekérését. Az oldal alján egy napló is megjelenik, ahol követheted a folyamatot. Ez a folyamat néhány percig tarthat.

A **Stage**, vagyis az állapot **Checking DNS**-ről **Ready**-re változik, ha minden megfelelően be van állítva.

![Domain állapot változása Checking DNS-ről Ready-re](/img/admin/domains-list.png)

![Domain Ready állapottal a domainek listában](/img/admin/domains-list.png)

Ha rákattintasz a domain névre, láthatod a hozzá tartozó opciókat. Nézzük át őket gyorsan:

![Domain részletek oldal stage, site, active és SSL opciókkal](/img/admin/domains-list.png)

**Stage:** Ez a domain aktuális állapota. Amikor először adod hozzá a domaint, valószínűleg **Checking DNS** állapotban lesz. A folyamat ellenőrzi a DNS bejegyzéseket és megerősíti, hogy helyesek-e. Ezután a domain **Checking SSL** állapotba kerül. Az Ultimate Multisite ellenőrzi, hogy a domain rendelkezik-e SSL-lel, és **Ready** vagy **Ready (without SSL)** kategóriába sorolja.

**Site:** Az aldomain, amely ehhez a domainhez tartozik. A hozzárendelt domain ennek a konkrét webhelynek a tartalmát jeleníti meg.

**Active:** Ezt az opciót ki- és bekapcsolhatod a domain aktiválásához vagy deaktiválásához.

**Is Primary Domain?:** Ügyfeleid egynél több hozzárendelt domainnel rendelkezhetnek webhelyenként. Ezzel az opcióval jelölheted ki, hogy ez az adott webhely elsődleges domainje-e.

**Is Secure?:** Bár az Ultimate Multisite ellenőrzi, hogy a domain rendelkezik-e SSL tanúsítvánnyal az engedélyezés előtt, manuálisan is beállíthatod, hogy a domain SSL-lel vagy anélkül töltődjön be. Fontos, hogy ha a webhelynek nincs SSL tanúsítványa és megpróbálod SSL-lel betölteni, hibákat okozhat.

### Egyéni domain hozzárendelése aldomain felhasználóként

Az aldomain adminisztrátorok is hozzárendelhetnek egyéni domaineket az aldomain admin felületükről.

Először győződj meg róla, hogy engedélyezted ezt az opciót a **Domain mapping** beállításokban. Lásd az alábbi képernyőképet.

![Domain mapping beállítások, amelyek engedélyezik az aldomain felhasználóknak a domain hozzárendelést](/img/config/settings-domain-mapping.png)

Ezt az opciót beállíthatod a **Plan** szintjén vagy a termék beállításokban is az **Ultimate Multisite > Products** alatt.

![Product custom domains opció a termék beállításokban](/img/config/settings-domain-mapping.png)

Amikor bármelyik opció engedélyezve van és az aldomain felhasználó hozzárendelhet egyéni domaineket, a felhasználó egy **Domains** nevű metaboxot lát az **Account** oldalon.

![Domains metabox az aldomain fiók oldalán](/img/admin/domains-list.png)

A felhasználó rákattinthat az **Add Domain** gombra, és megjelenik egy felugró ablak néhány utasítással.

![Add Domain felugró ablak DNS utasításokkal aldomain felhasználók számára](/img/admin/domains-list.png)

A felhasználó ezután kattinthat a **Next Step** gombra és folytathatja az egyéni domain név hozzáadását. Azt is kiválaszthatja, hogy ez legyen-e az elsődleges domain.

![Egyéni domain név mező az elsődleges domain opcióval](/img/admin/domains-list.png)

![Kattints az Add Domain gombra a DNS ellenőrzés indításához](/img/admin/domains-list.png)Az **Add Domain** gombra kattintva elindul az egyéni domain DNS információinak ellenőrzése és lekérése.

### A Domain Syncing működése

A Domain Syncing egy olyan folyamat, amelynek során az Ultimate Multisite hozzáadja az egyéni domain nevet a tárhelyszolgáltatói fiókodhoz addon domainként, **hogy a domain mapping működjön**.

A domain syncing automatikusan megtörténik, ha a tárhelyszolgáltatód integrálva van az Ultimate Multisite domain mapping funkcióval. Jelenleg ezek a tárhelyszolgáltatók: _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ és _Cpanel._

Ezt az integrációt az Ultimate Multisite beállításaiban kell aktiválnod az **Integration** fül alatt.

![Integration fül az Ultimate Multisite beállításokban](/img/config/settings-domain-mapping.png)

![Tárhelyszolgáltató integrációs beállítások a domain syncinghez](/img/config/settings-domain-mapping.png)

_Fontos, hogy ha a tárhelyszolgáltatód nem szerepel a fent említett szolgáltatók között, **manuálisan kell szinkronizálnod vagy hozzáadnod a domain nevet** a tárhelyszolgáltatói fiókodhoz._
