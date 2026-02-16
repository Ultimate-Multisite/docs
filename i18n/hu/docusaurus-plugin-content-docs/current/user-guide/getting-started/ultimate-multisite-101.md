---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Az Ultimate Multisite egy WordPress Multisite bővítmény, amellyel WaaS-t, vagyis weboldalakat szolgáltatásként (Websites as a Service) kínálhatsz ügyfeleinek. Mielőtt belemerülnénk, és megismernénk, hogyan segíthet az Ultimate Multisite a vállalkozásodnak és ügyfeleidnek, először néhány alapvető fogalmat kell tisztáznunk.

## A WordPress Multisite

Legtöbbünk ismeri a hagyományos WordPress telepítést. Vagy a tárhelyszolgáltató vezérlőpultján keresztül hozod létre, vagy – ha bátrabb vagy – beállítasz egy új webszervert és adatbázist, letöltöd az alapfájlokat, és elindítod a telepítési folyamatot.

Ez milliónyi WordPress oldal számára működik világszerte, de egy ügynökség vagy tárhelyszolgáltató szemszögéből beszéljünk egy kicsit a mennyiségekről.

Bár egyetlen WordPress oldalt létrehozni gyerekjáték, sőt akár százat is automatizált vezérlőpulton keresztül, a problémák hamar megjelennek, amikor ezeket az oldalakat kezelni kell. Ha nem törődsz velük, könnyű célponttá válsz a rosszindulatú szoftverek számára. A karbantartás viszont erőfeszítést és erőforrásokat igényel, és bár léteznek külső eszközök és bővítmények a WordPress oldalak kezelésének és adminisztrációjának egyszerűsítésére, az a tény, hogy az ügyfelek adminisztrátori hozzáféréssel rendelkeznek, könnyen felülírhatja ezeket az erőfeszítéseket.

A WordPress alaprendszere tartalmaz egy funkciót, amelyet egyszerűen „Multisite"-nak hívnak. Ennek gyökerei 2010-ig nyúlnak vissza, a WordPress 3.0 megjelenéséig. Azóta számos frissítésen esett át, amelyek új funkciókat vezettek be és javították a biztonságot.

Lényegében a WordPress multisite így képzelhető el: Egy egyetem egyetlen WordPress telepítést tart fenn, de minden kar a saját WordPress oldalát kezeli.

Nézzük meg ennek az állításnak néhány alapvető fogalmát, amelyek nemcsak az Ultimate Multisite dokumentációjában, hanem a WordPress közösségben is előfordulnak.

### A hálózat

WordPress szempontból a multisite hálózat azt jelenti, hogy több aloldalt egyetlen vezérlőpultról lehet kezelni. Bár a multisite hálózat létrehozása tárhelyszolgáltatónként eltérő, a végeredmény általában néhány további beállítás a wp-config.php fájlban, amelyek tudatják a WordPress-szel, hogy ebben a speciális módban működik.

A multisite hálózat és az önálló WordPress telepítés között számos jelentős különbség van, amelyeket röviden áttekintünk.

#### Aldomain vs. alkönyvtár

Az egyik legfontosabb döntés, amit meg kell hoznod, hogy a multisite telepítés _alkönyvtárakkal_ vagy _aldomainekkel_ fog-e működni. Az Ultimate Multisite mindkét opcióval egyformán jól működik, de van néhány építészeti különbség a két konfiguráció között.

_Alkönyvtár_ konfigurációban a hálózati oldalak a fő domain nevéből származó útvonalat örökölnek. Például egy 'site1' nevű hálózati oldal teljes URL-je https://domain.com/site1 lesz. _Aldomain_ konfigurációban a hálózati oldal saját _aldomaint_ kap a fő domain névből. Így egy 'site1' nevű oldal teljes URL-je https://site1.domain.com/ lesz.

Bár mindkét opció teljesen érvényes választás, az _aldomainek_ használata számos előnnyel jár, de több átgondolást és tervezést is igényel az architektúrában.

DNS szempontból az _alkönyvtárak_ használata viszonylag egyszerű kihívást jelent. Mivel a hálózati oldalak egyszerűen a szülő útvonal gyermekei, csak egyetlen domain név bejegyzésre van szükség a fő domain névhez. _Aldomainek_ esetén a kihívás kissé összetettebb: vagy külön CNAME bejegyzés kell minden hálózati oldalhoz, vagy wildcard (*) bejegyzés a DNS rekordokban.

Egy további szempont az SSL, valamint az SSL tanúsítványok kiállítása és használata. _Alkönyvtár_ konfigurációban egyetlen domain tanúsítvány használható, mivel a hálózati oldalak egyszerűen a fő domain név útvonalai. Így egy domain.com tanúsítvány megfelelően biztosítja az SSL-t a https://domain.com/site1, https://domain.com/site2 és további címekhez.

_Aldomain_ konfigurációban a wildcard SSL tanúsítvány használata az egyik leggyakoribb megoldás. Ez a típusú SSL tanúsítvány titkosítást biztosít egy domainhez és annak _aldomainjeihez_. Így egy wildcard SSL tanúsítvány titkosítást nyújt a https://site1.domain.com, https://site2.domain.com és a https://domain.com címekhez egyaránt.

Bár léteznek más megoldások is, ezek gyakran korlátozott hatókörűek és alkalmazásúak, valamint további konfigurációt és megfontolást igényelnek a megfelelőség szempontjából.

#### Bővítmények és sablonok

Amit a WordPress ad, azt el is veszi, legalábbis az ügyfél szemszögéből. Önálló WordPress telepítésben, ha a webhely adminisztrátora rossz bővítményt telepít, vagy nem tartja naprakészen a telepítést, ennek a cselekedetnek ő maga az egyetlen áldozata. Azonban ha egy webhely adminisztrátora rossz bővítményt telepít egy multisite telepítésen, az a hálózatba telepített összes oldalt veszélybe sodorja.

Ezért multisite konfigurációban a WordPress eltávolítja a webhely adminisztrátorok bővítmény- és sablontelepítési képességét, és ezt egy újonnan létrehozott hálózati adminisztrátor vagy „szuperadmin" szerepkörre ruházza át. Ez a kiemelt szerepkör dönthet arról, hogy a hálózati oldalak adminisztrátorai láthatják-e vagy hozzáférhetnek-e a bővítmények menühöz a vezérlőpultjukon, és ha igen, ezek a jogosultságok kiterjednek-e a bővítmények _aktiválására_ vagy _deaktiválására_.

Ebből a szempontból a hálózati adminisztrátor felelős a bővítmények és sablonok hálózatba történő telepítéséért, és delegálja a jogosultságokat ezek használatára a hálózati oldalaknak. A webhely adminisztrátorok nem telepíthetnek bővítményeket és sablonokat, és nem férhetnek hozzá az oldalukhoz nem rendelt bővítményekhez és sablonokhoz.

#### Felhasználók és adminisztrátorok

A WordPress Multisite-ban minden hálózati oldal ugyanazt az adatbázist használja, ezért ugyanazokat a felhasználókat, szerepköröket és képességeket is megosztják. A legszemléletesebben úgy gondolhatunk rá, hogy minden felhasználó a hálózat tagja, nem pedig egy adott oldalé.

Ezt figyelembe véve nem biztos, hogy kívánatos a felhasználók létrehozásának engedélyezése, ezért a WordPress Multisite eltávolítja ezt a képességet a webhely adminisztrátoroktól, és a hálózati adminisztrátorra ruházza. A hálózati adminisztrátor viszont delegálhatja a szükséges jogosultságokat a webhely adminisztrátornak, hogy felhasználói fiókokat hozhasson létre a saját oldalához.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

A fentiek megismétléseként, bár a felhasználói fiókok az oldalhoz tartozónak tűnnek, valójában a hálózathoz vannak hozzárendelve, ezért egyedinek kell lenniük a hálózaton belül. Előfordulhatnak olyan esetek, amikor a felhasználónevek emiatt nem regisztrálhatók.

Bár ez nem idegen fogalom vállalati rendszerekben, ez az egyetlen forrásból származó felhasználói regisztráció és hitelesítés gyakran nehezen érthető fogalom azok számára, akik az önálló WordPress telepítésekhez szoktak, ahol a felhasználókezelés némileg egyszerűbb.

#### Média

Míg a hálózati oldalak egyetlen adatbázist osztanak meg a WordPress Multisite-ban, külön útvonalakat tartanak fenn a fájlrendszerben a médiafájlok számára.

A szabványos WordPress hely (wp-content/uploads) megmarad; azonban az útvonala módosul, hogy tükrözze a hálózati oldal egyedi azonosítóját. Következésképpen egy hálózati oldal médiafájljai wp-contents/uploads/site/[id] formában jelennek meg.

#### Permalinkek

Korábban említettük, hogy az _aldomain_ konfigurációnak vannak előnyei az _alkönyvtárral_ szemben, és itt van az egyik: az útvonalak.

_Alkönyvtár_ konfigurációban a fő oldal (az első oldal, amely a hálózat létrehozásakor jön létre) és a hálózati aloldalak ugyanazt az útvonalat kell, hogy megosszák a domain névtől kezdve. Ez számos konfliktus lehetőségét rejti magában.

A bejegyzéseknél egy kötelező /blog/ útvonal kerül a fő oldalhoz, hogy elkerülje az ütközéseket a hálózati oldalakkal. Ez azt jelenti, hogy a szép permalinkek, mint például a 'Bejegyzés neve', domain.name/blog/bejegyzés-neve/ formában jelennek meg.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_Aldomain_ konfigurációban erre a lépésre nincs szükség, mert minden hálózati oldal teljes domain elválasztással rendelkezik, így nem kell egyetlen útvonalra támaszkodnia. Ehelyett saját, az _aldomainjükön_ alapuló egyedi útvonalakat tartanak fenn.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statikus oldalak

_Alkönyvtár_ konfigurációban az elnevezési konfliktusok lehetősége a statikus oldalakra is kiterjed, mivel a fő oldal és a hálózati oldalak ugyanazt az útvonalat osztják meg.

Ennek megelőzésére a WordPress lehetőséget biztosít bizonyos oldalnevek tiltólistára helyezésére, hogy ne ütközzenek az első oldal neveivel. Általában a hálózati adminisztrátor a fő oldal oldalainak gyökér útvonalait adja meg.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_Aldomain_ konfigurációban az elnevezési konfliktusok lehetőségét az _aldomain_ mérsékli, mivel az egyedi a hálózati oldalhoz, és semmilyen módon nem kapcsolódik a fő oldalhoz.

### Regisztráció

A WordPress Multisite hálózati beállításain belül számos új felhasználói regisztrációs lehetőség érhető el, amelyek lehetővé teszik új és meglévő felhasználóknak oldalak létrehozását.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Az önálló WordPress telepítésekkel ellentétben a hálózati oldalak nem rendelkeznek a megszokott lehetőségekkel a felhasználói regisztrációk engedélyezésére vagy szerepkörökhöz rendelésére.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Amikor felhasználói fiókokat hoznak létre, ezek a fiókok hálózati szinten jönnek létre. Így ahelyett, hogy egy adott oldalhoz tartoznának, a hálózathoz tartoznak. Ennek vannak sajátos előnyei és hátrányai.

Tegyük fel például, hogy a WordPress Multisite-od hírek és információk nyújtásával foglalkozik. Létrehoznád a multisite-ot, majd hálózati oldalakat hoznál létre pénzügy, technológia, szórakoztatás és más érdeklődési területek számára, miközben megtartanád az általános ellenőrzést a bővítmények és sablonok felett. Minden hálózati oldal sokkal nagyobb mértékben szabályozhatná a saját oldalának megjelenését, hangulatát és felhasználói élményét, mint amennyire az egyéni bejegyzéstípusok vagy a hagyományos bejegyzéskategóriák lehetővé tennék.

Ebből következően, amikor egy felhasználó bejelentkezik, a hálózatba jelentkezik be, és végső soron minden hálózati oldalra is be van jelentkezve, így zökkenőmentes élményt nyújt. Ha az új oldalad előfizetéses alapú lenne, ez lenne az ideális megoldás és eredmény.

Ha azonban a multisite tervezett jellege és célja az, hogy különálló hálózati oldalakat kínáljon, amelyeknek nincs kapcsolatuk egymással, szinte mindig szükség van külső vagy további bővítményekre a felhasználói szerepkörök kezeléséhez.

### Domain és SSL

Beszéljünk egy WordPress Multisite telepítésről, amely szinte elkerüli a figyelmünket – a WordPress.com-ról. Ez messze a legkiterjedtebb példa egy WordPress multisite-ra, és bemutatja annak széleskörű testreszabási és célokhoz igazítási képességeit.

Manapság a modern interneten az SSL használata szinte kötelező, és a WordPress multisite-ok hálózati adminisztrátorai hamar szembesülnek ezekkel a kihívásokkal.

_Aldomain_ konfigurációban az oldalak a gyökér domain név alapján jönnek létre. Így egy 'site1' nevű oldal 'site1.domain.com' néven jön létre. Wildcard SSL tanúsítvány használatával a hálózati adminisztrátor sikeresen megoldhatja ezt a kihívást, és SSL titkosítási képességeket biztosíthat a hálózat számára.

A WordPress Multisite tartalmaz egy domain mapping funkciót, amely lehetővé teszi, hogy a hálózati oldalakat egyéni domain nevekhez vagy a hálózat gyökér domainjétől eltérő domain nevekhez társítsuk.

A hálózati adminisztrátorok számára ez egy további összetettségi réteget jelent mind a domain név konfigurációjában, mind az SSL tanúsítványok kiállításában és karbantartásában.

Ebből a szempontból, míg a WordPress Multisite lehetőséget biztosít arra, hogy a [www.anotherdomain.com](http://www.anotherdomain.com) a 'site1'-hez legyen társítva, a hálózati adminisztrátorra hárul a DNS bejegyzések és az SSL tanúsítványok implementációjának külső kezelése.

## Ultimate Multisite

Miután megértettük a különbségeket az önálló WordPress telepítés és a Multisite telepítés között, nézzük meg, hogyan válik az Ultimate Multisite a végső fegyvertárrá a weboldalak szolgáltatásként való nyújtásához.

### Bevezetés

Az Ultimate Multisite a svájci bicskád, amikor Websites as a Service (WaaS) létrehozásáról van szó. Gondolj a Wix.com-ra, a Squarespace-re, a WordPress.com-ra, aztán képzeld el, hogy a saját szolgáltatásodat üzemelteted.

A motorháztető alatt az Ultimate Multisite a WordPress Multisite-ot használja, de olyan módon, amely nemcsak megoldja a hálózati adminisztrátorok multisite telepítéseknél felmerülő számtalan kihívását, hanem bővíti is a képességeket, lehetővé téve a felhasználási esetek széles skálájának támogatását.

A következő szakaszokban áttekintünk néhány gyakori felhasználási esetet és az ezek támogatásához szükséges megfontolásokat.

### Felhasználási esetek

#### 1. eset: Egy ügynökség

Jellemzően egy ügynökség alapvető képességei a webhelyek tervezésében rejlenek, míg az olyan szempontok, mint a tárhely vagy a marketing, kiegészítő szolgáltatásként szerepelnek.

Az ügynökségek számára az Ultimate Multisite hihetetlen értékajánlatot kínál, mivel képes több webhelyet egyetlen platformon üzemeltetni és kezelni. Még inkább így van ez azoknál az ügynökségeknél, amelyek bizonyos sablonokra – például GeneratePress, Astra, OceanWP vagy másokra – szabványosítják a tervezést, és kihasználhatják az Ultimate Multisite azon képességét, hogy automatikusan aktiválja ezeket a sablonokat minden új oldalhoz.

Hasonlóképpen, a gyakori és népszerű bővítmények ügynökségi árazásának bőségével az Ultimate Multisite használata lehetővé teszi az ügynökségeknek, hogy kiaknázzák meglévő befektetéseiket egy közös platform biztosításával, ahonnan a bővítmények telepíthetők, karbantarthatók és használhatók.

Valószínűleg egy konfiguráció használata lenne kívánatos, és szerencsére az Ultimate Multisite hihetetlenül egyszerűvé teszi a domain mapping és az SSL tanúsítványok kezelését számos népszerű tárhelyszolgáltatóval, valamint olyan szolgáltatásokkal való integrációival, mint a Cloudflare és a cPanel.

Így e szolgáltatók egyikének kihasználásával vagy az Ultimate Multisite Cloudflare mögé helyezésével a domainek és SSL tanúsítványok kezelése meglehetősen egyszerűvé válik.

Azok az ügynökségek, amelyek szoros ellenőrzést szeretnének tartani az oldalak létrehozása felett, értékelni fogják, milyen könnyedén hozhatnak létre oldalakat, és társíthatják azokat ügyfelekhez és csomagokhoz az Ultimate Multisite egyszerűsített felületén keresztül.

![Ultimate Multisite webhelykezelő felület](/img/admin/sites-list.png)

A bővítmények és sablonok szoros ellenőrzése termékalapú, az Ultimate Multisite intuitív felületein keresztül, lehetővé téve a bővítmények és sablonok elérhetővé tételét vagy elrejtését, valamint aktiválási állapotuk beállítását új oldal létrehozásakor.

![Termék bővítménykorlátozások felület](/img/config/product-plugins.png)

A sablonok hasonló funkcionalitást biztosítanak, lehetővé téve bizonyos sablonok aktiválását vagy elrejtését az oldal létrehozásakor.

![Termék sablonkorlátozások felület](/img/config/product-themes.png)

Az ügynökségek nyugalomra találnak az Ultimate Multisite-tal, amely lehetővé teszi számukra, hogy azt tegyék, amit a legjobban tudnak – kivételes weboldalakat tervezzenek.

#### 2. eset: Niche szolgáltató

Van egy régi mondás: „Csinálj egy dolgot, és csináld jól." Sok szakember számára ez egy termék vagy szolgáltatás létrehozását jelenti egyetlen központi ötlet köré.

Talán lelkes golfozó vagy, aki kluboknak népszerűsít weboldalakat, vagy esetleg szenvedélyes esport játékos, aki klánonak biztosít weboldalakat. Vagy egy magánszemély, aki foglalási szolgáltatást népszerűsít éttermeknek?

Sok okból szeretnéd a szolgáltatásokat közös keretrendszeren és platformon biztosítani. Lehet, hogy egyedi bővítményeket terveztél vagy vásároltál a szükséges funkcionalitás biztosításához, vagy az iparági bevált gyakorlatok megkövetelik a tervezés valamilyen szabványosított megközelítését.

Az Ultimate Multisite egyik innovatív funkciója a sablon oldalak használata. A sablon oldal olyan oldal, ahol a sablon telepítve és aktiválva van, a szükséges bővítmények telepítve és aktiválva vannak, valamint minta bejegyzések vagy oldalak vannak létrehozva. Amikor egy ügyfél új oldalt hoz létre a sablon alapján, a sablon tartalma és beállításai átmásolódnak az újonnan létrehozott oldalra.

A niche oldalak és szolgáltatások szolgáltatója számára ez páratlan előnyt biztosít abban, hogy azonnal létrehozhat egy használatra kész oldalt egyedi bővítményekkel és dizájnnal. Az ügyfélnek csak minimális inputot kell megadnia a szolgáltatás befejezéséhez.

A követelményektől függően mind az _alkönyvtár_, mind az _aldomain_ konfiguráció megfelelő lehet, amely esetben az architektúra választása egy egyszerű SSL tanúsítvány az _alkönyvtárakhoz_ vagy egy wildcard SSL tanúsítvány az _aldomainekhez_ között lenne.

#### 3. eset: WordPress webtárhely

Számtalan módja van a WordPress oldalak üzemeltetésének, de ritkán olyan egyszerű, mint webtárhelyet biztosítani egy ügyfélnek előre telepített WordPress verzióval. Ennek oka, hogy számos döntésnek és megfontolásnak kell összeállnia egy értelmes szolgáltatás nyújtásához.

Az Ultimate Multisite ebben a területen kiváló, átfogó, kulcsrakész megoldást biztosítva a WordPress oldalak üzemeltetéséhez. A megoldás tartalmazza az előfizetési szolgáltatások, fizetésgyűjtés, pénztár űrlapok, kedvezménykuponok és ügyfélkommunikáció alapvető mechanizmusait.

A WordPress Multisite helyes telepítéséhez, konfigurálásához és karbantartásához szükséges integráns munkát az Ultimate Multisite nagymértékben megkönnyíti, olyannyira, hogy a hálózati adminisztrátoroknak csak a szolgáltatásukhoz vagy niche-ükhöz kapcsolódó szempontokat kell figyelembe venniük, mint például a termékszintek, árazás és szolgáltatási ajánlatok.

Az Ultimate Multisite-tal integrálni kívánó fejlesztők számára a megoldás átfogó RESTful API-t és Webhookokat is kínál eseményértesítésekhez.

Külső bővítmények és licencek sokaságára való támaszkodás nélkül az Ultimate Multisite funkciókban gazdag és összehasonlítható megoldást nyújt a Wix, Squarespace, WordPress.com és mások megoldásaival.

### Architektúra megfontolások

Bár nem átfogó útmutató, a következő elemek iránymutatásul szolgálnak a technológiák helyes kiválasztásához egy Ultimate Multisite telepítés támogatásához.

#### Osztott vs. dedikált tárhely

Sajnos nem minden tárhelyszolgáltató egyforma, és néhányan szélsőséges szerver sűrűséget alkalmaznak. Az alacsony költségű szolgáltatók jellemzően a szerver sűrűség maximalizálásával termelnek bevételt. Így az Ultimate Multisite telepítésed lehet, hogy csak egy a szerveren lévő több száz oldal közül.

A szolgáltató megfelelő védelmei nélkül az osztott szerveren lévő oldalak a „zajos szomszéd" problémát tapasztalják. Ez azt jelenti, hogy egy oldal ugyanazon a szerveren annyi erőforrást fogyaszt, hogy más oldalaknak versengeniük kell a maradék erőforrásokért. Ez gyakran lassú vagy nem időben válaszoló oldalakként jelentkezik.

Mint webtárhely-szolgáltató, a tovagyűrűző hatások azt jelentik, hogy ügyfeleid lassú sebességet, alacsony oldal rangsorolást és magas visszafordulási arányt tapasztalnak, ami gyakran ügyfélvesztéshez vezet, ahogy máshol keresnek szolgáltatásokat.

Röviden: az olcsó nem jelent jót.

Az Ultimate Multisite ismerten jól működik számos jó tárhelyszolgáltatóval, és jól integrálódik környezetükbe, olyan funkciókat biztosítva, mint a domain mapping és az automatikus SSL. Ezek a szolgáltatók értékelik a teljesítményt, és magasabb színvonalú szolgáltatást nyújtanak, mint az osztott tárhely.

A kompatibilis szolgáltatók listájáért és az egyes szolgáltatók teljes beállítási útmutatójáért kérjük, tekintsd meg a Kompatibilis szolgáltatók dokumentációját.

#### Teljesítmény megfontolások

Az Ultimate Multisite nem lassú alkalmazás, sőt, rendkívül gyors. Azonban csak annyira jól teljesít, amennyire az alapul szolgáló alkalmazás és infrastruktúra lehetővé teszi, és csak azt tudja kihasználni, amihez hozzáférése van.

Gondolj erre: Te vagy egy Ultimate Multisite telepítés hálózati adminisztrátora 100 oldallal. Néhány oldal jól teljesít, és naponta számos weboldal látogatót vonz.

Ez a forgatókönyv kisebb léptékben, mondjuk egy-öt oldallal, más lenne, de idővel a méretezési problémák nyilvánvalóvá válnának.

Ha nem foglalkozol vele, az egyetlen Ultimate Multisite oldal lenne felelős az oldalak összes látogatójának kéréseinek teljesítéséért. Ezek a kérések vonatkozhatnak dinamikus PHP oldalakra vagy statikus eszközökre, mint például stíluslapok, JavaScript vagy médiafájlok. Akár egy, akár száz oldalról van szó, ezek a feladatok ismétlődővé, monotonná és pazarlóvá válnak. Felesleges CPU teljesítményt és memóriát használni egy PHP fájl feldolgozására, amikor a kimenet ugyanaz a statikus információ minden kéréshez.

Hasonlóképpen egyetlen kérés egy PHP vagy HTML oldalra további kéréseket generál szkriptek, stíluslapok és képfájlok számára. Ezek a kérések közvetlenül az Ultimate Multisite szerverhez irányulnak.

Könnyen megoldhatnád ezt a problémát a szerver frissítésével, de ez nem oldja meg a másodlagos problémát – a földrajzi késleltetéseket. Csak több szerver több helyen tudná megfelelően kezelni ezt a problémát.

Ezért a legtöbb hálózati adminisztrátor front-end gyorsítótárazási megoldásokat és tartalomelosztó hálózatokat (CDN) használ a statikus oldalak kéréseinek teljesítésére. Ezeknek a kéréseknek a teljesítése és az eszközök kiszolgálása, mielőtt a kérés elérné a szervert, feldolgozási erőforrásokat takarít meg, kiküszöböli a késéseket, elkerüli a felesleges frissítéseket és maximalizálja a technológiai befektetéseket.

Az Ultimate Multisite tartalmaz egy kifinomult Cloudflare kiegészítőt, amely lehetővé teszi a hálózati adminisztrátorok számára, hogy telepítéseiket a Cloudflare mögé helyezzék, és kihasználják nemcsak a gyorsítótárazási képességeit, hanem a DNS tárhelyet, SSL tanúsítványokat és biztonsági mechanizmusokat is.

#### Biztonsági mentések

Megkérdezhetnél 50 embert tanácsért a biztonsági mentésekről, és 50 különböző véleményt kapnál a biztonsági mentési stratégiákról. A válasz az, hogy attól függ.

Ami nem vitatott, az az, hogy biztonsági mentések szükségesek, és szinte elképzelhetetlen, hogy ezeket ne a szolgáltató kezelje, különösen egy olyan szolgáltató, amely felügyelt szolgáltatást kínál. Következésképpen az ügyfelek a hálózati adminisztrátortól várják, hogy biztosítsa és kezelje ezt a szolgáltatást. Hogy a hálózati adminisztrátor kihez fordul, az egy teljesen más kérdés.

E szakasz céljaira egyezzünk meg abban, hogy a biztonsági mentés a rendszer állapotának időpont szerinti másolata a biztonsági mentés elindításakor. Egyszerűen fogalmazva, bármi is a rendszer állapota a biztonsági mentés idején, az az állapot rögzítve és biztonságban tárolva lesz a biztonsági mentésben.

Ezzel a megértéssel a válasz arra, hogyan érhetők el a biztonsági mentések és mi a legjobb a környezetednek, nagymértékben függ a követelményeidtől és a tárhelyszolgáltató azon képességétől, hogy kielégítse ezeket a követelményeket. Azonban a leginkább véleményes megoldásoktól a legkevésbé véleményesekig haladva az alábbi opciók iránymutatásul szolgálhatnak.

#### Pillanatképek

A pillanatképek az ezüstgolyók a biztonsági mentéseknél, mert egyszerűek, nem bonyolultak (amíg nem akarsz visszaállítani) és „egyszerűen működnek". Szükség van némi segítségre a szolgáltatódtól, és főként csak akkor érvényes, ha VPS-ed (Virtual Private Server) vagy hasonlód van. Számos, a „Kompatibilis szolgáltatók" dokumentációnkban felsorolt szolgáltató kínál biztonsági mentéseket, amelyek nem igényelnek további beavatkozást vagy megfontolást a hálózati adminisztrátortól.

Míg a hagyományos biztonsági mentések fájlokra és adatbázisokra irányulnak, a pillanatkép a teljes lemezre irányul. Ez azt jelenti, hogy nemcsak az oldal adatai kerülnek rögzítésre a pillanatképben, hanem az operációs rendszer és a konfiguráció is. Sokak számára ez határozott előny, mivel egy új rendszer szinte azonnal létrehozható egy pillanatképből, és üzembe helyezhető egy hibás példány helyettesítésére. Hasonlóképpen a helyreállítási folyamat a fájlok lekéréséhez csak a pillanatkép lemezként való csatolását igényli egy meglévő példányhoz, hogy a fájlok hozzáférhetők és másolhatók legyenek.

A pillanatképek további költséggel járhatnak a tárhelyszolgáltatónál, de ez biztosítás a balesetek ellen.

#### Külső szkriptek

Úgy tűnik, nincs hiány külső szkriptekből és megoldásokból a WordPress és MySQL erőforrások biztonsági mentésére, és ezek jól működnének az Ultimate Multisite-tal, mivel ez egy WordPress bővítmény, amely a WordPress fájlrendszert és adatbázist használja. Így egy megoldás, amely WordPress oldalakat ment, megfelelően fedezné az Ultimate Multisite igényeit.

Nem tudunk egyetlen szkriptet sem ajánlani a másik helyett, de általános tanácsunk az, hogy futtass több biztonsági mentési és visszaállítási tesztet, hogy megbizonyosodj az eredmények helyességéről, és „legyél biztos a biztosban" a szkript és funkcionalitásának folyamatos értékelésével, különösen, ha valamilyen differenciális biztonsági mentési stratégiát alkalmazol.

Meg kell jegyezni, hogy ezek a szkriptek futás közben növelik a rendszerterhelést, amit figyelembe kell venni.

#### Bővítmények

Szinte nincs olyan probléma a WordPress-ben, amelyet ne lehetne bővítménnyel megoldani, és ha a külső szkriptek kezelése nem a te műfajod, akkor talán egy bővítmény a következő legjobb lehetőség.

Bár a bővítmények opcióikban és funkcióikban eltérnek, többnyire ugyanazt a funkciót látják el: másolatot készítenek a WordPress fájlokról és adatbázis tartalmáról. Ezt követően a funkcionalitások eltérnek, mivel egyes bővítmények külső szolgáltatásokba, például Google Drive-ra vagy Dropboxra, vagy valamilyen kompatibilis objektumtárolási szolgáltatásba, például S3-ba, Wasabi-ba vagy másokba szállíthatják a biztonsági mentéseket. Az átfogóbb bővítmények differenciális biztonsági mentéseket biztosítanak, vagy valamilyen stratégiát a csak módosított adatok biztonsági mentésére a külső tárolási költségek megtakarítása érdekében.

A bővítmény kiválasztásakor ügyelj arra, hogy ellenőrizd, multisite-kompatibilis-e. Működésének jellegéből adódóan a biztonsági mentés futása közben átmeneti terhelésre számíthatsz a szerveren, amíg a folyamat be nem fejeződik.

#### Domain és SSL

Már sokat beszéltünk a domain nevekről multisite _aldomain_ módban. A hálózati adminisztrátorok szinte univerzális megoldása a wildcard DNS bejegyzések használata.

![Wildcard DNS bejegyzés konfigurációs példa](/img/config/settings-domain-mapping.png)

Ez a típusú DNS bejegyzés sikeresen feloldja az _aldomaineket_, mint például 'site1.domain.com' és 'site2.domain.com' az 1.2.3.4 IP címre, így támogatva az Ultimate Multisite-ot és tágabb értelemben a WordPress Multisite-ot _aldomain_ módban.

Ez tökéletesen működhet HTTP esetén, mert a célgazda a HTTP fejlécekből olvasható, de ritkán olyan egyszerű a web manapság, ahol a biztonságos HTTPS tranzakciók szinte kötelezőek.

Szerencsére vannak egyszerű lehetőségek az SSL tanúsítványokra. _Alkönyvtár_ módban normál domain tanúsítvány használható. Ezek könnyen és ingyenesen elérhetők azoknál a tárhelyszolgáltatóknál, akik az ingyenes LetsEncrypt szolgáltatást vagy más forrást használhatnak. Egyébként ezek kereskedelmi forgalomban elérhetők a tanúsító hatóságoktól, ha képes vagy létrehozni a tanúsítvány-aláírási kérelmet.

_Aldomain_ módban a wildcard SSL tanúsítvány használata tökéletesen párosul a wildcard domainnel, és lehetővé teszi, hogy a tanúsítvány érvényes legyen a gyökér domainre és az összes _aldomainre_ felesleges konfiguráció nélkül.

Azonban meg kell jegyezni, hogy a wildcard SSL tanúsítványok nem biztos, hogy működnek olyan szolgáltatásokkal, mint a Cloudflare, hacsak nem vállalati csomagod van, vagy a bejegyzést „csak DNS"-re állítod, amely esetben minden gyorsítótárazás és optimalizálás kikerülésre kerül.

Az Ultimate Multisite gyárilag megoldást kínál erre a problémára, bemutatva széleskörű tapasztalatunkat a WordPress multisite-ok igényeivel kapcsolatban. Ennek az egyszerű kiegészítőnek az aktiválásával az Ultimate Multisite a Cloudflare hitelesítő adataidat használja a hálózati oldalak DNS bejegyzéseinek automatikus hozzáadásához a Cloudflare-ben, és módjukat „proxyzottra" állítja. Ily módon minden hálózati aloldal létrehozásakor teljes körű Cloudflare védelmet és előnyöket élvez, beleértve az SSL-t is.

Az Ultimate Multisite telepítésed jellegétől és céljától függően szükség lehet arra, hogy az ügyfelek saját domaineket használjanak. Ebben az esetben a hálózati adminisztrátorra hárul két probléma megoldása. Egy, a domain név hosztolása, és kettő, az SSL tanúsítványok a domainhez.

Sokak számára a Cloudflare használata egyszerű lehetőség. Az ügyfélnek csak a Cloudflare-re kell helyeznie a domainjét, egy CNAME-et az Ultimate Multisite gyökér domainjére irányítania, és térképeznie a domainjét az Ultimate Multisite-ban, hogy kihasználhassa az egyéni domain nevét.

Ezen kívül alternatív megoldásokat kell keresni, ezért ajánl az Ultimate Multisite Kompatibilis szolgáltatók listáját. Ennek oka, hogy a DNS és SSL beállításának folyamata nem triviális feladat lehet. Azonban az Ultimate Multisite ezen szolgáltatókkal való integrációjával a komplexitás nagymértékben csökken, és az eljárás automatizált.

#### Bővítmények

Nagyon valószínű, hogy további bővítményekre lesz szükséged az ügyfeleid vagy hálózati oldalaid funkcionalitásának biztosításához. Működik-e minden bővítmény a WordPress Multisite-tal és az Ultimate Multisite-tal? Nos, attól függ.

Bár a legtöbb bővítmény telepíthető egy WordPress Multisite-ba, aktiválásuk és licencelésük szerzőnként eltér.

A kihívás abban rejlik, hogyan alkalmazzák a licencelést, mivel egyes bővítmények domain alapú licencelést igényelnek. Ez azt jelentené, hogy egyes bővítményeknél a hálózati adminisztrátornak manuálisan kell aktiválnia a licencet minden bővítményhez minden új oldalon.

Ezért érdemes lehet ellenőrizni a bővítmény szerzőjénél, hogyan működne a bővítményük WordPress Multisite-tal, és milyen speciális követelmények vagy eljárások szükségesek a licenceléshez.
