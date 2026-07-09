---
title: A Domain Mapping konfigurálása
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Domain-hozzárendelés konfigurálása (v2) {#how-to-configure-domain-mapping-v2}

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Egy prémium hálózat egyik legerősebb funkciója, hogy lehetőséget kínálhatunk ügyfeleinknek felső szintű domain csatolására a webhelyeikhez. Végül is melyik tűnik professzionálisabbnak: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) vagy [_**joesbikeshop.com**_](http://joesbikeshop.com)? Ezért kínálja az Ultimate Multisite ezt a funkciót beépítve, harmadik féltől származó pluginek használata nélkül.

## Mi az a domain-hozzárendelés? {#whats-domain-mapping}

Ahogy a neve is sugallja, a domain-hozzárendelés az Ultimate Multisite által kínált képesség arra, hogy fogadjon egy egyéni domainre vonatkozó kérést, és azt a kérést hozzárendelje a hálózat megfelelő webhelyéhez, amelyhez az adott domain csatolva van.

### Domain-hozzárendelés beállítása az Ultimate Multisite hálózatodon {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

A domain-hozzárendelés működéséhez bizonyos beállításokra van szükség a részedről. Szerencsére az Ultimate Multisite automatizálja helyetted a nehéz munkát, így könnyen teljesítheted a követelményeket.

Az Ultimate Multisite telepítése során a varázsló automatikusan átmásolja és telepíti a **sunrise.php** fájlt a kijelölt mappába. **A varázsló nem engedi a továbblépést, amíg ez a lépés be nem fejeződik**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Ez azt jelenti, hogy amint az Ultimate Multisite telepítővarázslója befejezte a hálózatod beállítását, azonnal elkezdheted az egyéni domain hozzárendelését.

Vedd figyelembe, hogy az Ultimate Multisite domain-hozzárendelése nem kötelező. Lehetőséged van a WordPress Multisite natív domain-hozzárendelési funkcióját vagy bármely más domain-hozzárendelési megoldást használni.

Ha ki kell kapcsolnod az Ultimate Multisite domain-hozzárendelését, hogy helyet adj más domain-hozzárendelési megoldásoknak, ezt a funkciót az **Ultimate Multisite > Beállítások > Domain-hozzárendelés** alatt tilthatod le.

![Domain-hozzárendelési beállítások oldala admin átirányítással, hozzárendelési üzenettel és DNS-beállításokkal](/img/config/domain-mapping-settings.png)

Közvetlenül ez alatt az opció alatt láthatod a **Kényszerített admin átirányítás** lehetőséget is. Ez az opció lehetővé teszi annak szabályozását, hogy az ügyfeleid hozzáférhessenek-e az admin Dashboardjukhoz mind az egyéni domainjükön, mind az aldomainjükön, vagy csak az egyiken.

Ha a **Kényszerített átirányítás a hozzárendelt domainre** lehetőséget választod, az ügyfeleid csak az egyéni domainjeiken férhetnek hozzá az admin Dashboardjukhoz.

A **Kényszerített átirányítás a** **hálózati domainre** opció pontosan az ellenkezőjét teszi – az ügyfeleid csak az aldomainjükön férhetnek hozzá a Dashboardjaikhoz, még akkor is, ha az egyéni domainjeiken próbálnak bejelentkezni.

Az **Admin hozzáférés engedélyezése mind a hozzárendelt domain, mind a hálózati domain használatával** opció pedig lehetővé teszi számukra, hogy az admin Dashboardjaikat mind az aldomainen, mind az egyéni domainen elérjék.

![Lenyitott Admin átirányítás legördülő lista a három átirányítási opcióval](/img/config/domain-mapping-redirect-options.png)

Két módon lehet egyéni domaint hozzárendelni. Az első a domainnév hozzárendelése a hálózati admin Dashboardról super adminként, a második pedig az alwebhely admin Dashboardján keresztül, az Account oldalon.

Mielőtt azonban elkezdenéd hozzárendelni az egyéni domaint a hálózatod egyik alwebhelyéhez, meg kell győződnöd arról, hogy a domainnév **DNS-beállításai** megfelelően vannak konfigurálva.

###

### Annak ellenőrzése, hogy a domain DNS-beállításai megfelelően vannak-e konfigurálva {#making-sure-the-domain-dns-settings-are-properly-configured}

Ahhoz, hogy a hozzárendelés működjön, meg kell győződnöd arról, hogy a hozzárendelni tervezett domain a hálózatod IP-címére mutat. Vedd figyelembe, hogy a hálózat IP-címére van szükséged – annak a domainnek az IP-címére, ahol az Ultimate Multisite telepítve van –, nem pedig annak az egyéni domainnek az IP-címére, amelyet hozzá szeretnél rendelni. Egy adott domain IP-címének megkereséséhez például a [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) használatát javasoljuk.

A domain helyes hozzárendeléséhez hozzá kell adnod egy **A RECORD** bejegyzést a **DNS** konfigurációdhoz, amely erre az **IP-címre** mutat. A DNS-kezelés jelentősen eltér a különböző domainregisztrátoroknál, de rengeteg online útmutató foglalkozik ezzel, ha rákeresel arra, hogy „ _Creating A Record on XXXX_ ”, ahol az XXXX a domainregisztrátorod (pl.: „ _Creating A Record on_ _GoDaddy_ ”).

Ha gondod adódik a működés beállításával, **vedd fel a kapcsolatot a domainregisztrátorod támogatásával**, és ők segíteni tudnak ebben a részben.

Ha azt tervezed, hogy engedélyezed ügyfeleidnek a saját domainjeik hozzárendelését, akkor ezt a részt nekik kell elvégezniük. Irányítsd őket a regisztrátoruk támogatási rendszeréhez, ha nem tudják létrehozni az A Recordot.

### Egyéni domainnév hozzárendelése Super Adminként {#mapping-custom-domain-name-as-super-admin}

Amikor super adminként vagy bejelentkezve a hálózatodon, könnyedén hozzáadhatsz és kezelhetsz egyéni domainneveket az **Ultimate Multisite > Domainek** alatt.

![Domainek listaoldala az Ultimate Multisite felületén](/img/admin/domains-list.png)

Ezen az oldalon felül rákattinthatsz a **Domain hozzáadása** gombra, és megjelenik egy modális ablak, ahol beállíthatod és kitöltheted az **egyéni domainnevet**, **az alwebhelyet**, amelyre alkalmazni szeretnéd az egyéni domainnevet, valamint eldöntheted, hogy szeretnéd-e **elsődleges domainnévként** beállítani vagy sem (vedd figyelembe, hogy **több domainnevet is hozzárendelhetsz egy alwebhelyhez**).

![Domain hozzáadása modális ablak domainnévvel, webhelyválasztóval és elsődleges domain kapcsolóval](/img/admin/domain-add-modal.png)

Miután minden információt megadtál, alul rákattinthatsz a **Meglévő domain hozzáadása** gombra.

Ez elindítja az egyéni domain DNS-információinak ellenőrzési és lekérési folyamatát. Az oldal alján egy naplót is látsz, amelyben követheted a folyamat előrehaladását. A folyamat befejezése néhány percet vehet igénybe.

Ultimate Multisite v2.13.0 automatikusan létrehozza a belső domain bejegyzést is, amikor egy új site jön létre egy olyan hoszton, amelyet site-onkénti domainként kell kezelni. Ha a hoszt a hálózat elsődleges domainje, vagy a **Site URL** mezőn konfigurált megosztott checkout-űrlap alapdomainek egyike, az automatikus mapped-domain bejegyzés kimarad, hogy a megosztott alapdomain továbbra is elérhető maradjon minden site számára, amely használja.

Amikor egy ügyfél új domaint regisztrál a Domain Seller v1.3.0 vagy újabb verzióján keresztül, az Ultimate Multisite alapértelmezés szerint automatikusan hozzárendeli a regisztrált domaint az ügyfél hálózati site-jához. Az adminisztrátoroknak sikeres regisztráció után már nem kell külön mapped-domain bejegyzést hozzáadniuk, hacsak nem szeretnének olyan beállításokat módosítani, mint az elsődleges-domain jelző, az aktiválási állapot vagy az SSL-kezelés.

A **Stage** vagy az állapot **Checking DNS** értékről **Ready** értékre kell változzon, ha minden megfelelően van beállítva.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Ha a domain névre kattint, megtekinthet benne néhány beállítást. Nézzük meg őket röviden:

![Domain részletező oldal stage, site, active, primary és SSL kapcsolókkal](/img/admin/domain-edit.png)

**Stage:** Ez az a szakasz, amelyben a domain éppen van. Amikor először hozzáadja a domaint, valószínűleg a **Checking DNS** szakaszban lesz. A folyamat ellenőrzi a DNS bejegyzéseket, és megerősíti, hogy helyesek. Ezután a domain a **Checking SSL** szakaszba kerül. Az Ultimate Multisite ellenőrzi, hogy a domain rendelkezik-e SSL-lel vagy sem, és a domaint **Ready** vagy **Ready (without SSL)** kategóriába sorolja.

**Site:** Az ehhez a domainhez társított aldomain. A hozzárendelt domain ennek a konkrét site-nak a tartalmát fogja megjeleníteni.

**Active:** Ezzel a beállítással be- vagy kikapcsolhatja a domaint az aktiválásához vagy deaktiválásához.

**Is Primary Domain?:** Ügyfeleinek site-onként több hozzárendelt domainjük is lehet. Ezzel a beállítással kiválaszthatja, hogy ez legyen-e az adott site elsődleges domainje.

**Is Secure?:** Bár az Ultimate Multisite ellenőrzi, hogy a domain rendelkezik-e SSL-tanúsítvánnyal, mielőtt engedélyezi, manuálisan is kiválaszthatja, hogy a domain SSL-tanúsítvánnyal vagy anélkül töltődjön be. Vegye figyelembe, hogy ha a weboldal nem rendelkezik SSL-tanúsítvánnyal, és megpróbálja SSL-lel kényszerítve betölteni, hibákat okozhat.

### Egyéni domain név hozzárendelése Subsite felhasználóként {#mapping-custom-domain-name-as-subsite-user}

A Subsite adminisztrátorok egyéni domain neveket is hozzárendelhetnek a subsite admin Dashboard felületükről.

Először meg kell győződnie arról, hogy engedélyezi ezt a beállítást a **Domain mapping** beállítások alatt. Lásd az alábbi képernyőképet.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Ezt a beállítást a **Plan** szinten vagy a termékbeállításoknál is megadhatja vagy konfigurálhatja az **Ultimate Multisite > Products** alatt.

![Egyéni Domainek szakasz a termékszerkesztő oldalon](/img/config/product-custom-domains.png)

Amikor ezek közül bármelyik beállítás engedélyezve van, és egy subsite felhasználó számára megengedett az egyéni domain nevek hozzárendelése, a subsite felhasználónak látnia kell egy **Domains** nevű metaboxot az **Account** oldalon.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

A felhasználó rákattinthat az **Add Domain** gombra, és megjelenik egy modális ablak néhány utasítással.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

A felhasználó ezután rákattinthat a **Next Step** lehetőségre, és folytathatja az egyéni domain név hozzáadását. Azt is kiválaszthatja, hogy ez legyen-e az elsődleges domain vagy sem.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Az **Add Domain** gombra kattintás elindítja az egyéni domain DNS információinak ellenőrzési és lekérési folyamatát.

### A Domain Syncing ismertetése {#about-domain-syncing}

A Domain Syncing egy olyan folyamat, amelyben az Ultimate Multisite hozzáadja az egyéni domain nevet a tárhelyfiókjához kiegészítő domainként, **hogy a domain mapping működjön**.

A domain syncing automatikusan megtörténik, ha a tárhelyszolgáltatója rendelkezik integrációval az Ultimate Multisite domain mapping funkciójával. Jelenleg ezek a tárhelyszolgáltatók: _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ és _Cpanel._

Amikor egy tárhelyszolgáltatói integráció aktív, az Ultimate Multisite a szolgáltatóoldali DNS- vagy aldomain-létrehozási feladatot is sorba állíthatja az újonnan létrehozott site-okhoz. Ha nincs olyan integráció, amely figyel erre a feladatra, a háttérfeladat kimarad, hogy elkerülje a művelet nélküli várólista-bejegyzéseket. A hozzárendelt domainek DNS- és SSL-ellenőrzései továbbra is a normál domain-stage folyamaton keresztül futnak.

Ezt az integrációt az Ultimate Multisite beállításaiban, az **Integration** fül alatt kell aktiválnia.

![Integrations fül az Ultimate Multisite beállításaiban, tárhelyszolgáltatókkal](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Vegye figyelembe, hogy ha a tárhelyszolgáltatója nem tartozik a fent említett szolgáltatók közé, **manuálisan kell szinkronizálnia vagy hozzáadnia a domain nevet** a tárhelyfiókjához._
