---
title: Mi az a WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Mi az a WordPress Multisite?

A WordPress alapfunkciói között megtalálható a „Multisite" nevű lehetőség, amely a WordPress 3.0 megjelenésekor, 2010-ben debütált. Azóta számos frissítésen esett át, amelyek új funkciókat hoztak és a biztonságot is megerősítették.

A WordPress multisite lényege egyszerűen megfogalmazva: Egy egyetem egyetlen WordPress-telepítést üzemeltet, de minden kar a saját WordPress-oldalát kezeli.

## 

## Mi pontosan a WordPress Multisite?

A Multisite a WordPress egyik funkciója, amely lehetővé teszi, hogy több webhely ugyanazt a WordPress-telepítést használja. A multisite aktiválásakor az eredeti WordPress-oldal átalakul, és támogatni kezdi azt, amit általában **oldalak hálózatának** nevezünk.

Ez a hálózat közös fájlrendszert használ (ami azt jelenti, hogy **a bővítmények és sablonok is közösek**), valamint közös az adatbázis, a WordPress alapfájljai, a wp-config.php stb.

Ez azt jelenti, hogy a WordPress, a sablonok és a bővítmények frissítését csak egyszer kell elvégezned az összes hálózati oldalhoz, mivel ugyanazokat a fájlokat használják a fájlrendszerben.

Ez a multisite egyik fő előnye: növelheted a kezelt oldalak számát, miközben az ügyfeleid oldalainak karbantartásához szükséges feladatok mennyisége változatlan marad.

## 

## Aldomain vagy alkönyvtár?

A WordPress multisite kétféle módban futtatható – és az egyiket ki kell választanod, amikor a hagyományos WordPress-telepítésedet multisite-ra alakítod át:

**Aldomain:** pl.: [site.domain.com](http://site.domain.com)

…vagy

**Alkönyvtár:** pl.: [yourdomain.com/site](http://yourdomain.com/site)

Mindkét módnak megvannak az előnyei és hátrányai, amelyeket mérlegelned kell a döntés meghozatalakor.

Egy dolgot fontos megjegyezni: ha egyszer döntöttél, nagyon nehéz átállni alkönyvtárról aldomainre vagy fordítva – különösen, ha már van néhány létrehozott oldalad.

A döntés előtt tartsd szem előtt a következőket:

Az **Alkönyvtár mód** a legegyszerűbb beállítás és karbantartás szempontjából. Ennek oka, hogy az összes oldal csak útvonalként csatlakozik a fő domainhez (pl. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Így csak **egyetlen SSL-tanúsítványra** van szükséged a fő domainhez, és ez lefedi az egész hálózatot.

Ugyanakkor az URL-struktúra miatt a Google és a legtöbb keresőmotor az alkönyvtár-alapú hálózatod összes aloldalát egyetlen nagy webhelynek tekinti. Ennek következtében az aloldalakon a végfelhasználók által hozzáadott tartalom befolyásolhatja például a főoldalad SEO-teljesítményét. A hatás mértéke vitatható, és van olyan érv is, hogy ez az elrendezés akár előnyös is lehet a SEO szempontjából.

Az **Aldomain mód** beállítása kicsit összetettebb, de az URL-struktúrája (pl. [subsite.yournetwork.com](http://subsite.yournetwork.com)) általában „professzionálisabbnak" tűnik.

Az aldomain mód beállításának egyik fő kihívása az SSL-lefedettség (HTTPS) biztosítása az egész hálózat számára. A böngészők ugyanis az aldomaineket különálló egységeknek tekintik. Ezért minden aldomainhez külön SSL-tanúsítványra van szükséged, vagy egy speciális tanúsítványra, az úgynevezett **Wildcard SSL-tanúsítványra**. Az utóbbi években a tárhelyszolgáltatók és vezérlőpanelek egyre jobbak az SSL-tanúsítványok kiállításában, és néhányan egyetlen kattintással kínálnak wildcard tanúsítványokat, így csökkentve a két mód közötti különbséget a beállítás bonyolultsága terén.

Az alkönyvtár móddal ellentétben az aldomain-alapú hálózat aloldalait a keresőmotorok külön webhelyeknek tekintik, ami azt jelenti, hogy az egyik aloldalon lévő tartalom egyáltalán nem befolyásolja a többi aloldal SEO-teljesítményét.

## A szuperadmin

Az egyoldalas WordPress-telepítések lehetővé teszik, hogy korlátlan számú felhasználót adj hozzá, és különböző jogosultságokkal rendelkező felhasználói szerepköröket adj nekik.

A WordPress Multisite-ban új felhasználótípus válik elérhetővé: **a szuperadmin** – és egy új adminisztrációs felület is megnyílik: **a hálózati adminisztrációs panel**.

Ahogy a neve is sugallja, a szuperadmin szuperképességekkel rendelkezik a hálózat felett: képes kezelni az összes aloldalt, bővítményt, sablont, mindent!

Amikor az egyoldalas WordPress-telepítésedet multisite-ra alakítod, az eredeti oldal adminisztrátora automatikusan szuperadminná lép elő.

A bővítményeket és sablonokat csak a szuperadminok telepíthetik vagy távolíthatják el a hálózati adminisztrációs panelről. Az aloldalak adminisztrátorai ezután aktiválhatják vagy deaktiválhatják ezeket a bővítményeket vagy sablonokat, kivéve, ha a szuperadmin hálózati szinten aktivál egy bővítményt – ez esetben az minden aloldalon mindig aktív marad.

_Megjegyzés: Amint láthatod, ha valakit meghívsz a hálózatodba és szuperadmin jogosultságot adsz neki, ezzel teljes irányítást adsz a hálózatod felett. Például más szuperadminok akár el is távolíthatják a te szuperadmin státuszodat, gyakorlatilag kizárva téged a saját hálózati adminisztrációs paneledből. Hogy az Ultimate Multisite ügyfelei részletesen szabályozhassák, mit tehetnek a további szuperadminok, van egy Support Agents nevű kiegészítőnk. Ez a kiegészítő lehetővé teszi egy újabb felhasználótípus – az ügynök – létrehozását, aki csak azokat a jogosultságokat kapja meg, amelyekre a hálózaton végzett feladataihoz szüksége van._

## Mi közös az aloldalak között és mi nem

Ahogy korábban említettük, a WordPress multisite egyik fő előnye, hogy az összes aloldal ugyanazokat a konfigurációkat, alapfájlokat, sablonokat, bővítményeket, WordPress-alapfájlokat stb. használja.

Vannak azonban olyan elemek, amelyek szépen elkülönülnek aloldalanként.

\- Például minden aloldal saját feltöltési mappát kap. Ennek eredményeként az egyik aloldal felhasználói által feltöltött fájlok nem érhetők el egy másik aloldalon.

\- Minden aloldalnak saját adminisztrációs panelje van, és aktiválhatja vagy deaktiválhatja a bővítményeket vagy sablonokat, kivéve, ha azokat egy szuperadmin hálózati szinten aktiválta.

\- A legtöbb adatbázistábla minden aloldalhoz külön jön létre, ami azt jelenti, hogy a bejegyzések, hozzászólások, oldalak, beállítások és egyebek aloldalanként elkülönülnek.

## Felhasználókezelés a WordPress Multisite-ban

A WordPress multisite egyik kényes témája a felhasználókezelés. A WordPress felhasználói táblája egyike azon kevés táblának, amely közös az összes aloldal között.

Ez az elrendezés problémákat okozhat attól függően, hogy mit tervezel építeni a hálózatoddal. Az alábbi példa segít szemléltetni a leggyakoribb problémát.

Képzeld el a következő helyzetet:

Létrehozol egy WordPress multisite hálózatot, és havi díjért aloldalakat kínálsz azoknak, akik webáruházat szeretnének.

Megérkezik az első fizető ügyfeled – János. Létrehozol Jánosnak egy oldalt a hálózatodon, telepíted az összes szükséges bővítményt, majd létrehozol egy felhasználót Jánosnak, hogy kezelni tudja az áruházát.

Aztán jön a második ügyfél – Alíz. Ugyanezt csinálod neki is, és most már neki is van áruháza a hálózatodon.

János és Alíz egyaránt ügyfeleid, de nem ismerik egymást. Ami még fontosabb: ha egyikük meglátogatja a másik webáruházát, nem tudhatja, hogy az ugyanazon az oldalhálózaton fut.

Egy nap Jánosnak új cipőre van szüksége, és megtalálja a tökéletest Alíz áruházában. Amikor megpróbálja befejezni a vásárlást, egy „ez az e-mail cím már használatban van" hibaüzenetet kap, ami furcsa, hiszen János 100%-ig biztos benne, hogy először jár Alíz weboldalán.

Az történt, hogy János felhasználója közös az egész hálózaton, így amikor megpróbál fiókot létrehozni a vásárláshoz Alíz oldalán, a WordPress észleli, hogy már létezik felhasználó ugyanezzel az e-mail címmel, és hibát dob.

_Megjegyzés: Tisztában vagyunk vele, hogy ez mennyire rossz lehet bizonyos felhasználási esetekben, ezért az Ultimate Multisite tartalmaz egy opciót, amely megkerüli a meglévő felhasználók szokásos ellenőrzését, lehetővé téve több fiók létrehozását ugyanazzal az e-mail címmel. Minden fiók egy aloldalhoz kötődik, így az ütközés kockázata minimális marad. A fenti példában János nem kapna hibaüzenetet, és gond nélkül megvehetné a cipőt. Ezt az opciót Több fiók engedélyezésének hívják, és az Ultimate Multisite → Beállítások → Bejelentkezés és regisztráció menüpontban aktiválható._

Bár a felhasználói tábla közös, a felhasználókat az aloldal adminisztrátorai vagy a szuperadmin hozzáadhatják és eltávolíthatják az aloldalakról, és akár különböző felhasználói szerepkörük is lehet a különböző aloldalakon.

## Teljesítménnyel kapcsolatos szempontok

A WordPress multisite igazán erős, ami a támogatható oldalak számát illeti. Ezt bizonyítja, hogy a [WordPress.com](https://WordPress.com), az Edublogs és a Campuspress mind multisite-alapú szolgáltatások, és mindegyik több ezer oldalt üzemeltet.

Bár elméletben nincs maximális korlát az egyetlen WordPress multisite telepítésen üzemeltethető oldalak számára, a gyakorlatban a kielégítően futtatható oldalak száma nagymértékben változhat különböző tényezőktől függően: mennyire dinamikusak az oldalak, milyen bővítmények érhetők el az aloldalak számára stb.

Ökölszabályként: minél egyszerűbb a hálózatod, annál jobb. Ha olyan oldalakat részesítesz előnyben, amelyek tartalma nem igazán dinamikus (így kiváló jelöltek az agresszív gyorsítótárazási stratégiákra), és a bővítménykészletet a lehető legkönnyebben tartod (minél kevesebb az aktív bővítmény, annál jobb), drasztikusan növelheted az üzemeltethető aloldalak számát.

A legjobb az egészben, hogy mivel itt minden WordPress, ugyanazok az eszközök, amelyeket már ismersz és szeretsz a teljesítményoptimalizáláshoz, a multisite hálózatokon is működnek.

A multisite fő szűk keresztmetszete az adatbázis, de ha minden más megfelelően van beállítva, akár néhány ezer oldal is elfér, mielőtt aggódnod kellene emiatt. És még akkor is vannak megoldások, amelyeket fokozatosan hozzáadhatsz (például adatbázis-sharding megoldások).
